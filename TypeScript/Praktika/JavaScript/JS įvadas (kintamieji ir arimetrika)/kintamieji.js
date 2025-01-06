console.log("test");

//KOMENTARAS
console.log("Noriu valgyt :(");

// console.log(document.querySelector("#staiSitas").innerHTML);

// Kinatmųjų kūrimas
console.group('kintamieji');
let manoAmzius = 23;
let manoVardas = 'Greta';
let pilnasVardas = 'Greta Gretaite';
let turiVaiku = false;

let skaicius = 5;
let kitasSkaicius = 65.4;
let skaicius2 = -6;
let sk0 = 54*3; //162
let sk1 = sk0+3; // 165
let randomSkaicius = Math.random; // 0.000000001 => 0.99999999
console.log(skaicius);
console.log(skaicius+6);
console.log("sk0:" + sk0);
console.log(`sk1: ${sk1}`);
console.log('random skaicius:', randomSkaicius);

let zodis = 'Labas';
let zodis0 = "ate";
let zodis1 = `adios amigos`; 
let raide = 'a';
let neSkaicius = '45';
let neBoolean = 'true';
// let kabuciuKlaida = "cituoju kąnors: "citata"";
let kabuciuFix0 = "Cituoju kąnors: 'citata'";
let kabuciFix1 = 'Cituoju kąnors: "citata"';
let kabuciuFix3 = `Cituoju k1nors: 'Citata' "c"i"`;
console.log(zodis);
console.log(neSkaicius);
console.log(neBoolean);
console.log(neSkaicius+6); //456
console.log(zodis+6); //labas6
console.groupEnd();


// kintamasis + '' + kitasKin + 'mano reikšmė'
// ${kintamasis + kitasKin + 'manoReiksme'}

/*Aritmetika*/
let number0 = 5;
let number1 = 23; 
let notNumber = '54';
let text = 'Hello world!';
let notFalse = true;

console.group('skaiciai')
console.log ('5 + 23 =', number0+number1)
console.log('5 - 23 =', number0-number1)

console.groupEnd();
console.group('tekstas');
console.log(`'Hello World! + " alio"`, text + " alio"); //Hello world! alio
console.log ('5 - Hello word!' , number0-text)
console.groupEnd();

