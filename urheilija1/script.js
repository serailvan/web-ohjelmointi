// Luodaan tehtävän mukaisesti yliluokka Henkilo, joka sisältää haludut tiedot
class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }

  // Luodaan getterit kaikille neljälle tiedolle.
  getEtunimet() {
    return this.etunimet;
  }

  geSukunimi() {
    return this.sukunimi;
  }

  getKutsumanimi() {
    return this.kutsumanimi;
  }

  getSyntymavuosi() {
    return this.syntymavuosi;
  }

  // Seuraavaksi setterit

  setEtunimet() {
    this.etunimet = this.etunimet;
  }

  setSukunimi() {
    this.sukunimi = this.sukunimi;
  }

  setKutsumanimi() {
    this.kutsumanimi = this.kutsumanimi;
  }

  setSyntymavuosi() {
    this.syntymavuosi = this.syntymavuosi;
  }
}

// Seuraavaksi luodaan aliluokka Urheilija, joka perii yliluokan tiedot sekä lisätään muutama oma tieto yliluokan tietojen lisäksi

class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    kuvalinkki,
    paino,
    laji,
    saavutukset
  ) {
    // Superin avulla päästän yliluokan ominaisuuksiin ja methodeihin käsiksi
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    // luodaan uusille tiedoille thissit :-D
    this.kuvalinkki = kuvalinkki;
    this.paino = paino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  // Seuraavaksi getterit
  getkuvalinkki() {
    return this.kuvalinkki;
  }

  getPaino() {
    return this.paino;
  }

  getLaji() {
    return this.laji;
  }

  getSaavutukset() {
    return this.saavutukset;
  }

  // Viimeisenä setterit

  setKuvalinkki() {
    this.kuvalinkki = this.kuvalinkki;
  }

  setPaino() {
    this.paino = this.paino;
  }

  setLaji() {
    this.laji = this.laji;
  }

  setSaavutukset() {
    this.saavutukset = this.saavutukset;
  }
}

// Loppuun esimerkkejö toiminnallisuudesta :-)
const urheilija_1 = new Urheilija(
  "Anna Anniina",
  "Annikainen",
  "Anna",
  "2000",
  "linkki",
  "60kg",
  "Judo",
  "EM 2022"
);

// Tulostetaane etunimet
console.log(urheilija_1.getEtunimet());

// Haetaan saavutuksia
console.log(urheilija_1.getSaavutukset());
