import Klase1 from "./klase"

//Union
    //ARBA / OR

type Arba = string | number;
let kintamasis: Arba;
kintamasis = 546;
kintamasis = "hihi haha";

    // IR / AND

type Asmuo = {
    vardas: string,
    pavarde: string
}

type AsmuoMandras = Asmuo & { amzius: number };
const asmuo0: AsmuoMandras = {
    vardas: "Petras",
    pavarde: "petraitis",
    amzius: 25
}

const asmuo2: Asmuo & { amzius: number } = {
    vardas: "Petras",
    pavarde: "petraitis",
    amzius: 25
}

// Mišrus masyvas

// type BlogasStringIrNumberArray = string[] | number[] // šitas variantas nėra mišraus masyvo aprašymas, o TIK string masyvo arba TIK number masyvo
type StringIrNumberArray = (string | number)[];

// const neMisrusMasyvas: BlogasStringIrNumberArray = ['a', 'b', 'c']; // blogas
 const masyvas: StringIrNumberArray = [4, 5, 'a', 'b'];

 //Tuples

 type Coordinates = [number, number];
 const gizosKoordinates: Coordinates = [29.977, 31.132]; 

 // Literal Types 

 type TShirt_size = 'small' | 'medium' | 'large';
 const manoMarskiniai: TShirt_size = 'medium';
//  const tetulesMarskiniai: TShirt_size = "extra large"; // tokio aprašymo nėra todėl negalima taip rašyt

//Enum

enum DegaluTipas{
    BENZINAS = 'benzina',
    DYZELINAS = 'dyzelinas',
    DUJOS = 'dujos',
    ELEKTRA = 'elektra'
}

const masina = {
    marke: 'Honda',
    modelis: 'Civic',
    metai: 2008,
    degalai: DegaluTipas.BENZINAS
}

// Class

const klasesReikalas = new Klase1(654, 'zodis', true);
console.log(klasesReikalas);
console.log(klasesReikalas.getPar2());
console.log(klasesReikalas.setPar2('nauja reiksme'));
