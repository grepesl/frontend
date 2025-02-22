// Objektų tipų aprašymai

// Objektas
const vartotojas = {
    id: 654321654987,
    username: '',
    email: '',
    role: 'user',
    prenumerator: false
}

// Type alias 
type VartotojoTipas = {
    id: number | string,
    username: string,
    email: string,
    role: 'user' | 'admin' | 'moderator',
    prenumerator: boolean
}

// panaudojimas
const vartotojas0: VartotojoTipas = {
    id: '654-asd-231',
    username: 'Morka',
    email: 'seklys@gmail.com',
    role: "user",
    prenumerator: false
}

// Interface 
    // susikūrimas 

    interface Book{
        pavadinimas: string,
        autorius: string,
        metai: number,
        zanras: 'dokumentika' | 'autobiografija' | 'trileris',
        publikuota: boolean
    }

    // priskirimas
    const knyga0: Book = {
        zanras: "dokumentika",
        pavadinimas: "Sahara",
        autorius: "James D. Jameson",
        metai: 2000,
        publikuota: true
    }

//užduotis
type Animal = {
    id: number | string,
    name: string,
    age: string,
    hasOwner: boolean
}

type Flat = {
    id: number | string,
    city: string,
    size: number,
    floor: number,
    isSold: boolean
}

interface Flower{
    name: string,
    color: string,
    heigth: number,
    watered: boolean
}

interface Student{
    id: number,
    name: string,
    age: number,
    gender: string,
    isLastYearStudent: boolean
}

// Masyvai 
    // Tuples
    let asmuo0: [string, string] = ["Petras", "Petraitis"];
    type TrysString = [string, string, string];
    let trysPomegiai: TrysString = ["Filmai", 'Žaidimai', "Sportas"];

    // Array

    let pomegiai: Array<string> = ['Filmai', 'Zaidimai', 'Sportas', 'Anime'];
    type StringArr = Array<string>;
    let pomegiai0: StringArr = ['Filmai', 'Zaidimai', 'Sportas', 'Anime'];

    // []

    let laimingiSkaiciai: number[] = [7, 8, 96, 5211, 69];
    type NumberArr = number[];
    let laimingiSkaiciai0: NumberArr = [7, 8, 96, 5211, 69];

//Masyvų variacijos
    //vieno arba kito tipo masyvas

type StrOrNrArr = number[] | string[];
type StrOrNrArr0 = Array<number> | Array<string>;
let masyvas0: StrOrNrArr = [4,5,6,1,2,3,7];
let masyvas1: StrOrNrArr = ["Filmai", 'Žaidimai', "Sportas"];
// let masyvas3: StrOrNrArr = [4,5,6,1,2,3,7, "Filmai", 'Žaidimai', "Sportas"]; negalima taip rašyti

// Mišrus masyvas

type MixedArr = (string | number)[];
let masyvas2: MixedArr = [4,5,6, 'string'];
let masyvas3: MixedArr = [4,5,6];
let masyvas4: MixedArr = ['string', 'zodis'];

// Mayvai masyve (matrix)

type Matrix =  number[][];
let matrica: Matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// Objektai masyve
type GyvenamojiVietaaa = {
    salis: string,
    miestas: string,
    gatve: string,
    namoNumeris: number
}
type Person = {
    name: string,
    age: number,
    pomegiai: string[],
    gyvenamojiVieta: GyvenamojiVietaaa 
}
const people: Person[] = [
    {
        name: "Petras",
        age: 20,
        pomegiai: ['Tv', 'Anime'],
        gyvenamojiVieta: {
            salis: 'Lietuva',
            miestas: 'Vilnius',
            gatve: 'Maironio',
            namoNumeris: 54
        }
    },
    {
        name: "Jonas",
        age: 50,
        pomegiai: ['Tv', 'Anime', 'Miegoti'],
        gyvenamojiVieta: {
            salis: 'Lietuva',
            miestas: 'Klaipeda',
            gatve: 'Rojaus',
            namoNumeris: 64
        }
    }
]

// Funkcijos
    // be papildomo tipo

    const funkcija = (par1: string, par2: number): string => {

        return par1.repeat(par2);
    }

    //su papildomu tipu 

    type FunkcijosTipas = (par1: string, par2: number) => string;
    const funkcija0: FunkcijosTipas = (haha, hihi) => {

        return haha.repeat(hihi);
    }
    interface FunkcijosInterface{
        (par1: string, par2: number): string
    }
    const funkcija1: FunkcijosInterface = (haha, hihi) => {

        return haha.repeat(hihi);
    }

    console.log(funkcija('alio', 5));
    console.log(funkcija0('alioa', 3));
    console.log(funkcija1('aliob', 4));