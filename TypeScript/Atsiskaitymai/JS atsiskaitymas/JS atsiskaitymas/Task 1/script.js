/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (oz) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document
    .querySelector('#weightConverterForm')
    .addEventListener('submit', (event) => {
        event.preventDefault();

        const ete = event.target.elements;
        const kg = ete.search.value;

        const lbDiv = document.querySelector('#lb')
        lbDiv.textContent = "Svoris svarais: " + (kg * 2.2046).toFixed(2);
        
        const gDiv = document.querySelector('#g')
        gDiv.textContent = "Svoris gramais: " +(kg / 0.0010000).toFixed(2);

        const ozDiv = document.querySelector('#oz')
        ozDiv.textContent = "Svoris unicijomis: " + (kg * 35.274).toFixed(2);
});