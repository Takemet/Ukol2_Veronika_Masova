
const jmeno = prompt("Napište své křestní jméno bez diakritiky (např. Tomas, Karolina).");
const jmenoLower = jmeno.toLowerCase();
const jmenoTrim = jmenoLower.trim();
const jmenoFinal = jmenoTrim.slice(0,3);


const prijmeni = prompt("Napište své přijmení bez diakritiky (např. Dvorakova, Novotny).");
const prijmeniLower = prijmeni.toLowerCase();
const prijmeniTrim = prijmeniLower.trim();
const prijmeniFinal = prijmeniTrim.slice(0,5);

document.body.innerHTML +=`<h1>Váš studentský email pro jméno ${jmeno} ${prijmeni} je:</h1>`;

document.body.innerHTML += `<h2>${prijmeniFinal}${jmenoFinal}@fit.cvut.cz </h2>`;
