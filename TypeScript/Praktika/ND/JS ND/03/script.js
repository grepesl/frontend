//CAO
//1.FOR CIKLAS.

// for (let i = 0; i < 10; i++){
//     console.log('Greta');
// }

// //2.

// let name = 'Greta';
// let times = 10;

// for (let i = 0; i < times; i++){
//     console.log(name);
// }

// //3.

    // for (let i = 0; i < times; i++){
    //     console.log(`${i}. Greta`);
    // }

// //4.

// for(let i = 10; i>=1; i--){
//     console.log(i);
// }

// //WHILE
// //1

// let i = 1;
// while(i < 4){
//     console.log('Greta')
//     i++
// }

//2

// let combo = '';
// let times = 10;
// do {
//     combo += 'Greta'
//     times--
// } while (times > 0);
// console.log(combo);
    
//ARRAY
//1

// let array = [2,3,4];
// array.unshift(1);
// console.log(array)

//2
// [1, 2, 2, 3, 3, 3, 4] -> 4 (skirtingi elementai: 1, 2, 3, 4)

// let elements = [1,2,2,3,3,3,4];

// let uniqueElements = [];
// for (let i = 0; i < elements.length; i++){
//     console.log(elements[i])
//     if (!uniqueElements.includes(elements[i])){
//         uniqueElements.push(elements[i]);
//     }
// }
// console.log(uniqueElements);
// console.log(uniqueElements.length);

//3
// let array = [-3, 1, -2, 4, -5, 6];
// let uniqueElements = [];
// for (let i = 0; i < array.length; i++){ //pradeda nuo 0; tame tarpe 0<5; +1 dideja
//     if (0 < array[i]){  //jei array elementas yra daugiau uz nuli
//         uniqueElements.push(array[i]);
//     }
// }
// console.log(uniqueElements);

//4
// let arr = [1, 2, 3, 4, 3, 5];
// let element = 3;

// let doesRepeat = arr.indexOf(element) !== arr.lastIndexOf(element);
// console.log(doesRepeat);

//5

// [1, 2, 3, 4, 5] -> [3, 1, 9, 2, 15]

// let array = [1,2,3,4,5]
// let newArray = [];

// array.forEach(element => {
//     if (element%2 == 0) {
//         newArray.push(element / 2);
//     } else {
//         newArray.push(element * 3);
//     }
// })
// console.log(newArray)

//CIKLAI IR SĄLYGOS
//1

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

//2
 
//1+2+3+4+5=15
//1 3 6 10 15

// let sum = 0;
// let i = 5;

// while (i > 0) {
//     sum += i  
//     i--
// };
// console.log(sum);

//3

// for(let i = 2; i <= 10; i++){
//     if (i%2 == 0){
//         console.log(i);
//     }
// }

//4

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

//5

// let count = 0;
// let i = 1;

// while (i < 20) {
//     if(i % 3 === 0){
//         count++;
//     }
//     i++ 
// };
// console.log(count)

//6

// let numbers = [2, 3, 5, 6, 8, 5, 22, 4];
// let max = numbers [0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }
// console.log(max);

//7

// let findDivisors = (number) => {
//     let divisors = [];
    
//     for (let i = 1; i <= number; i++){
//         if(number % i === 0){
//             divisors.push(i);        
//         }
//     }
//     return divisors;
// }

// console.log(findDivisors(30));

//8

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let oddArray = [];

// // //1 3 5 7 9

// array.forEach(element => {
//     if (element%2 !== 0) {
//         oddArray.push(element);
//     }
// })
// console.log(oddArray)

//9

//1 2 3 5 7 11 13 17 19

// for (let i = 1; i <= 20; i++) {
//     let count = 0;

//     for (let j = 1; j <= 20; j++){
//         if (i % j === 0) { //9
//             count++;
//         }
//     }

//     if (count === 1 || count === 2) {
//         console.log(i);
//     }
// }

//ROKO PAPILDOMA

//1

// for (let i = 0; i < 10; i++ ){
//     console.log('Greta');
// }

// name = 'Greta';
// count = 10;

// for (let i = 0; i < count; i++ ) {
//     console.log(name);
// }

// for (let i = 0; i < 10; i++ ){
//     console.log(`${i}. Greta`);
// }

//2

// 0) Susikurti skaičių masyvą.
// 1) Parašyti ciklą, kuris išspausdintų kiekvieną masyvo elementą.
// 2) Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.
// 3) Parašyti ciklą, kuris išspausdintų kas antrą masyvo elementą nuo galo.
// 4) Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus, kurių reikšmė/skaičius didesnė negu 54. (for ir if)
// 5) Parašyti ciklą, kuris iš masyvo išspausdintų tik lyginius/nelyginius skaičius. (2 ciklai) (for ir if) //TODO

// let array = [1,2,3,4,5,6,7,8,9,66]

//1)
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

//2)
// for (let i = 0; i < array.length; i+=3) {
//     console.log(array[i]);
// }

//3)
// for (let i = array.length; i >= 0; i-=2) {
//     console.log(array[i]);
// }

//4)
// let array = [50,51,52,53,54,56,57,58,59]
// let number = 54;
// for (let i = 0; i < array.length; i++) {
//     if(array[i] > number){
//         console.log(array[i]);
//     }
// }

//5



