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

    const finalCost = document.querySelector('#cost');
    const ageInput = ete.age.valueAsNumber;
    const standartCost = 6;

    if(ageInput <= 16){
        finalCost.textContent = standartCost / 2
    } else if (ageInput >= 60){
        finalCost.textContent = standartCost - (standartCost * 1/3)
    } else {
        finalCost.textContent = standartCost
    };
})


//ŠAUKTINIAI 
//Kai kuriose šalyse reikia atlikti privalomąją karinę tarnybą, jei esate tarp 18 ir 30 metų, ir, jei neturite kriminalinio įrašo. Sukurkite programą, kuri su input + radio button pasakytų ar tam žmogui gali reikėti eiti į atlikti tarnybą ar ne (h1 elemente). 