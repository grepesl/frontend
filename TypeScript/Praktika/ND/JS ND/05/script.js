//Function ND
//1
// Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir parodysite panaudodami alert.

// function alertName(name){
//     alert (name);
// }
// alertName('Greta');

//2
// Taip pat ne visos funkcijos turi parametrus – sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

//   function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min); //1 - 0
//   }

//   const randomNumber = getRandomNumber(5,1);

//   console.log(randomNumber);

//3
// Sukurkite funkciją, kuri paims du parametrus – vardą ir pavardę, tada grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

// function fullNameLenght(name, surname){
//     return name.length + surname.length;
// }
// console.log(fullNameLenght('Greta','Gretukas'));

//4
// Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). 

// function giveAlphabet(number){
//     const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//     console.log(alphabet[number]);
// }
// giveAlphabet(5)

//5
// Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti sum, sub, div, multi (matematinės reikšmės – sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9 ir t.t.).

// function calc(n1, n2, operator){
//     switch (operator){
//         case 'sum':
//             console.log(n1 + n2);
//             break;
//         case 'sub':
//             console.log(n1-n2);
//             break;
//         case 'div':
//             console.log(n1/n2);
//             break;
//         case 'multi':
//             console.log(n1*n2);
//     }
// }
// calc(10,2,'div')

//6

// Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita – gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber())).

// function squareNum(number) {
//     return number * number;
// }

// function generateRandomNumber() {
//     return Math.floor(Math.random() * 10 + 1);
// }
// console.log(squareNum(generateRandomNumber()));
