const masyvasDes = [0,1,2,3,4,5,6,7];
const objektasDes = {
    vardas: 'Petras',
    amzius: 55,
    gyvenamojiVieta: {
        salis: 'Lietuva',
        miestas: 'Vilnius'
    }
}

//1)destructuring 
const [,,viena, ...antra] = masyvasDes;
console.log(viena, antra);
console.log('-----------');

//2)destructuring. Naudodami destructing priskirkite 4 kintamiesiems 4 objekto reikšmes, iš kurių 1oji būtų pakeistu pavadinimu 2oji turėtų defaut reikšmę 3būtų išviduje nestinto objekto, 4toji būtų iš viduje nestinto objekto su pakeistu pavadinimu 
const {vardas:vienaO, amzius='default value', gyvenamojiVieta:{salis}, gyvenamojiVieta:{miestas: gyvenviete}} = objektasDes;
console.log(name, amzius, salis, gyvenviete);
console.log('-----------');

//3NAUDODAMI DESTRUCTURING PRISKIRKITE 1 KINTAMAJAM VISAS MASYVO REIK6MES I6SKYRUS PIRMAS3
const [,,, ...task3] = masyvasDes;
console.log(task3)
console.log('-----------');

//4)Naudodami destructuring sukeiskite 2 kintamųjų reikšmes 
// let vienas = 'hahah'
// let kitas = 'hihi'
// [vienas, kitas] = [kitas, vienas];
// console.log(vienas, kitas);
console.log('-----------');

//5)
const fastFood = [
    { id:0, name:"Burgeris", inStock:true, primeCost:0.4, cost:1.5 },
    { id:1, name:"Kebabas", inStock:true, primeCost:1.2, cost:6.7 },
    { id:2, name:"Tortilija", inStock:true, primeCost:1, cost:5 },
    { id:3, name:"Bulvytės", inStock:false, primeCost:0.2, cost:1.5 },
    { id:4, name:"Koldūnai", inStock:true, primeCost:0.8, cost:2.5 },
    { id:5, name:"Salotos", inStock:false, primeCost:0.3, cost:2 },
    { id:6, name:"Smoothy", inStock:true, primeCost:0.5, cost:2.5 },
    { id:7, name:"Fanta", inStock:true, primeCost:0.5, cost:1.5 },
    { id:8, name:"Sprite", inStock:false, primeCost:0.5, cost:1.5 },
    { id:9, name:"Cola", inStock:true, primeCost:0.5, cost:1.5 },
  ];

//2 Išvest kiekvieną elementą į konsolę naudojant forEach
fastFood.forEach((el) => console.log(el));
console.log('-----------');

//3 išvesti tik masyvo vardus ir kainas
fastFood.forEach((el) => console.log(`${el.name} kaina yra ${el.cost}`));
console.log('-----------');

//4
const inStock = fastFood.filter((el) => el.inStock);
console.log(inStock)
console.log('-----------');

//4.1
const task4 = inStock.map((el) => {
    return {
        id: el.id,
        name: el.name,
        profit: el.cost - el.primeCost
    }
})
console.log(task4);
console.log('-----------');

//4.2
const uzsakymas0 = [
    {name: 'Tortilija', kiekis: 2},
    {name: 'Cola', kiekis: 1},
    {name: 'Fanta', kiekis: 1}
];
const uzsakymas1 = [
    {name: 'Burgeris', kiekis: 5},
    {name: 'Kebabas', kiekis: 1},
    {name: 'Koldūnai', kiekis: 2}
];

//4.3
const pelnoSkaiciuokle = (uzsakymas) => {
    const profit = uzsakymas.reduce((acc, curr) => {
        const rastasAtitikmuo = task4.find((el) => el.name === curr.name); //surandu preke tarp duomenu
        const pelnasVieno = rastasAtitikmuo.profit * curr.kiekis; //suskaičiuoju objekto pelną
        return acc + pelnasVieno; //grąžinuvieno pelna pridėta prie bendro pelno
    }, 0)
    return profit
}
const pelnas0 = pelnoSkaiciuokle(uzsakymas0)
console.log(pelnas0); //10
const pelnas1 = pelnoSkaiciuokle(uzsakymas1)
console.log(pelnas1); //14.4
console.log('-----------');

