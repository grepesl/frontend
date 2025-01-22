// console.groupCollapsed();
// console.log(typeOf('zodis')) //string
// console.log(typeOf({})) // object
// console.log(typeOf([])) // object // megerai, nes netiesa
// console.log(Array.isArray([])) // true

// const nrArr = [0,1,2,3,4,5,6,7,8,9];
// console.log(nrArr);
// const toSpl = nrArr.toSpliced(3, 4, 'a', 'b');
// console.log(toSpl); // [0, 1, 2, 'a', 'b', 7, 8, 9]
// console.log(nrArr);
// const spl = nrArr.splice(3, 4, 'a', 'b');
// console.log(spl); // [3,4,5,6]
// console.log(nrArr); // [0, 1, 2, 'a', 'b', 7, 8, 9]

// //                0    1    2    3    4    5    6
// const charArr = ['a', 'b', 'c', 'a', 'c', 'd', 'a'];
// console.log(charArr.indexOf('c')); //2
// console.log(charArr.indexOf('a')); // 0
// console.log(charArr.indexOf('a', 3)); // 3
// console.log(charArr.indexOf('a', 4)); // 6
// console.log('---');
// console.log(charArr.lastIndexOf('c')); // 4
// console.log(charArr.lastIndexOf('a')); // 6
// console.log(charArr.lastIndexOf('a', 2)); // 0
// console.log(charArr.lastIndexOf('a', -2)); // 3

// const nrArrMess = [4,64,984,61,1,91,91,65,198,16,132,1,7,6,350];
// const LT_charArr = ['f','d','a','g','u','i','y','č','q','w'];
// console.log(charArr.toSorted()); // masyvo su tekstu be neįprastų simbolių rikiavimas papratas, viskas gražu, tvarkinga
// console.log(LT_charArr.toSorted()); // masyvo su tekstu su neįprastais simbolais (ne ASCII), nukelia neįprastus simbolius į pabaigą
// console.log(LT_charArr.toSorted((a,b)=>a.localeCompare(b))); // norint tvarkingai surikiuoti masyvus su tekstu kur yra ne5prasti simboliai, reikia pateikti rikiavimo funkcij1 kaip callback'ą
// console.log(nrArrMess.toSorted()); // masyvo su skaičiais nesugeba tvarkingai surikiuoti
// console.log(nrArrMess.toSorted((a,b)=>a-b)); // norint tvarkingais surikiuoti masyva su skaičiais reikia pateikti rikiavimo funkciją kaip callback'ą
// // reikia funkcijos: a -> b => nuo ma=iausio iki did=iausio; b -> a => nuo did=iausio iki mažiausio 

console.groupEnd();

//parašyti ciklą kuris atrinktų ir į konsolę išspausdintu tik pirminius skaičius intervale nuo 2 iki 100. (for(for) ir if) pirminis skaicius - dalinasi tik is saves ir is saves paties ir iš 1 be liekanos. pvz ()

const pirminiuFn = (start, finish) => {
    const pirminiuMasyvas = [];
    console.time();
    for(let i = start; i <= finish; i++){ // i=6
        let arPirminis = true;
        for(let j = 2; j < i; j++){ //tikrinti ar nėra pirminis 2...5
            if(i % j === 0){
                arPirminis = false
                break;
            }
        }
        if(arPirminis){
            pirminiuMasyvas.push(i);
        }
    }
    console.timeEnd();
    console.log(pirminiuMasyvas);
}
pirminiuFn(2, 30000);
// nuo 2 iki 30000
// 16209 ms - be break
// 150 ms - su break

//užduotis = paieškoti pagalvoti geresnių būdų spartumui

const wordArray = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit.', 'Iste,', 'illo', 'possimus.', 'Officiis', 'nesciunt', 'voluptate,', 'architecto', 'voluptatum', 'atque', 'modi', 'iste', 'odio', 'repellendus', 'dolor', 'expedita', 'magni', 'amet', 'tempore?', 'Sequi', 'dolor', 'consequatur', 'aperiam?'];

console.log(wordArray);
const forEachResult = wordArray.forEach((word, i, masyvas) => {
    console.log(`${word} yra ${i}'asis elementas masyve`)
});
console.log(forEachResult); // for each nieko negrąžina

const filterResult = wordArray.filter((word, i, masyvas) => {
    // if(word.length < 5){
    //     return true
    // }
    return word.length < 5
})
console.log(filterResult); // masyvas su žodžiais trumpesniais negu į ilgio

const mapResult = wordArray.map((word, i, masyvas) => {
    return `${i}: ${word}`;
});
console.log(mapResult); // tas pats masyvas, bet prie žodžių yra jų indeksas kaip tekstas