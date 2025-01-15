//CAO 
//ANONIMINĖS IR ARROW

//1)Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir parodysite panaudodami alert.

// const alertName = name => {
//     alert (name);
// }
// alertName('Greta');

//2)Taip pat ne visos funkcijos turi parametrus – sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

// const getRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min * 1) + min);
// }
// console.log(getRandomNumber(5,1));

//3)Sukurkite funkciją, kuri paims du parametrus – vardą ir pavardę, tada grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

// const fullNameLenght = (name, surname) => {
//     return name.length + surname.length;
// }
// console.log(fullNameLenght('Greta','Gretukas'));

//4)Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). 

// const giveAlphabet = (number) => {
//     const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//     console.log(alphabet[number]);
// }
// giveAlphabet(6)

//5)Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti sum, sub, div, multi (matematinės reikšmės – sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9 ir t.t.).

// const calc = (n1, n2, operator) => {
//     switch (operator){
//         case 'sum':
//             return n1 + n2;
//         case 'sub':
//             return n1 - n2;
//         case 'div':
//             return n1 / n2;
//         case 'multi':
//             return n1 * n2;
//     }
// }
// console.log(calc(10,2,'div'));

//6)Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita – gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

// const squareNum = number => {
//     return number * number;
// }

// const generateRandomNumber = () => {
//     return Math.floor(Math.random() * 10 + 1);
// }
// console.log(squareNum(generateRandomNumber()));

//1)Parašykite funkciją convertMStoKMH, kuri konvertuoja greitį iš metrų per sekundę į kilometrus per valandą.

// const convertMStoKMH = metersPerSecond => {
//     return metersPerSecond * 3.6;
// }
// console.log(convertMStoKMH(10));

//2)Parašykite funkciją compareNumber, kuri palygina du skaičius ir grąžina didesnįjį iš jų. Jei skaičiai yra lygūs, funkcija turėtų grąžinti "lygūs". Įsitikinkite, kad abu argumentai yra skaičiai; jei ne, grąžinkite klaidos pranešimą.

// const compareNumber = (min, max) => {
//     if(typeof(min) !== 'number' || typeof(max) !== 'number'){
//         return ('Error: most arguments must be numbers');
//     } else if (max === min){
//         return ('equal');
//     } else {
//         return Math.max(max, min);
//     }
// }
// console.log(compareNumber(4, 7));
// console.log(compareNumber(5, 5));
// console.log(compareNumber("5", 5));

//3)Parašykite funkciją isLeapYear, kuri priima year ir pasako ar metai yra keliamieji. Funkcija turi grąžinti true, jei metai keliamieji, ir false priešingu atveju.

// const isLeapYear = year => {
//     if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isLeapYear(2020)); // true
// console.log(isLeapYear(2021)); // false

//4)Parašykite funkciją findMaxInArray, kuri ras ir grąžins didžiausią elementą masyve. Galime daryti prielaidą, kad visi array elementai yra skaičiai.

// console.log(findMaxInArray([-1, -3, -2, -5, -4])); // -1

// const array = [1, 3, 2, 5, 4];
// const findMaxInArray = array => {
//     let largest = array[0];

//     for(let i = 1; i < array.length; i++) {
//         if (array[i] > largest) {
//             largest = array[i];
//         }
//     }
//     return largest
// }
// console.log(findMaxInArray(array));

//5)Parašykite funkciją sumArray, kuri suskaičiuoja ir grąžina visų elementų sumą masyve. Kaip ir užduotyje prieš tai, galime daryti prielaidą, kad visi array elementai yra skaičiai.

// const array = [1, 2, 3, 4, 5];

// const sumArray = array => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     return sum
// }
// console.log(sumArray(array));

//6)Sukurkite funkciją arMasyvaiLygūs, kuri palygina du masyvus ir grąžina true, jei jie yra identiški, kitu atveju - false.

// const areArraysEqual = (array1, array2) => {
//     if (array1.length !== array2.length){
//         return false;
//     } 
    
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]){
//             return false;
//         }
//     }

//     return true;
// }
// console.log(areArraysEqual([1, 2, 3], [1, 4, 3]));

//7)Sukurkite funkciją reverseString, kuri apverčia eilutę be jokių išorinių funkcijų ar metodų.

// const reverseString = str => {
//     let returned = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//         returned += str[i];
//     }
//     return returned;
// }

// console.log(reverseString('labas'));