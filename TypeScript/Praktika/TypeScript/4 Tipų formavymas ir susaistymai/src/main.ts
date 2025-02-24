// const count: HTMLSpanElement | null = document.querySelector('#count');
const count = document.querySelector('#count') as HTMLSpanElement & {textContent: number};

// document.querySelector('#decr')?.addEventListener('click', e =>){

// }

// const decrBtn = document.querySelector('#decr');
// if(decrBtn){
//     decrBtn.addEventListener('click', e => {

//     })
// }

const decrBtn = document.querySelector('#decr') as HTMLButtonElement;
decrBtn.addEventListener('click', () => {
    count.textContent--;
})

// Type VS Interface

interface Asmuo{
    vardas: string,
    amzius: number
}

// interface Asmuo{
//     pavarde: string
// }

interface AsmuoFancy extends Asmuo{
    pavarde: string
}

const asmuo0: Asmuo = {
    vardas: 'Petras',
    amzius: 50,
    // pavarde: 'Petrasuaks'
}

interface Vienas{
    tekstas: string;
}

interface Kitas{
    skaicius: number;
}
const kazkas: Vienas | Kitas = {
    skaicius: 564
}

const kazkas0: Vienas | Kitas = {
    tekstas: 'kdkkd'
}

type VienasArKitas = {
    skaicius: number
} | {
    tekstas: string
}

const kazkas1: VienasArKitas = {
    tekstas: "assddd"
}

//Stuff about Types

type NameObject = {
    firstName: string,
    lastName: string,
    middleName: string
}

type Person = {
    name: string | NameObject,
    age: number
}

// type PersonName = string;
type PersonName = Person['name'];
type UtilityName = Pick<Person, 'name'>;

const manoVardas:PersonName = 'Rokas';const manoVardasFancy:PersonName = {
    firstName: "Rokas",
    lastName:"Banaitis",
    middleName: ""
}

//Neprivalomos tipų savybės

type Automobilis = {
    modelis: string,
    marke: string,
    metai: number,
    spalva?: string,
    variklioTipas: string,
    dureliuKiekis?: number,
    sankabosTipas?: string
}

const manoAuto: Automobilis = {
    marke: 'honda',
    modelis: 'civic',
    variklioTipas: 'benzinas',
    metai: 2008
}