// import multiplied from "./Module/multi.js";
// import { carMarks } from "./Module/carsRoutes.js";
import CarsClass from "./Module/CarsClass.js";

//ASYNC

//1)Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Resolve – iššoka alert yes, it works! Pažado aprašyme panaudoti setTimeOut.

// function itWorks (){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Yes, it works!')
//         }, 5000)
//     });
// }

// itWorks().then(atsakymas => {alert(atsakymas)});

//2)Papildykite pirmąjį pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

// function itWorks (){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randomNumber = Math.floor(Math.random() * 5) + 1;
//             console.log(randomNumber)
//             if(randomNumber > 1){
//                 resolve('Yes, it works!')
//             } else {
//                 reject();
//             }
//         }, 5000)
//     });
// }

// itWorks().then(atsakymas => {alert(atsakymas)})
// .catch(() => alert("Oops, promise rejected"))

//3)then bendrauja su kitu then. Papildykite antrą pratimą, kad jei resolve'inasi pirmas pažadas – pasileidžia then(), kuris paprasčiausiai grąžina žinutę This is a message, šią žinutę pagauna antrasis then() ir ją alertina. 

//Prisiminkime – ką then() returnina, tą pasigauna kitas then() kaip parametrą.

// function itWorks (){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const randomNumber = Math.floor(Math.random() * 5) + 1;
//             console.log(randomNumber)
//             if(randomNumber > 1){
//                 resolve('Yes, it works!')
//             } else {
//                 reject();
//             }
//         }, 5000)
//     });
// }

// itWorks().then(atsakymas => { return atsakymas })
//          .then(atsakymas => alert(atsakymas))
//          .catch(() => alert("Oops, promise rejected"));

//ES6

//1)Sukurkite modulį (t.y. failą – multi.js), kuriame būtų viena eksportuota (default) funkcija – multiplikacija. Ji priims du skaičius kaip parametrus ir grąžins šiuos skaičius jau sudaugintus. Pagrindiniame JS faile (script.js) importuokite ir panaudokite šį modulį.

// console.log(multiplied(5, 6))

//2)Sukurkite modulį pavadinimu header.js. Šiame modulyje bus funkcija, kuri paims app kaip argumentą, tačiau nieko negrąžins. 

// Šios funkcijos tikslas – į app.innerHTML pridėti (t.y. +=) header kodą (pasirašykite standartinį HTML su inline CSS). 

// Šį modulį importuokite į pagrindinį failą ir paduokite app, kuris bus document.body. Puslapio viršuje turėtų atsivaizduoti headeris, kuris importuotas iš header.js.

//HEADER JS TURETU BUTI
// export default function addHeaderToElement(element) {
//     element.innerHTML += `
//       <header style="background-color: #f5f5f5; padding: 20px;">
//         <h1 style="text-align: center;">My Website Header</h1>
//       </header>
//     `;
//   }

// import addHeaderToElement from './header.js';

// addHeaderToElement(document.body);

//3)Pridėkite dar vieną modulį, pavadinimu carsRoutes.js. Šis modulis turės funkciją, kuri taip pat pasiims app ir nieko negrąžins (t.y. turinį pridės prie app.innerHTML).

// Tačiau šį kartą – funkcija viduje turės array ["BMW", "VW", "AUDI", "MB"]. Į innerHTML reikia pridėti nerikiuotą sąrašą (<ul>), kuriame automobilio markė bus įrašyta sąrašo elemento viduje (<li>).

// carMarks(document.body);

//KLASES IR MODULIAI 
//ROKO UZDUOTYS

// 1) Sukurkite klasę vardu "Car" ir duokite jai "name" ir "year" parametrus ir savybes.

//   1.1) Sukurkite papildomą savybę "helloCar" ir priskirkite jam tekstą, pristatantį mašiną. (gali būti betkas, tarkim "Labas, čia mano mašina Volvo ir ji buvo pagaminta 1990 metais").

const helloCar = new CarsClass("BMW",1999);

// helloCar.age();
document.body.appendChild(helloCar);

//   1.2) Skukurkite metodą "age", kuris apskaičiuotų ir grąžintų tekstą, pasakantį kiek mašinai metų. (dabartinę datą gauti galima su 'date = new Date()' ir paversti tik į metus su 'date.getFullYear()').















// 2) Sukurkite klasę vardu "Rectangle" ir duokite jai "width" ir "height" parametrus ir savybes.
//   2.1) Sukurkite papildomą savybę "color" ir priskirkite jam randomly parinktą spalvą.
//   2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą.
//   2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą.

// 3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" parametrus ir savybes.
//   3.1) Sukurkite papildomą savybę "coordinates" ir priskirkite jam "x" ir "y" reikšmes.
//   3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą).

// 4) Sukurkite klasę vardu "Rectangle_3D" ir duokite jai "width", "height" ir "depth" parametrus ir savybes.
//   4.1) Sukurkite metodą "volume", kuris grąžina 3D stačiakampio tūrį.
//   4.2) Sukurkite metodą "surfaceArea", kuris grąžina 3D stačiakampio paviršiaus plotą.
//   4.3) Sukurkite metodą "perimeter", kuris grąžina 3D stačiakampio perimetrą.