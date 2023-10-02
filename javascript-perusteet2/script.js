const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Käytetään pohjustusta avuksi
let puhelinluettelo = [
  { nimi: "Aku Ankka", nro: 554 },
  { nimi: "Hessu Hopo", nro: 454 },
];
let uusihenkilo = { nimi: "Iines Ankka", nro: 553 };
puhelinluettelo.push(uusihenkilo);

// => Tästä alkaa oma koodi
// Tämän funktion avulla navigoimme kahden annetun tehtävän kanssa. 1 -> Henkilön lisääminen, 2 -> Hae nimi, -> 3 takaisin/poistu
function naytaValikko() {
  rl.question(
    "Valitse toiminto:\n1. Lisää henkilö\n2. Hae nimeä\n0. Poistu/Takaisin\nValinta: ",
    (valinta) => {
      if (valinta === "1") {
        lisaa();
      } else if (valinta === "2") {
        hakemisto();
      } else if (valinta === "0") {
        rl.close();
      }
    }
  );
}

naytaValikko();

// Funktio, jonka avulla lisätään uusi henkilö puhelinluetteloon.
function lisaa() {
  // Kysytään tehtävän mukaisesti henkilön nimeä...
  rl.question("Mikä on henkilön nimi? ", (nimi) => {
    // ... ja puhelinnumeroa
    rl.question("Mikä on henkilön puhelinnumero? ", (nro) => {
      // Sen jälkeen muodostetaan uusi henkilö näillä tiedoilla...
      const henkilo = { nimi: nimi, nro: nro };
      // ... ja lisätään se taulukkoon
      puhelinluettelo.push(uusihenkilo);
      console.log("Henkilö lisätty puhelinluetteloon.");
      // Lisäyksen jälkeen näytetään valintanäppäimistö
      naytaValikko();
    });
  });
}

// Funktio, jonka avulla haetaan henkilön nimeä ja palautetaan puhelinnumero, jos nimet vastaavat toisiaan
function hakemisto() {
  rl.question("Syötä haettavan henkilön nimi: ", (loydaNimi) => {
    // Käytetään findia avuksi, jonka avulla löydetään sopiva nimi. Tämän olisi voinut myös tehdä for loopin avulla!
    const loydaHenkilo = puhelinluettelo.find(
      // Halutaan löytyvän henkilö, joka vastaa komentokenttään laitettua nimeä.
      (henkilo) => henkilo.nimi === loydaNimi
    );
    // Jos nimi löytyy hakemistosta niin palautetaan puhelinnumero!
    if (loydaHenkilo) {
      console.log(`Henkilön puhelinnumero on: ${loydaHenkilo.nro}`);
      // Jos ei löydy niin sanotaan vaan ettei löytynyt.
    } else {
      console.log("Annettua nimeä ei löytynyt puhelinluettelosta.");
    }
    naytaValikko();
  });
}
