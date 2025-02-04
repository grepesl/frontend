//KINAS
// Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išmeta ją h1 elemente. 

// Bilietų kainos:
// Standartinis bilietas 6 eur
// iki 16 metų – 50% nuolaida 
// 1/3 nuolaida vyresniems nei 60 metų
// Kintamieji turi būti aprašyti viršuje, kad būtų lengva keisti.

document.querySelector("#submitForm").addEventListener('submit', (event) => {
    event.preventDefault();
    const ete = event.target.elements;
    
    console.log(ete.age.valueAsNumber)
})