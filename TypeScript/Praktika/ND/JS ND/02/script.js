//KINTAMIEJI
//     1.1) 5 string.
//     1.2) 5 int.
//     1.3) 3 bool.

// 1.1
// let name = "Gabrielė";         
// let city = "Klaipėda";      
// let favoriteMovie = "Tarp žvaigždžių"; 
// let work = "Programuotoja"   
// let hobby = "Bėgiojimas"  //hobbie xd

// //1.2 
// childrenCount = 2;                 
// readBooksInYear = 35;       
// TimesTraveledToOtherCountry = 5;            
// workHoursInWeak = 35;
// monthlySalary = 4000;           

// //1.3 
// let arTuriGyvuna = true;              
// let arLankoSportoSale = false;         
// let arDomisiMada = true;  

// 2.1
// let names = ['Jonas','Tadas','Petras','Marytė','Augustė','Saulė'];
// // //2.2
// let object = {
//     vardas: 'Greta',
//     pavarde: 'Gretauskas',
//     amzius: 23,
//     dirba: true,
//     turiGyvunu: true,
//     kiekgyvunu: 3,
// };
// //2.3
// let array = [
//     ["Jonas", "Aistė", "Tomas", "Eglė"], 
//     [25, 30, 35, 40],                    
//     [true, false, true, false],          
//     ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai"] 
//   ];
// //2.4
//  let objectInArray = [
//     {
//         job: 'Marketingo Specialistas',
//         monthlySalary: 2000,
//         workHours: 40,
//         hasInsurance: true
//     }, 
//     {
//         job: 'Programuotojas',
//         monthlySalary: 2500,
//         workHours: 35,
//         hasInsurance: true
//     }, 
//     {
//         job: 'Valytoja',
//         monthlySalary: 895,
//         workHours: 40,
//         hasInsurance: false
//     }, 
//     {
//         job: 'Kasininkas',
//         monthlySalary: 999,
//         workHours: 40,
//         hasInsurance: true
//     }
//   ];
//   //2.5
// let car = {
//     carMark: 'Audi',
//     carAge: 23,
//     carOwnedAge: 2,
//     carMarksOwnedBefore: ['BMW', 'Mercedez','Mini','Toyota']
// };
// //2.6
// let personalInfo = {
//     name: 'Greta',
//     animal: 'šuo',
//     breed: 'pudelis',
//     animalInfo: {
//         age: 3,
//         color: 'rudas',
//         siccnessHistory: false,
//         eyesColor: 'blue'
//     }
// };

// 3) Į konsolę išvesti:
//     3.1) Bent po 2 reikšmes iš 2.1 ir 2.2 konteinerių.
//     3.2) Bent po 3 reikšmes iš 2.3-2.6 konteinerių su bent 1 reikšme esančia konteinerio konteineryje.

//3.1
// console.log(name[0]);//Jonas
// console.log(name[2]);//Petras

// console.log(object.dirba); //true
// console.log(object.amzius); //23

//3.2
// console.log(array[0][0]); //Jonas
// console.log(array[1][2]); //35
// console.log(array[2][0]); //true

// console.log(objectInArray[0].job);//Marketingo specialistas
// console.log(objectInArray[1].monthlySalary);//2500
// console.log(objectInArray[3].monthlySalary);//999

// console.log(car.carMarksOwnedBefore[2]);//Mini
// console.log(car.carMark)//Audi
// console.log(car.carAge);//23

// console.log(personalInfo.name);//Greta
// console.log(personalInfo.animal);//šuo
// console.log(personalInfo.animalInfo.age);//3

// 4) Palyginti ir į konsolę išvesti kokias nors:
//     4.1) 2.1 konteinerio reikšmes.
//     4.2) 2.2 konteinerio reikšmes.
//     4.3) 2.3-2.6 konteinerių reikšmes su jų viduje esančių konteinerių reikšmėmis.
//     4.4) 2.3-2.6 konteinerių reikšmes su kitų konteinerių reikšmėmis (3kartus skirtingas reikšmes).

//4.1
// console.log(name[0] === name[1]);//false, nes Jonas nelygus Tadas

//4.2
// console.log(object.amzius === object.kiekgyvunu); // false, nes 23 nėra lygus 3
// console.log(object.turiGyvunu === (object.kiekgyvunu > 0)); // true, nes turi gyvūnų ir kiek gyvūnų yra daugiau nei 0

//4.3  TODO
// console.log(array[0][0] === array[1][0]); // false (Jonas != 25)

//SĄLYGOS

//1
// let license = true;
// if (license) {
//     console.log("Galite vairuoti.");
// } else {
//     console.log("Negalite vairuoti.");
// };
// console.log();

//1.1
// let hasLicense = true;
// if (hasLicense) {
//     console.log('Galite vairuoti.');

//     let hasCar = false;

