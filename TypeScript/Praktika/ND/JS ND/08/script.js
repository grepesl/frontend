//ARRAY METODAI
//1)Nusikopijuokite array const cars = ["BMW", "VW", "Audi"] ir, naudojant forEach, atspausdinkite kiekvieną elementą (automobilio reikšmę). 

// const cars = ["BMW", "VW", "Audi"];

// cars.forEach((carMark) => console.log(carMark));

//2)Pakoreguokite pirmą pratimą, kad atspausdintumėte index: value (pvz: 0: BMW, 1: VW ir t.t.).

// const cars = ["BMW", "VW", "Audi"];
// const carMarkindex = cars.map((carMark, i) => `${i}: ${carMark}`);
// console.log(carMarkindex);

//3)Sukurkite masyvą pavadinimu names su savo draugų vardais, raidžių kapitalizaciją pamiksuokite (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padarykite, kad susikurtų naujas array (ir jį atspausdinkite), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" -> "Petras").

// const names = ['Greta', 'PAvel', 'kaMile', 'eLijA'];

// let corectNames = names.map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase());
// console.log(corectNames);

//4)Sukurkite array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter – išveskite tik tuos skaičius, kurie yra didesni arba lygūs 18.

// const ages = [5, 16, 19, 27, 23, 75];

// const isAdult = ages.filter((age) => age >= 18);
// console.log(isAdult);

//5)Sukurkite array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find – suraskite bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

// const cityName = ['Vilnius', 'Kaunas', 'Utena', 'Klaipėda'];

// const cityElement = cityName.find((city) => city[0] === 'K');
// console.log(cityElement);

//6)Penktame pratime esantį sprendimą pakoreguokite ir patikrinkite su some ar bent vienas miestas prasideda iš mažosios.

// const cityName = ['Vilnius', 'Kaunas', 'utena', 'Klaipėda'];

// const cityElement = cityName.some((city) => city[0] === city[0].toLowerCase());
// console.log(cityElement);

//7)Pakoreguokite šeštą pratimą, kad patikrintų ar visi miestai prasideda iš didžiosios raidės.

// const cityName = ['Vilnius', 'Kaunas', 'utena', 'Klaipėda'];

// const cityElement = cityName.every((city) => city[0] === city[0].toUpperCase());
// console.log(cityElement);

//CALLBACK
//1)Sukurkite dvi funkcijas: 
// alertName
// consoleName

// Abi funkcijos turės vieną parametrą – vardą. Jos bus callback funkcijos. Pirmoji funkcija vardą alertins, antroji – console.log'ins. 

// Susikurkite pagrindę funkciją (coreFunction). Ši funkcija – paims pirmą raidę, ją padarys didžiąja ir prijungs kitas raides (t.y. užtikrina, kad vardas prasideda iš didžiosios; pvz: "petras" => "Petras"), tada iškviečia vieną iš callback funkcijų (nesvarbu kurią, galima jas kaitalioti).

// function alertName(name){
//     alert(name);
// }
// // console.log(alertName('Greta'));

// function consoleName(name){
//     console.log(name);
// }
// // consoleName('Greta')

// function coreFunction(showNameFunction, name){
//     const nameWithUpperCase = name[0].toUpperCase()+name.slice(1).toLowerCase();
//     // console.log(nameWithUpperCase);
//     showNameFunction(nameWithUpperCase);
// }
// coreFunction(consoleName, 'petras')

//ROKO UŽDUOTYS
//4) Parašykite funkciją, kuri iš jai paduoto masyvo išrinktų nurodytas reikšmes ir grąžintų likusias (išvestų į konsolę). (paduodama masyvas=[1,4,5,6,4,8,4,5], funkcija: func(masyvas, 4,6,8), grąžina: [1,5,5]).

// const test4Mas=[1,4,5,6,4,8,4,5]
// const task4 = (masyvas, nr1, nr2, nr3) => {
//     for(let i = 0; i <masyvas.length; i++){
//         if(masyvas[i] === nr1 || masyvas[i] === nr2 || masyvas[i] === nr3){
//             masyvas.splice(i, 1);
//             i--;
//         }
//     }
//     return masyvas;
// }
// console.log(task4(test4Mas,4, 6, 8));

