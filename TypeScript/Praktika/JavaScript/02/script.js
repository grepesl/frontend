//Priskyrimai
console.groupCollapsed("priskyrimai");
let sk = 5

//console.log(sk); //5
//console.log(sk++); //5 
//console.log(sk); //6
//console.log(sk--);//6
//console.log(sk);//5

//console.log(sk); //5
//console.log(++sk); //6 
//console.log(sk); //6
//console.log(--sk);//5
//console.log(sk);//5

let age = 23
console.log(age); //23
age = 25
console.log(age); //25

age = age + sk 
age +-sk
console.log(age) //30

let zodis0 = 'labas';
let zodis1 = 'rytas';
zodis0+=zodis1;
console.log(zodis0) //labasrytas

console.log(5%3); //2
let sk0 = 5;
let sk1 = 5;
sk0 %= 3;
sk1 /= 3;
console.log(sk0); //2
console.log(sk1); // 1.66666667
console.groupEnd

console.groupCollapsed("palyginimai");
let x = 5;
let y = 10;
let z = 5;
let i ='10'
let tiesa = true
let melas = false

console.log('5 > 10' , x > y); // false
console.log(x < y); //true
console.log(x < z); //false
console.log(x > z); //false
console.log(x <= z); //true
console.log(x >= z); //true

console.log(tiesa); //true
console.log(!tiesa); //false
console.log(!melas); //true
console.log(melas || tiesa); //true
console.log(melas && tiesa); //false
console.log(melas && melas); //false

// if (5 > 6) {
//     console.log("soemthgin1");
// }
// else {
//     console.log("soemthing21");
// }

console.log(typeof x); //"number"
console.log(typeof(x)); //"number"
console.log(typeof(i)); //"string"
console.log(typeof(tiesa)); //"boolean"
console.groupEnd


console.group('Kintamieji'); 

let masyvas = ['zodis',654,true,false,321.21,'strings'];
console.log(masyvas);
console.log(masyvas[0]); //zodis
console.log(masyvas.length);//6
console.log(masyvas[x]); // 'stringas'
console.log(masyvas[5]); //masyvas
console.log(masyvas[masyvas.length-1]); // 

let asmuoMasyve = ['Rokas','Banaitis', 28, false, 180, 'mėlyna'] //negerai

let autoMarkes = ['audi', 'bwm','honda','mercedes','fiat']; //gerai

//Objektas
let objektas = {
    raktas:'reiksme',
    kitasRaktas: 654,
    susigalvotasPavadainimas: true
};
console.log(objektas);
console.log(objektas.raktas); //reikšmė
let blogasObjektas = {
    pirmas: "audi",
    antras: "bmw",
    trecias: "honda",
    masina0: "mercedes",
    masina1: "fiat",
    masina2: "hhyunday"
};

let gerasObjektas = {
    vardas: "rokas",
    pavarde: "banaitis",
    amzius: 28,
    alkanas: true
};
console.groupEnd
console.group('sąlygos');

let sk00 = 5;
let sk11 = 10;
let sk22 = -8;

if(sk1 > 7){
    console.log(sk1 + ' yra daugiau už 7');
}

if(sk22 > 7){
    console.log(sk22 + ' yra daugiau už 7');
} else {
    console.log(sk22 + ' yra mažiau už 7');
}

let promptas = window.prompt('įvesk skaičiu');
if(promptas > 7){
    console.log(promptas + ' yra daugiau už 7');
} else if(promptas < 0){
    console.log(promptas + ' yra mažiau už 7');
} else {
    console.log(promptas + ' yra  tarp 0 ir 7');
}

//Truthy Falsy
if(-5) {
    console.log('truthy');
} else {
    console.log('falsy');
}

console.groupEnd