//     if (hasCar){
//         console.log('Turi mašina');
//     } else {
//         console.log('Neturi mašinos');
//     }
// } else {
//     console.log('Negalite vairuoti.');
// };
// console.log();

//1.2
// let hasLicense = true;
// if (hasLicense) {

//     let hasCar = false;
//     let isSober = true;

//     if (hasCar && isSober){
//         console.log('Turi mašina ir blaivas');
//     } else {
//         console.log('Neturi mašinos nėra blaivas');
//     }
// } else {
//     console.log('Negalite vairuoti.');
// };
// console.log();

//2

// alert('Labas');
// let miestas = window.prompt('Iveskite kokiame mieste gyvenate');
// if(miestas === 'Vilnius'){
//    console.log('Lietuvos sostine, grazu');
// } else if(miestas === 'Kaunas'){
//     console.log('Lietuvos buvusi sostine, grazu maziau');
// } else if(miestas === 'Klaipeda'){
//     console.log('Miestas prie juros, labai banguota')
// };

//3

// let personInfo = {
//     name: 'Jonas',
//     age: 18,
//     gender: null,
//     hasJob: false,
// } 
// personInfo.gender = window.prompt('Iveskitesavo lyti');
// if(personInfo.gender === "Vyras"){
//     console.log("Jus esate vyras");
// } else if (personInfo.gender === 'Moteris'){
//     console.log('Jus esate moteris');
// } else {
//     console.log('Kita')
// };

//4
// 4) Parašyti if'ą, kuris tikrintų koks dabar mėnuo ir grąžintų koks yra metų laikas
// Naudoti:
//   1) let - kurti kintamuosius.
//   optional) prompt - gauti mėnesį.
//   2) alert/console.log - grąžinti galimus atsakymus.
//   3) if/elseIf/else - kas be ko...
// 4 extra) Pabandyti padaryti naudojant switch'ą.

// let menesis = 'Liepa';

// if(menesis === 'Sausis'|| menesis === 'Gruodis' || menesis === 'Vasaris'){
//     console.log('Ziema');
// } else if(menesis === 'Kovas'|| menesis === 'Balandis' || menesis === 'Geguze'){
//     console.log('Pavasaris');
// } else if(menesis === 'Birzelis'|| menesis === 'Liepa' || menesis === 'Rugpjutis'){
//     console.log('Vasara');
// } else if(menesis === 'Rugsejis'|| menesis === 'Spalis' || menesis === 'Lapkritis'){
//     console.log('Ruduo');
// }
// console.log(menesis);

// switch (menesis){
//     case 'Sausis':
//     case 'Vasaris':
//     case 'Gruodis':
//         console.log('Ziema');
//         break;
//     case 'Kovas':
//     case 'Balandis':
//     case 'Geguze':
//         console.log('Pavasaris');
//         break;
//     case 'Birzelis':
//     case 'Liepa':
//     case 'Rugpjutis':
//         console.log('Vasara');
//         break;
//     case 'Rugsejis':
//     case 'Spalis':
//     case 'Lapkritis':
//         console.log('Ruduo');
//         break;
//     default:
//         console.log('Neteisingai menesis')
// }

//SWITCH
//1
// let browser = 'Edge';

// if (browser === 'Edge'){
//     alert( "RIP Edge!" );
// } else if (browser === 'Chrome' || browser === 'FireFox' || browser === 'Safari' || browser === 'Opera'){
//     alert('Šios naršykles palaikomos');
// } else {
//     alert( 'Tikimės, kad šis puslapis atrodys puikiai!' );
// }

//2VAISIAI DARZOVES

// let userInput = 'Obuolys';

// switch (userInput){
//     case 'Obuolys':
//         console.log('Vaisius');
//         break;
//     case 'Morka':
//         console.log('Darzove');
//         break;
//     case 'Bulve':
//         console.log('Darzove');
//         break
//     case 'Arbuzas':
//         console.log('Vaisius');
//         break
//     case 'Kriause':
//         console.log('Vaisius');
//         break
// };

//3

// Sukurkite variable weekDay, kuris būtų lygus skaičiui – savaitės dienai, skaičiuojant nuo 0 (t.y. pirmadienis - 0; antradienis - 1; trečiadienis - 2 ir t.t.). Parašykite switch sąlygą, kuri paimtų skaičių ir jį pakeistų (ne sukurtų naują kintamąjį, o pakeistų weekDay reikšmę) į savaitės dieną žodžiu. Vėliau kintamąjį išveskite.

// let weekDay = 2;
// switch (weekDay){
//     case 0:
//         console.log('Pirmadienis');
//         break;
//      case 1:
//         console.log('Antradienis');
//         break;
//     case 2:
//         console.log('Treciadienis');
//         break;
//     case 3:
//         console.log('Ketvirtadienis');
//         break;
//     case 4:
//         console.log('Penktadienis');
//         break;
//     case 5:
//         console.log('Sestadienis');
//         break;
//     case 6:
//         console.log('Sekmadienis');
//         break;
// };

