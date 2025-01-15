console.groupCollapsed();
//Boolean 
let tiesa = true;
console.log(tiesa)
console.log(tiesa.valueOf())
console.log(tiesa.toString())

//Number
console.log(`EPSILON`, Number.EPSILON)
console.log(`Max sfae integer`, Number.MAX_SAFE_INTEGER)
console.log(`Max value`, Number.MAX_VALUE)

let skaicius = 54.4;
console.log(skaicius.toPrecision(5)); //'54.430'
console.log(skaicius.toFixed(5)); // '54.43000'
console.groupEnd();

//1
const zodis = 'Labas rytas, kaip laikaisi?';
//3
const stringArray = ['Metodas', '-', 'jau', 'sukurta', 'FUNKCIJA,', 'kuri', 'priklauso', 'kažkokiam', 'specifiniam', 'kintamojo', 'tipui', 'arba', 'kintamajam/elementui', 'Savybė/property', '-', 'jau', 'sukurta', 'ir', 'priskirta', 'bei', 'netinkanti', 'REIKŠMĖ', 'priklausanti', 'kažkokiam', 'specifiniam', 'kintamąjam/elementui'];
//4
const numberArray = [6,54,+651,61,91,65,-16.4,18,64,61,1544,12.25,55,-95]
//6
console.log(zodis.at(0)); // 'L'
//7
console.log(zodis.at(-1)); // '?'
//14 išvesti iš masyvo tik ilgesnius už 5 simbolius
console.groupCollapsed('task14');
for(let i = 0; i < stringArray.length; i++) {
    if(stringArray[i].length > 5){
        console.log(stringArray[i]);
    }
}
console.groupEnd();
//16
const task16 = (zodziuMasyvas) => {
    for(let i = 0; i < zodziuMasyvas.length; i++){
        console.log(zodziuMasyvas[i].chart(0));
    }
}
//19
// const sumArray = numberArray => {
//     let sum = 0;
//     for (let i = 0; i < numberArray.length; i++) {
//         sum += numberArray[i];
//     }
//     return sum
// }
// console.log(sumArray(numberArray));
//21+
const sumArray = (numberArray, kelintas) => {
    let sum = 0;
    for (let i = 0; i < numberArray.length; i+=kelintas) {
        sum += numberArray[i];
    }
    return sum
}
console.log(sumArray(numberArray, 3));

//parašyti funkciją kuri iš jai pateikto žodžių masyvo(3 užd) grąžintu masyvą, kuriame visi pateikto masyvo žodžiai prasideda iš didž. raidės