//4.4
const cekioObjektoKurimas = (uzsakymas) => {
    const prekes = uzsakymas.map((elMap) => {
        const rastasAtitikmuo = inStock.find((elFind) => elMap.name === elFind.name);
        return {
            ...elMap,
            kaina: rastasAtitikmuo.cost * elMap.kiekis
        }
    })
const bendraKaina = prekes.reduce((acc, curr) => acc+curr.kaina, 0);
// prekes.push({bendraKaina: bendraKaina});
    return {
        prekes: prekes,
        bendraKaina: bendraKaina
    }
}
const cekis0 = cekioObjektoKurimas(uzsakymas0);
console.log(cekis0);

//5)
// const task5 =fastFood.filter((el) => el.id > 4 && el.cost > 2 && el.cost < 10); (taip geriau)
const task5 = fastFood.filter((el) => {
    if(el.id > 4 && el.cost > 2 && el.cost < 10){
        return true;
    } else {
        return false;
    }
})

//6)
// let task6 = `<ul>`;
// inStock.forEach((el) => {
//     task6 += `<li>${el.name} kaina: ${el.cost}</li>`;
// });
// task6 += `<ul>`;

//KITAS BŪDAS

// const task6 = `<ul>` + inStock.reduce((acc,curr) => acc + `<li>${curr.name} kaina:${curr.cost}</li>,''`) + `<ul>`;
// console.log(task6);
// document.querySelector('section').innerHTML += task6

//DAR KITAS BŪDAS (tvarkingiausias būdas)

// const unorderedList = document.createElement('ul');
// inStock.forEach((el) => {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${el.name} kaina:${el.cost}`;
//     unorderedList.appendChild(listItem);
// })
// document.querySelector('section').appendChild(unorderedList);

//Daugiau uždavinių
//4+) 
// const task1D = (masyvas, isCapital, longerThan, shorteThan) => {
//     return masyvas.find(el => { //el yra stringas
//         if(isCapital){
//             if(el.charAt(0).toUpperCase() === el.charAt(0) && el.length > longerThan && el.length < shorteThan){
//                 return true;
//             }
//         } else if(el.charAt(0).toLowerCase() === el.charAt(0) && el.length > longerThan && el.length < shorteThan){
//                 return true;
//         }
//     })
// }
// const ats1D = task1D(words, false, 3, 10);
// console.log(ats1D);
console.log('-----------');

//1) Sukurti funkciją, kuri sukurtų A ilgio skaičių masyvą, B ir C intervale. (A - kokio ilgio masyvo norite, B - mažiausias galimas masyvo skaičius, C - didžiausias galimas masyvo skaičius). (naudoti Math.random())
const skaiciuMasyvoGeneravimas = (ilgis, min, max) => {
    const numberArray = [];
    for(let i = 0; i < ilgis; i++) {
        const randomNumber = Math.floor(Math.random()*(max - min + 1)) + min;
        numberArray.push(randomNumber);
    }
    return numberArray;
}
const skaiciusMas0 = skaiciuMasyvoGeneravimas(10, -20, 100);
//10,50
console.log(skaiciusMas0);
console.log('-----------');

