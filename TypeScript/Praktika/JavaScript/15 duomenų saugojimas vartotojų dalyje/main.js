console.groupCollapsed('cookies');
//COOKIES
//sukurti cookies

document.cookie = `name='value'`;
document.cookie = `name='Rokas'`;
document.cookie = `amzius=28`;
document.cookie = `pomegiai=['miegoti', 'valgyti', 'miegoti']`;
document.compareDocumentPosition
document.cookie = `gyvenamojiVieta={ miestas: 'Kaunas', salis: 'Lietuva'}`;
// document.cookie = `pasens='po laiko pasens ir i6trins info'; expires=${new Date('Thu Jan 30 2025 09:10:00')}`;

//pasiimti cookie
const sausainiai = document.cookie;
console.log(sausainiai);

console.groupEnd();

console.groupCollapsed('sessionStorage');
//SESSIONSTORAGE

window.sessionStorage.setItem('raktas', 'reikšmė');
window.sessionStorage.setItem('vardas', 'Rokas');
window.sessionStorage.setItem('amzius', 28);
window.sessionStorage.setItem('noriMiego', false);
console.log(window.sessionStorage.length);

console.log(window.sessionStorage.getItem('vardas'));//Rokas
console.log(Number(window.sessionStorage.getItem('amzius')));//28
console.log(JSON.parse(window.sessionStorage.getItem('noriMiego')));//false

console.groupEnd();

console.groupCollapsed('localStorage');
//LOCALSTORAGE

window.localStorage.setItem('objektas', {
    vardas: "Rokas",
    amzius: 28,
    noriMiego: false
});// blogai, nes išsaugo kaip [object, object]
window.localStorage.setItem('objektas', `{
    vardas: "Rokas",
    amzius: 28,
    noriMiego: false
}`); // nėra geras varinatas, nes šitaip aprašytas objektas neatitinka JSON (JavaScript Object Notation) sintaksės
window.localStorage.setItem('objektas', JSON.stringify({
    vardas: "Rokas",
    amzius: 28,
    noriMiego: false
}));

const objektasIsLocal = window.localStorage.getItem('objektas');
console.log(JSON.parse(objektasIsLocal));

const asmenys_ = [
    {
        vardas: "Rokas",
        amzius: 28,
        noriMiego: false
    }, {
        vardas: "Rokas1",
        amzius: 29,
        noriMiego: true
    }, {
        vardas: "Rokas2",
        amzius: 30,
        noriMiego: false
    }, {
        vardas: "Rokas3",
        amzius: 31,
        noriMiego: false
    }
];

const localStorageData = window.localStorage.getItem('asmenys');

if (localStorageData){
    window.localStorage.setItem('asmenys', JSON.stringify(asmenys_));
}

const asmenys = JSON.parse(localStorageData);
console.log(asmenys);
asmenys[1].noriMiego = !asmenys[1].noriMiego //apversta reiksme: false -> true; true -> false
asmenys[1].amzius++; // amzius padideji vienetu 
console.log(asmenys);
window.localStorage.setItem('asmenys2', JSON.stringify(asmenys[1]));

console.groupEnd();