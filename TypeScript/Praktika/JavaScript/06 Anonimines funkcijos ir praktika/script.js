//Functions
// console.groupCollapsed('anonimines');
//įprasta vardinė
//galima kviesti funkciją prieš jos sukūrimą, nes įprastos funkcijos yra host'inamos į kodo pradžią
// function atimtis(sk1, sk2){
//     return sk1 - sk2;
// }

//įprasta bevardė 
// (function(sk1, sk2){
//     return sk1- sk2;
// })

//įprasta bevardė prilyginta kintamajam
//negalima kviesti funkcijos prieš jos sukūrimą
// const atimtis1 = function(sk1, sk2){
//     return sk1 - sk2;
// }
// atimtis(4,5); //galima kreiptis į funkciją tik už jos sukūrimo

//arrow/lambda
// (sk1, sk2) => {
//     return sk1 + sk2;
// }

//arrow/lambda prilyginta kintamajam
// const atimtis2 = (sk1, sk2) => {
//     return sk1 + sk2;
// }

//įprasta anoniminė (IIFE - imediately invoked function expression)
// (function(sk1, sk2){
//     return sk1 - sk2
// })()

//arrow/lambda trumpiniai
//base 
// const randomNumberTo0 = (to) => {
//     const ats = Math.floor(Math.random*to);
//     return ats;
//     }

//esant vienam parametrui, nebūtini skliausteliai
// const randomNumberTo = to => {
//     const ats = Math.floor(Math.random*to);
//     return ats;
// }

// randomNumberTo(10)

//funkcijos viduje esant vienam veiksmui, kurio atsakymas turi būti grąžinamas, nebūtina rašyti veiksmo bloko ribų ir return žodelio
// const randomNumberTo2 = to => Math.floor(Math.random()*to);
// console.groupEnd

//NE FUNKCIJA
//Ciklas cikle
// console.groupCollapsed('ciklas cikle');
// for(let i = 1; i <= 5; i++){
//     console.log(`${i} pirmojo ciklo iteracija`);
//     for(let j = 1; j <= 3; j++){
//         console.log(`${j} antrojo ciklo iteracija`);
//     }
// }
// console.groupEnd();

//UŽDUOTYS (praktika)
const masyvas = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit.', 'Assumenda', 'blanditiis', 'cumque', 'voluptatum', 'vitae', 'sunt!', 'Aspernatur', 'perferendis', 'consequuntur', 'tempore', 'quo', 'magni.'];

//1)sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo pirmo iki paskutinio
console.groupCollapsed('1');

const task1 = arrayPar => {
    for(let i = 0; i < arrayPar.length; i++){
        console.log(arrayPar[i])
    }
}
task1(masyvas);
console.groupEnd();

//2) Sukurti funkciją kuri į konsole išvestų visus jai duotojo masyvo elementus po vieną nuo paskutinio iki pirmojo.

console.groupCollapsed('2');

const task2 = arrayPar => {
    for(let i = arrayPar.length - 1; i >= 0; i--){
        console.log(arrayPar[i])
    }
}
task1(masyvas);
console.groupEnd();

//3)Sukurti funkciją kuri į konsolę išvestų visus skaičius nuo pirmo duotojo parametro iki antrojo. (paduodu 5,9 => grąžina 5,6,7,8,9).

console.groupCollapsed('3');

const task3 = (from, to) => {
    for(let i = from; i<=to; i++){
        console.log(i);
    }
}

task3(1,9)
console.groupEnd();

console.group('4');

//4)Sukurti funkciją, kuri į konsole išvestų skaičius nuo pirmojo parametro iki antrojo parametro kas trečiąjį parametrą. Pvz.: (paduodu 5,9,2 => 5,7,9)

const task4 = (from, to, every) => {
    for(let i = from; i <= to ; i+=every){
        console.log(i)
    }
}
task4(5,9,2)

console.groupEnd();