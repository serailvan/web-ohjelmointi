// Annetaan toiminnallisuuksia html puolen id:lle.
document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("inputText");
  const checkButton = document.getElementById("checkButton");
  const result = document.getElementById("result");

  // Klikatessa "Tarkista" -nappia tämä toiminto käynnistyy
  checkButton.addEventListener("click", function () {
    // Input textin avulla saadaan syötetetty teksti tarkistukseen, muutetaan kaikki pieniksi kirjaimiksi ja poistetaan kaikki mitkä ei ole numeroita tai kirjaimia.
    const text = inputText.value.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Jos syötetty teksti...
    if (isPalindrome(text)) {
      // ... on palindromi sanotaan sen olevan oikein
      result.textContent = `'${inputText.value}' on palindromi!`;
    } else {
      // ... ei ole palindromi niin sanotaan ettei oo :D
      result.textContent = `'${inputText.value}' ei ole palindromi.`;
    }
  });

  // For loopin avulla tarkistamme kirjain kirjaimelta onko syötetty sana palindromi vai ei
  function isPalindrome(string) {
    const len = string.length;

    // iteroidaan niin kauan kunnes i on vähemmän kuin puolet syötetystä sanasta eli toisen sanoen iteroidaan puoleen väliin
    for (let i = 0; i < len / 2; i++) {
      //  Tässä string[i] on syötetty sana oikein päin, ja string[len] on aloitettu toisesta päästä, mutta ovat ns. "samassa kohdassa"
      //  Jos molemmissa päissä olevat kirjaimet eivät ole sama niin syötetty sana ei ole palindromi
      if (string[i] !== string[len - 1 - i]) {
        // palautetaan false
        return false;
      }
    }
    // jos menee läpi niin palautetaan true
    return true;
  }
});
