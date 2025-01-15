//STRING
//1)Parašykite funkciją convertToUpperCase, kuri pakeičia visus teksto simbolius į didžiąsias raides (pvz. labas pakeitų į LABAS).

const convertToUpperCase = () => {
    return 'labas'.toUpperCase();
     
}
console.log(convertToUpperCase())

//2)Sukurkite funkciją extractSubstring, kuri grąžina iškarpos, pradedant nuo 3 iki 7 simbolio, tekstą.

// Rezultatas
// console.log(extractSubstring("Sveikas pasauli")); // "eikas"

const extractSubstring = (text) => text.substring(2,7);
console.log(extractSubstring('Sveikas pasauli'));

//3)Sukurkite funkciją capitalizeFirstLetter, kuri pavertimas pirmąją kiekvieno žodžio raidę tekste į didžiąją.

// const capitalizeFirstLetter = (sentence) => {
//     const words = sentence.split(' ');
    
//     let result = '';

//     for (let i = 0; i < words.length; i++) {
//         result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + ' ';
//     }
    
//     return result;
// }

// console.log(capitalizeFirstLetter('labas rytas, pasauli!'));

//4)Parašykite funkciją censorCurseWords, kuri tekste pakeičia nurodytus nepadorius žodžius į "****". Sprendimas turi nenaudoti reguliariųjų išraiškų (angl. Regular expression).

// Rezultatas ir funkcijos kvietimas turėtų atrodyti taip:
// console.log(censorCurseWords("This is a badword and another badword.", ["badword"])); // "This is a **** and another ****."

const censorCurseWords = (sentence, badWords) => {
    // const words = sentence.split(' ');
    // console.log(words)
    // let result = '';

    for (let i = 0; i < badWords.length; i++) {
        // if(badWords.includes(words[i].replace('.', ''))) {
        //     result += words[i].replace(words[i], '****');
        // } else {
        //     result += words[i];
        // }
        // if (i < words.length - 1) {
        //     result += ' ';
        // }
        if (sentence.includes(badWords[i])) {
            sentence = sentence.replaceAll(badWords[i], '****');
        }
    }   
    return sentence
}
console.log(censorCurseWords("This is a badword and another badword.", ["badword"]));

//NUMBER
//1)Sukurkite kintamąjį milkPrice. Su JS patikrinkite ir išveskite vartotojui alert() ar jam reikės pasiimti smulkių centų, ar nereikės (t.y. ar skaičius sveikas ar ne). 

// const milkPrice = 3.15;

// if (Number.isInteger(milkPrice)) {
//   alert("Centų nereikia")
// } else{
//   alert("Centų prireiks...")
// }

//2)Papildykite pirmą pratimą, kad alert() taip pat išvestų kainą su dviem skaičias po kablelio (t.y. 3.49, 3.00).

// const milkPrice = 3.15;

// if (Number.isInteger(milkPrice)) {
//   alert(`Centų nereikia ${milkPrice.toFixed(2)}`)
// } else{
//   alert(`Centų prireiks...${milkPrice.toFixed(2)}`)
// }

//3)Sukurkite funkciją findMax, kuri grąžina didžiausią skaičių iš pateiktų argumentų naudojant Math.max().

//function parametras bus skaiciu masyvas, turi grazinti tiesiog matmaxreturn

const findMax = (arrayNumbers) => {
    return Math.max(...arrayNumbers)
} 
console.log(findMax([1, 2, 3, 4, 9]));

//BOOLEAN
//1)
// 1 Pasirašykite kintamąjį isLegalAge, kurį priskirkite true arba false. 
// 2 Console.log'e atvaizduokite šį kintamąjį. 
// 3 Sukurkite antrą console.log, kuriame atvaizduokite šį kintamąjį su toString() metodu. Turėtų skirtis spalva teksto. 

const isLegalAge = true; 

console.log(isLegalAge);
console.log(isLegalAge.toString());
