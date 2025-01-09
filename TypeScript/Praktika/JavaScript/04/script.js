console.groupCollapsed('Teorija');
//FOR 

// for(let i = 0; i < 10; i++){
//     console.log(i);
// };
// console.log('Už ciklo ribų');

//WHILE

// let random = Math.random()*10;
// while(random > 3){
//     console.log(random);
//     random = Math.random()*10
// }
// console.log(random);
// console.log('Už ciklo ribų');

//DO

// do{
//     console.log(random2);
//     random2 = Math.random()*10
// } while (random2 > 9);
// console.log('Uz ciklo ribu');
// console.log(random2);


//FOR

// let masyvas = [6,54,65,615,9,16,1,618,94,9,165,1];
// for(let el of masyvas){
//     console.log(el);
// }
// console.log('----------');
// let objektas = {
//     vardas: 'rokas',
//     amzius: 28,
//     alkanas: true
// }
// for(let el in objektas){
//     console.log(`${el} yra ${objektas[el]}`);
// }
// Object.keys(objektas).forEach(el => console.log(`${el}) yra ${objektas[el]}`));
console.groupEnd();

console.groupCollapsed('For praktika');
//FOR PRAKTIKA

// sukamas ciklas nuo 0 iki 20 kas 3
for(let i = 0; i <= 20; i+=3){
    console.log(i);
};
console.log('----------');
//sukamas ciklas nuo -8 iki 30 kas 7
for(let i = -8; i <= 30; i+=7){
    console.log(i);
};
console.log('----------');
//sukamas ciklas nuo 10 iki 1 kas 2
for(let i = 10; i >= 1; i-=2){
    console.log(i);
};
console.log('----------');
//sukamas ciklas nuo 0 iki 15 kas 1; spausdinami tik lyginiai skaiciai
for(let i = 0; i <= 15; i++){
    if(i % 2 === 0){ // i != 0 jei noreciau kad ne nuo nulio pradet
    console.log(i);
    }
};
console.groupEnd();
console.groupCollapsed('Ciklai su masyvais');
//CIKLAI SU MASYVAIS

let transportoPriemones = ['automobilis','dviratis','traukinys','laivas','rieduciai','valtis','arklys','lektuvas'];
let transportoPriemonesFancy = [
    {
        pavadinimas: 'automobilis',
        vieta: 'zeme'
    }, {
        pavadinimas: 'dviratis',
        vieta: 'zeme'
    },{
        pavadinimas: 'traukinys',
        vieta: 'zeme'
    },{
        pavadinimas: 'laivas',
        vieta: 'vanduo'
    },{
        pavadinimas: 'rieduciai',
        vieta: 'zeme'
    },{
        pavadinimas: 'valtis',
        vieta: 'vanduo'
    },{
        pavadinimas: 'arklys',
        vieta: 'zeme'
    },{
        pavadinimas: 'lektuvas',
        vieta: 'oras'
    },
]
console.log(transportoPriemones[0]);
console.log(transportoPriemones[1]);
console.log(transportoPriemones[2]);
console.log(transportoPriemones[3]);
console.log(transportoPriemones[4]);
console.log('...');
console.log(transportoPriemones[transportoPriemones.length - 1]);
console.log('----------');
console.log(transportoPriemonesFancy[5].vieta)
console.log('----------');
for(let el of transportoPriemones){
    console.log(el);
}
console.log('----------');
//spausdinti visas transporto priemones nuo pirmos iki paskutines
for(let i = 0; i < transportoPriemones.length; i++){
    console.log(transportoPriemones[i])
}
console.log('----------');
//spausdinti puse transporto priemoniu nuo pradzios
for(let i = 0; i < transportoPriemones.length / 2; i++){
    console.log(transportoPriemones[i])
};
console.log('----------');
//spausdinti visas transporto priemones nuo galo
for(let i = transportoPriemones - 1; i >= 0; i--){
    console.log(transportoPriemones[i])
}
console.log('----------');
//spausdintu visas transporto priemones, kurios vaziuoja zeme
for(let i = 0; i < transportoPriemonesFancy.length - 1; i++){
    if(transportoPriemonesFancy[i] === 'zeme'){
        console.log(transportoPriemones[i].pavadinimas)
    }
}
//Taip geriau
console.log('----------');
for(let el of transportoPriemonesFancy){
    if(el.vieta === 'zeme'){
        console.log(el.pavadinimas);
    }
}
console.log('----------');
while(transportoPriemones.length > 0){ //> 0 nebutina
    console.log(transportoPriemones.shift());
}
console.log(transportoPriemones);
console.groupEnd();

//FUNCTION

function siandienosData(){
    let data = new Date();
    let today = data.toISOString().slice(0,10);
    //console.log(today);
    return today;
}
let funcAts = siandienosData();
console.log(`Siandienos data yra: ${funcAts}.`);