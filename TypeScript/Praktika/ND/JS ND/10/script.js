const numberArray = [1,2,5,6,89,74,59,665,45.6,21,-6,-98,65,895,69.36,58,6.6,-9,36,-84,3.2,5.2];
const stringArray = ['Lorem', 'ipsum,', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit.', 'Assumenda', 'reprehenderit', 'eum', 'quidem', 'consectetur', 'fugit', 'doloremque', 'ea', 'cupiditate', 'voluptatem', 'numquam', 'repudiandae', 'excepturi,', 'atque', 'corrupti', 'eos', 'omnis', 'sequi', 'voluptas', 'vero', 'perspiciatis', 'aut!'];
//1)Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra didesnis už A (A - funkcijos parametras skaičius).
// const task1 = (masyvas, moreThan) => masyvas.findIndex((el) => el > moreThan)
const task1 = (masyvas, moreThan) => {
return masyvas.findIndex((el) => el > moreThan)
}
console.log(task1(numberArray, 10)); //4
console.log('----')

//2) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A (A - funkcijos parametras skaičius).

const task2 = (numbers, lessThan) => numbers.findIndex((number) => number < lessThan)
console.log(task2(numberArray, 5))
console.log('----')

//3) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda mažąja raide.
const task3 = (words) => words.findIndex((word) => word[0].toLowerCase() === word[0])
console.log(task3(stringArray))
console.log('----')

// 4) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja raide.
const task4 = (words) => words.findIndex((word) => word[0].toUpperCase() === word[0])
console.log(task4(stringArray))
console.log('----')

//5+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
const task5 = (numbers, max, min) => numbers.findIndex((number) => number < max && number > min);
console.log(task5(numberArray, 50, 10));
console.log('----')

//6++)Parašyti funkciją, kuri iš jai duoto masyvo grąžina indeksą pirmojo elemento, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
const task6 = (masyvas, isCapital, longerThan, shorterThan) => {
    return masyvas.findIndex( (el) => 
      isCapital ?
      el.charAt(0).toUpperCase() === el.charAt(0) && el.length > longerThan && el.length < shorterThan :
      el.charAt(0).toLowerCase() === el.charAt(0) && el.length > longerThan && el.length < shorterThan
    );
  }
  console.log(task6(stringArray, true, 4, 7)); 
console.log('----')

//7)Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra didesnis už A (A - funkcijos parametras skaičius).
const task7 = (masyvas, moreThan) => {
    return masyvas.find((el) => el > moreThan);
}
console.log(task7(numberArray, 10)); //89
console.log('----')

//8) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A (A - funkcijos parametras skaičius).
const task8 = (masyvas, lessThan) => {
    return masyvas.find((el) => el < lessThan);
}
console.log(task8(numberArray, 30)); 
console.log('----')

//9) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda mažąja raide.
const task9 = (words) => words.find((word) => word[0].toLowerCase() === word[0]);
console.log(task9(stringArray));
console.log('----')

//10) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja raide.
const task10 = (words) => words.find((word) => word[0].toUpperCase() === word[0]);
console.log(task10(stringArray));
console.log('----')

//11+) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
const task11 = (numbers, max, min) => numbers.find((number) => number < max && number > min);
console.log(task11(numberArray, 50, 10));
console.log('----')

//12++) Parašyti funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą, kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
const task12 = (words, min, max, isUpperCase) => { 
    if (isUpperCase) {
        return words.find((word) => word[0].toUpperCase() === word[0] && word.length > min && word.length < max);
    } else {
        return words.find((word) => word[0].toLowerCase() === word[0] && word.length > min && word.length < max)
    }
}
console.log(task12(stringArray, 4, 10, false));
console.log('----')

//13)Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra didesnis už A (A - funkcijos parametras skaičius).
const task13 = (masyvas, moreThan) => {
    return masyvas.some((el) => el > moreThan);
}
console.log(task13(numberArray, 18)); //true
console.log('----')

//14) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A (A - funkcijos parametras skaičius).
const task14 = (masyvas, moreThan) => {
    return masyvas.some((el) => el < moreThan);
}
console.log(task14(numberArray, 5)); //true
console.log('----')

//15) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda mažąja raide.
const task15 = (words) => words.some((word) => word[0].toLowerCase() === word[0]);
console.log(task15(stringArray));
console.log('----') //true

//16) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja raide.
const task16 = (words) => words.some((word) => word[0].toUpperCase() === word[0]);
console.log(task16(stringArray));//true
console.log('----') 

//17+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
const task17 = (numbers, max, min) => numbers.some((number) => number < max && number > min);
console.log(task17(numberArray, 60, 20));//true
console.log('----') 

//18++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, bent vienas elementas prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
const task18 = (words, min, max, isUpperCase) => { 
    if (isUpperCase) {
        return words.some((word) => word[0].toUpperCase() === word[0] && word.length > min && word.length < max);
    } else {
        return words.some((word) => word[0].toLowerCase() === word[0] && word.length > min && word.length < max)
    }
}
console.log(task18(stringArray, 4, 10, false));
console.log('----')

//19)Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra didesnis už A (A - funkcijos parametras skaičius).
const task19 = (masyvas, moreThan) => {
    return masyvas.every((el) => el > moreThan);
}
console.log(task19(numberArray, 5)); //false
console.log('----')

//20) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A (A - funkcijos parametras skaičius).
const task20 = (numbers, max) => {
    return numbers.every((number) => number > max);
}
console.log(task20(numberArray, 5)); //false
console.log('----')

//21) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda mažąja raide.
const task21 = (words) => {
    return words.every((word) => word[0].toLowerCase() === word[0]);
}
console.log(task21(stringArray)); //false
console.log('----')

//22) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja raide.
const task22 = (words) => {
    return words.every((word) => word[0].toUpperCase() === word[0]);
}
console.log(task22(stringArray)); //false
console.log('----')

//23+) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai yra mažesnis už A, bet didesnis už B.(A ir B - funkcijos parametras skaičius).
const task23 = (numbers, max, min) => {
    return numbers.every((number) => number < max && number > min);
}
console.log(task23(numberArray, 10, 2)); //false
console.log('----')

//24++) Parašyti funkciją, kuri patikrina ar iš jai duoto masyvo, visi elementai prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit) ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).   
const task24 = (words, min, max, isUpperCase) => { 
    if (isUpperCase) {
        return words.every((word) => word[0].toUpperCase() === word[0] && word.length > min && word.length < max);
    } else {
        return words.every((word) => word[0].toLowerCase() === word[0] && word.length > min && word.length < max)
    }
}
console.log(task24(stringArray, 4, 10, false));//false
console.log('----')

//25) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė.
const task25 = (array, value) => array.some((item) => item === value);
console.log(task25([15,16,17],16));
console.log(task25(['ok', 'no'],'no'));

//26) Parašyti funkciją, kuri patikrina ar jai duotame masyve yra kažkokia nurodyta reikšmė, nuo pasirinkto indekso.
const task26 = (array, value, fromIndex) => array.some((item) => item === value && array.indexOf(item) > fromIndex);
console.log(task26([15,16,17],16,2));
console.log(task26(['ok', 'no', 'yes', 'supp', 'okay'],'okay', 3));