//2) Sukurti funkciją, kuri iš jai paduoto string'o sukurtų string'ų masyvą atskirdama kiekvieną žodį. (nebūtų skiriamųjų ženklų)
const tekstinioMasyvoGeneravimas = (tekstas) => {
    const manoRegex = /['",./!?@#$%^&*()\-_=\+<>;:\{\[\}\]]/g;
    let changed = tekstas.replaceAll(manoRegex, '');
    const result = changed.split(' ');
    return result;
  }
  const words = tekstinioMasyvoGeneravimas(`Sukurti funkciją,? kuri! iš jai paduoto string'o sukurtų &string'ų masyvą $atskirdama kiekvieną žodį. (nebūtų skiriamųjų# ženklų)`);
  console.log(words);
  console.log('-----------');

//FILTER

// 3)Naudojant 1'ios užduoties masyvą išfiltruoti lyginius skaičius.
let numbers = skaiciuMasyvoGeneravimas(10, 0, 100);
const filteredNumbers = numbers.filter((number) => number % 2 === 0);
console.log(filteredNumbers);
console.log('-----------');

// 4) Naudojant 1'ios užduoties masyvą išfiltruoti nelyginius skaičius.
const filteredNumbers2 = numbers.filter((number) => number % 2 !== 0);
console.log(filteredNumbers2);
console.log('-----------');

// 5) Naudojant 1'ios užduoties masyvą išfiltruoti sveikuosius skaičius.

// 6) Sukurti funkciją, kuri 1'ios užduoties masyvą išfiltruotų A ir B intervale (nuo skaičiaus A iki skaičiaus B imtinai).
//let sunetasskaiciumasyva ([10, 4, 50, 80]) = skaiciuMasyvoGeneravimas(4, 4, 80);
//sunetasskaiciumasyva.filter(10, 50);
//[10, 50] = filtortiNuoAIKiB(10, 50)

//max = 50 min =9
let fillteredByMaxAndMin = (max, min) => {
    let numbers = skaiciuMasyvoGeneravimas(10, 0, 100);
    console.log(numbers);
    //[10, 4, 50, 80]
    //list.foreach((item) =>)
    return numbers.filter((number) => max > number && min < number);
}
console.log(fillteredByMaxAndMin(50, 10));
console.log('-----------');

// 7) Naudojant 2'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda didžiąja raide.
//labas
//l -> L === l
const filteredUpperCase = words.filter((word) => word[0].toUpperCase() === word[0]);
console.log(filteredUpperCase);
console.log('-----------');

// 8) Naudojant 2'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda mažąja raide.
const filteredLowerCase = words.filter((word) => word[0].toLowerCase() === word[0]);
console.log(filteredLowerCase);
console.log('-----------');

// 9) Sukurti funkciją, kuri iš 2'tos užduoties masyvo išfiltruotų nurodyta raide prasidedančius žodžius.
const filteredByLetter = words.filter((word) => word[0] === 's' || word[0] === 'S');
console.log(filteredByLetter);
console.log('-----------');

// 10) Sukurti funkciją, kuri iš 2'tos užduoties masyvo išfiltruotų nurodyta raide pasibaigiančius žodžius.
const filterLastLetter = words.filter((word) => word[word.length - 1] === 'ų');
console.log(filterLastLetter);
console.log('-----------');

//REDUCE

//   11) Naudojant reduce metodą suskaičiuoti 3'tos užduoties masyvo bendrą sumą.
// let numbers = skaiciuMasyvoGeneravimas(10, 0, 100);

const reducedSum = numbers.reduce((acc, curr) => acc + curr);
console.log(reducedSum);
console.log('-----------');

//   12) Naudojant reduce metodą suskaičiuoti 4'tos užduoties masyvo bendrą sandaugą.

const reducedMultiple = filteredNumbers.reduce((acc, curr) => acc * curr);
console.log(reducedMultiple);
console.log('-----------');

//Daugiau uždavinių 
// 1.1) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A.
//[10, 50, 60, 55] -> A = 50
//[60, 55]

function didSk(numbers, max) {
    let biggerNumbers = [10];

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max){
            biggerNumbers.push(numbers[i]);
        }
    }
    return biggerNumbers;
}

console.log(didSk([60,5,64,78,95,4], 50))
console.log('-----------');


//   1.2) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B.

function didSk2(numbers, max, min) {
    let biggerNumbers = [];

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max && numbers[i] < min){
            biggerNumbers.push(numbers[i]);
        }
    }
    return biggerNumbers;
}

console.log(didSk2([60,5,64,78,95,4], 50, 70))

console.log('-----------');
//   1.3) Parašykite funkciją (nenaudojant nei lambda, nei metodų), kuri iš jai paduoto skaičių masyvo grąžintų tik tuos skaičius, kurie yra didesni nei A, bet mažesni nei B ir yra lyginiai arba nelyginiai (true/false).

function didSk3(numbers, max, min) {
    let biggerNumbers = [];

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max && numbers[i] < min && numbers[i] % 2 === 0){
            biggerNumbers.push(numbers[i]);
        }
    }
    return biggerNumbers;
}

//teisingai

console.log(didSk3([60,5,64,78,95,4], 50, 70));
    let ats = [];
function task13(masyvas, moreThan, lessThan, arLyginis){
    for(let i = 0; i < masyvas.length; i++){
        if(arLyginis){
            if (masyvas[i] % 2 === 0 && masyvas[i] > moreThan && masyvas[i] < lessThan){
                ats[ats.length] = masyvas[i]
            }
        } else {
            if(masyvas[i] % 1 === 0 && masyvas[i] > moreThan && masyvas[i] < lessThan){
                ats[ats.length] = masyvas[i]
            }
        }
    }
}
console.log(task13(skaiciusMas0, 0, 10, false))



//   1.4) Naudodami ką norite (lambda, metodus, kitų funkcijų kvietimus jūsų funkcijose ir pns.) perrašykite 1.1, 1.2 ir 1.3 užduotis.