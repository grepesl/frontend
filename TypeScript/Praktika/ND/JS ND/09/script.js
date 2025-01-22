//ARRAY SORT
//1)Pasirašykite sąrašą su draugų vardais. Išrikiuokite A-Z tvarka. 

const namesArray = ['Greta', 'Pavel', 'Elija', 'Kamilė'];
 namesArray.sort();
 console.log(namesArray);
console.log('-------')
//2)Pakoreguokite pirmame pratime esantį sort, kad išrikiuotumėte Z-A tvarka.

namesArray.sort((a, b) => (a > b ? -1 : 1)); // ? - if (a > b) { true } esle {false}
console.log(namesArray);
console.log('-------')

//3)Nusikopijuokite seką [5, 10, 20, 11, 12, 1, 0, 14, 25] ir su JS surūšiuokite ją mažėjimo tvarka (nuo didžiausio iki mažiausio).

const numberArray = [5, 10, 20, 11, 12, 1, 0, 14, 25];
numberArray.sort((a,b) => a - b);
console.log(numberArray);
console.log('-------')

//4)Nusikopijuokite seką [10, 5, 20, 4] ir grąžinkite didžiausią skaičių (vieną skaičių).

const biggestArrayNumber = [10, 5, 20, 4];
console.log(Math.max(...biggestArrayNumber));
console.log('-------')

//ARRAY REDUCE

const people = [
    {
      name: "Petras",
      age: "18"
    },
    {
      name: "Jonas",
      age: 15
    },
    {
      name: "Antanas",
      age: 20
    },
    {
      name: "Urtė",
      age: 10
    },
    {
      name: "Diana",
      age: 25
    },
    {
      name: "Ieva",
      age: 16
    }
  ];

//1)Prafiltruokite masyvą, kad rodytų tik pilnamečius. 

let adults = people.filter((person) => person.age >= 18)
console.log(adults);
console.log('-------')

//2)Pakoreguokite aukščiau nurodytą pratimą, kad pilnamečių array rodytų tik vardus (amžius jau nesvarbu). Rezultatas turi būti: ["Petras", "Antanas", "Diana"].

let adults2 = people.filter((person) => person.age >= 18).map((person) => person.name)
console.log(adults2);
console.log('-------')

//3)Antro pratimo array išrikiuokite A-Z tvarka. Optimizuokite kodą, kad visas veiksmas tilptų į vieną eilutę.

let adults3 = people.filter((person) => person.age >= 18).map((person) => person.name).sort()

console.log(adults3);
console.log('-------')

//4)Sukurkite funkciją. Ji priims vieną argumentą – array su objektais, kurie turės du parametrus:

// name 
// ir price. 
// Grąžinkite – brangiausią ir pigiausią prekes. 
// Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje – tik du).

// Pvz:
// iškvietimas: fn([{name: "lemonade", price: 50}, {name: "lime", price: 10}])
// grąžins: {brangiausias: "lemonade", pigausias: "lime"}

const goods = [
    {
      good: "Lemon",
      price: 1
    },
    {
      good: "Cucumber",
      price: 1.5
    },
    {
      good: "Onion",
      price: 0.30
    },
    {
      good: "Ginger",
      price: 1.2
    },
    {
      good: "Garlic",
      price: 0.9
    },
  ];
console.log(goods);
console.log('-------')

const mostExpensiveGood = goods.sort((a, b) => a.price - b.price);

console.log(
    {
        brangiausias: mostExpensiveGood[mostExpensiveGood.length - 1].good,  
        pigausias: mostExpensiveGood[0].good
    });

//ARRAY PRAKTIKA 
//1)Parašykite funkciją addElement, kuri naudoja push() metodą, kad pridėtų naują elementą į masyvą.
console.log('-------')

const addElement = [1, 2, 3];
const addedElement = addElement.push(4);
console.log(addElement);

//2)Sukurkite funkciją mergeArrays, kuri sujungia du masyvus į vieną.

// Rezultatas
// console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log('-------')

const mergeArrays = (arr1, arr2) => arr1.concat(arr2);
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

//3)Parašykite funkciją addMultipleElements, kuri naudoja spread operatorių ..., kad pridėtų kelis elementus į masyvą. 

// Rezultatas
// console.log(addMultipleElements([1, 2, 3], 4, 5, 6)); // [1, 2, 3, 4, 5, 6]

console.log('-------')

const addMultipleElements = (arr, ...numbers) => [...arr, ...numbers];
console.log(addMultipleElements([1, 2, 3], 4, 5, 6));

