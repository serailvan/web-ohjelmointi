const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

// Tämän avulla luetaan JSON-tietoja pyynnöistä.
app.use(express.json());

// Reitti hakemista varten
app.get("/haku/:sana", (req, res) => {
  // Osoite mistä haetaan.
  const { sana } = req.params; // Otetaan parametrinä suomenkielinen sana.
  const sanakirja = lueSanakirja(); // Käytetään lueSanakirja -funktiota.

  // Tarkistetaan, että löytyykö annettu sana sanakirjasta.
  if (sanakirja[sana]) {
    res.json({ suomi: sana, englanti: sanakirja[sana] }); // Palautetaan sekä suomen- että englanninkielinen sana.
  } else {
    res.status(404).json({ virhe: "Sanaa ei ole sanakirjassa." }); // Tai jos sanaa ei löydy printataan tämä.
  }
});

// Reitti lisäystä varten
app.post("/lisaa", (req, res) => {
  // Osoite mihin lisätään.
  const { suomi, englanti } = req.body; // Otetaan sana sekä suomeksi että englanniksi.
  if (!suomi || !englanti) {
    res.status(400).json({
      virhe: "Pitää olla sekä englanniksi että suomeksi. Yritä uudelleen.",
    });
  } else {
    // Jos sana on molemmilla kielillä niin lisätään se sanakirjaan.
    const sanakirja = lueSanakirja(); // Luetaan ensiksi sanakirja...
    sanakirja[suomi] = englanti; // ... jonka jälkeen lisätään uusi sana sanakirjaan...
    tallennaSanakirja(sanakirja); // ... Ja tallennetaan se :)
    res.json({ viesti: "Sana lisätty sanakirjaan." });
  }
});

// Lue sanakirja tiedostosta
function lueSanakirja() {
  try {
    const data = fs.readFileSync("./sanakirja.txt", {
      // Yritetään lukea tiedoston sanakirja.txt tiedot ja palauttaa ne.
      encoding: "utf8", // encoding -> miten tiedoston sisältö tulkataan eli tässä tilanteessa merkkijonona.
      flag: "r", // flag -> miten tiedostoa käsitellään eli tässä tilanteessa sitä luetaan.
    });
    const sanakirja = {};
    const rivit = data.split("\n");
    for (const rivi of rivit) {
      // Tiedot jaetaan riveiksi ja rivit jaetaan suomen- ja englanninkielisiin sanoihin.
      const sanat = rivi.split(" ");
      if (sanat.length === 2) {
        // Tarkistetaan, että sanakirja sisältää kaksi sanaa. Sanoja ollessa 3+ ne ohitetaan.
        sanakirja[sanat[0]] = sanat[1];
      }
    }
    return sanakirja; // Palautetaan sanakirja.
  } catch (err) {
    return {};
  }
}

// Tallenna sanakirja tekstitiedostoon
function tallennaSanakirja(sanakirja) {
  const data = Object.entries(sanakirja) // Muunnetaan sanakirjan sanaparit taulukoksi, jotka sisältävät suomen- ja englanninkielisen sanan.
    .map(([suomi, englanti]) => `${suomi} ${englanti}`) // Muutetaan taulukon sanaparit merkkijonoiksi, jossa ne erotaan välilyönnillä.
    .join("\n"); // Liitetään merkkijonot yhteen tavalla, että jokainen merkkijono on omalla rivillänsä.
  fs.writeFileSync("sanakirja.txt");
}

// Aloitetaan HTTP-palvelin ja kuunnellaan sen pyyntöjä.
app.listen(PORT, () => {
  console.log(`Kuunnellaan portissa ${PORT}`);
});
