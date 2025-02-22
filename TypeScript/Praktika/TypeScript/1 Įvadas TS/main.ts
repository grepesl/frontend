// console.log('Hello World :)');

// jeigu kuriant kintamąjį jam iškart suteikiame reikšmę - tipas yra priskiriamas automatiškai ir atitinką reikšmės tipą
let vardas = 'Rokas';
let amzius = 28;
let alkanas = false;

// vardas = 5; // klaida, nes negalime keisti string į number
vardas = 'Jonas';

// kad ir nurodyti tipo šiuo atveju nėra būtina, bet tai visvien ganėtinai daržnai daroma dėl kodo vientisumo ir skaitomumo 
let vardas1: string = "Jonas";

let kazkas0; // negerai sukurti tučią kintamąjį ir nesuteikti jam tipo, nes gaunasi, kad yra priskiriamas "any" tipas, kurio reikia vengti
kazkas0 = 'hello';
kazkas0 = 5;
kazkas0 = true;

// jeigu jau kuri kintamąjį be pradinės reikšmės - reikia nusirodyti tipą
let kazkas1: string;
kazkas1 = 'hello';
// kazkas1 = 5; // klaida, nes neteisingas tipas
// kazkas1 = true; // klaida, nes neteisingas tipas

let amzius0: number | string;
amzius0 = 5;
amzius0 = 'penki';
// amzius0 = true;
if(typeof amzius0 === 'number'){
  // if(amzius0 >= 18){
  //   console.log('Yra pilnametis');
  // } else {
  //   console.log('Nėra pilnametis');
  // }
  amzius0 >= 18 ? 
    console.log('Yra pilnametis') :
    console.log('Nėra pilnametis');
}

const consoleReturnRandomNumber = (limit: number): void => {
    console.log(Math.ceil(Math.random()*limit));
}
console.log(consoleReturnRandomNumber(10));

const skaiciuotuvas = (sk1: number, sk2: number, veiksmas: 'sudetis' | 'atimtis' | 'daugyba' | 'dalyba'): number | string => {
    switch(veiksmas){
        case "sudetis":
            return sk1 + sk2;
        case "atimtis":
            return sk1 - sk2;
        case "daugyba":
            return sk1 * sk2;
        case "dalyba":
            if(sk2 === 0){
                return 'Negalima dalyba i6 nulio'
            }
            return sk1 / sk2
    }
}

console.log(skaiciuotuvas(5,4, 'sudetis'));
console.log(skaiciuotuvas(5,4, 'atimtis'));
console.log(skaiciuotuvas(5,4, "dalyba"));

// consoleReturnRandomNumber(skaiciuotuvas(5,4,'sudetis'))
let result = skaiciuotuvas(5,4,'sudetis');
if(typeof result === 'number'){
    consoleReturnRandomNumber(result);
}