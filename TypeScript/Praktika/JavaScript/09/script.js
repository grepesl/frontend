//ForEach

const strArray = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit.', 'Ab', 'dolores', 'illo', 'ipsa', 'officiis', 'commodi', 'delectus', 'incidunt', 'consequatur', 'perspiciatis,', 'minima', 'molestias', 'quis', 'dolorum', 'iusto', 'vitae', 'illum', 'adipisci', 'a', 'minus', 'quae', 'amet', 'animi?', 'Sunt', 'magnam', 'exercitationem', 'animi', 'temporibus', 'at', 'sed', 'odio', 'quo.'];
const nrArray = [6,54.3,-651,61,91,54,65,-16,18,36,-6.3,458]
const mixArray = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',54,65,-16,18,36, false, false];

const namesArray = ['Petras', 'Rokas', 'Jonas', 'Eglė', 'Elžbieta'];

// mixArray.forEach((el) => {
//     console.log('number bigger than 5:', el)
// } else if (typeof(el) === 'string' && el.length > 5){
//     console.log('word longer than 5:', el):
// } else if(typeof(el) === 'boolean' && el === true){
// console.log(typeof(el) === 'boolean' && el === true){
//     console.log('boolean wich is truye:', el)
// }}
// )

//FILTER
const filterAts0 = mixArray.filter((el) => {
    if(typeof(el) === 'number'){
        return true
    }
});

const filterAts1 = mixArray.filter(el => typeof(el) === 'string');
console.log(filterAts0, filterAts1);

//MAP
const mapAts0 = namesArray.map((name, i) => {
    return {
        id: i,
        vardas: name,
        pavarde: undefined,
        amzius: undefined,
        role: 'user'
    }
});
console.log(mapAts0);

//REDUCE
const reduceAts0 = nrArray.reduce((acc, curr) => {
    return acc+curr;
});
console.log(reduceAts0)

const reduceAts1 = strArray.reduce((acc, curr) => {
    return acc+'/'+curr;
}, 'https://www.google.lt');

//DESTRUCTURING ARRAY
const arrDes = ['labas', 24, undefined, [false,5], 'zodis', 5, 6, 8];
console.log(arrDes);
//be destr
const el0 = arrDes[0];
const el1 = arrDes[1];
const el2 = arrDes[2] !== undefined ? arrDes[2] : 'default reikšmė'
const el30 = arrDes[3][0];
const el31 = arrDes[3][1];
const likusiejiB = arrDes.slice(5);
console.log(el0, el1, el2, el30, el31, likusiejiB);

// su destr
const [ed0, ed1, ed2 = 'default reikšmė', [ed30, ed31],, ...likusiejiDes] = arrDes;
console.log(ed0, ed1, ed2, ed30, ed31, likusiejiDes)

//DESTRUCTURING OBJECT
const objectDes = {
    vardas: 'Petras',
    amzius: 55,
    pavarges: true,
    batuDydis: 45,
    vairuotojoTeises: undefined,
    gyvenamojiVieta: {
        salis: 'Lietuva',
        miestas: 'Vilnius'
    },
    pomegiai: ['kartingai', 'krepsinis', 'kalnai', 'zygiai']
};
console.log(objectDes);

//be destr
const vardasB = objectDes.vardas;
const amziusB = objectDes.amzius;
const arPavargesB = objectDes.pavarges;
const salisB = objectDes.gyvenamojiVieta.salis;
const pomegis1B = objectDes.pomegiai[1];

console.log(vardasB, amziusB, arPavargesB);

//su destr
const {vardas, amzius: metai, pavarges: arPavarges, vairuotojoTeises:autoT='default value', gyvenamojiVieta:{salis}, pomegiai:{1:pomegis1}, ...restObj} = objectDes;

console.log(vardas, metai, arPavarges, autoT, restObj);