//4)Parašykite funkciją doubleNumbers, kuri naudoja map() metodą, kad padvigubintų kiekvieną masyvo elementą.

// Rezultatas
// console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
console.log('-------')

const doubleNumbers = (numbers) => numbers.map((number) => number * 2);
console.log(doubleNumbers([1, 2, 3]));

//4)Parašykite funkciją findUnique, kuri grąžina unikalius elementus iš masyvo.

// Rezultatas
// console.log(findUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log('-------')

const findUnique = (array) => [...new Set(array)];

console.log(findUnique([1, 2, 2, 3, 4, 4, 5]));

//5)Jūsų užduotis - sukurti funkciją planTrip, kuri nustato, ar galima atlikti kelionę neperkraunant transporto priemonės. Transporto priemonė gali pavežti iki 200 kg. Funkcija priima masyvą su daiktų svoriais ir nustato, ar bendras svoris neviršija leistinos ribos.

// Rezultatas
// console.log(planTrip([30, 70, 90])); // true
// console.log(planTrip([100, 85, 60])); // false
console.log('-------')

// const planTrip = (weigths) => weigths.reduce((sum, weigth) => sum += weigth) < 200;
//1 (0, 30)
//2 (30, 70)
//3 (100, 90)

const planTrip = (array) => {
    let maxWeight = 200;
    let weightSum = 0;

    for (let i = 0; i < array.length; i++){
        weightSum+=array[i];
    }
    if(maxWeight < weightSum){
        return false
    } else {
        return true 
    }
}
console.log(planTrip([30, 70, 90]));
console.log(planTrip([100, 85, 60]));


//6)Jūs dirbate restorane ir turite optimizuoti užsakymų aptarnavimo eilę. Sukurkite funkciją optimizeQueue, kuri surikiuoja užsakymus pagal jų dydį (mažiausi pirmi). Kiekvienas užsakymas yra objektas, turintis id ir size savybes. Funkcija grąžina masyvą su surikiuotais užsakymų ID.

// Rezultatas
// console.log(optimizeQueue([{ id: 1, size: 5 }, { id: 2, size: 3 }, { id: 3, size: 8 }])); // [2, 1, 3]
console.log('-------')

const optimizeQueue = (orders) => orders.sort((a, b) => a.size - b.size).map((order) => order.id)
console.log(optimizeQueue([{ id: 1, size: 5 }, { id: 2, size: 3 }, { id: 3, size: 8 }]));

//7)Sukurkite funkciją findMostFrequent, kuri nustato ir grąžina dažniausiai pasitaikantį elementą masyve.

// Rezultatas
// console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3])); // 1
console.log('-------')

const findMostFrequent = (numbers) => {
    const counts = {}; //key, value (count)
   
    let maxCount = 0;
    let mostFrequentItem = null;
    
    numbers.forEach((number) => {
        //counts[3] = 1
        //counts[7] = 1
        //counts[3] = 2
        //counts[1] = 1
        //counts[3] = 3

        //counts[3] = (counts[3] || 0)
        counts[number] = (counts[number] || 0) + 1; 
        // console.log(counts[number])
        if (counts[number] > maxCount) { //counts[3] > 0
            mostFrequentItem = number;
            maxCount = counts[number];
        }
    });
    return mostFrequentItem
}
console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3]));

//8)Sukurkite funkciją findMissingNumber, kuri randa trūkstamą skaičių iš eilės. Funkcija priima masyvą su skaičiais nuo 1 iki n. Jeigu masyve truksta bent vieno skaičiaus, funckija grąžina pirmą skaičių kurio trūksta eilėje. Jeigu visi skaičiai surašyti iš eilės, grąžina koks turėtų būti sekantis.

// Rezultatas
// console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
// console.log(findMissingNumber([1, 2, 3, 4, 5, 6])); // 7
console.log('-------')


const findMissingNumber = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        // i=2 numbers[2] = 3
        // numbers[1] = 2
        // numbers[3] = 4
        // numbers[i -1 ] = 2
        //numbers[i +1] = 4

        if (i !== 0 && numbers[i] - 1 !== numbers[i - 1]) {
            return numbers[i] - 1;
        }

        if (i !== numbers.length - 1 && numbers[i] + 1 !== numbers[i + 1]) {
            return numbers[i] + 1;
        }
        
        //  i = 5
        // numbers[5] = 6
        //
        if (i === numbers.length - 1) {
            return numbers[i] + 1;
        }
    }
}
console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
console.log(findMissingNumber([1, 2, 3, 4, 5, 6])); // 7
