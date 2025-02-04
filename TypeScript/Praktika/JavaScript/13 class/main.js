class Asmuo{
    #vardas;
    constructor(vardas, pavarde, amzius){
      this.#vardas = vardas;
      this.pavarde = pavarde;
      this.amzius = amzius;
    }
    pasisveikinti(){
      console.log(`Labas, aš esu ${this.#vardas} ${this.pavarde} ir man yra ${this.amzius} metai.`);
    }
    pasisveikintiSu(pavarde){
      console.log(`Labas ${pavarde}, aš esu ${this.pavarde}.`);
    }
    // pasisveikintiSu(asmuo){
    //   console.log(`Labas ${asmuo.pavarde}, aš esu ${this.pavarde}.`);
    // }
    getVardas(){
      return this.#vardas;
    }
    setVardas(naujasVardas){
      this.#vardas = naujasVardas;
    }
  }
  
  const asmuo0 = new Asmuo('Rokas', 'Banaitis', 28);
  const asmuo1 = new Asmuo('Petras', 'Petrauskas', 30);
  asmuo0.pasisveikintiSu('Petrauskas');
  asmuo1.pasisveikintiSu('Banaitis');
  // asmuo1.pasisveikintiSu(asmuo0);
  
  console.log(asmuo0);
  // console.log(asmuo0.#vardas); // error
  console.log(asmuo0.vardas); // undefined
  console.log(asmuo0.getVardas()); // Rokas
  asmuo0.pasisveikinti(); // sveikinasi kaip Rokas
  // asmuo0.#vardas = 'Kaziukas'; // error
  asmuo0.vardas = 'Kaziukas'; // sukuria atskirą savybę
  asmuo0.setVardas('Petriukas');
  console.log(asmuo0.getVardas()); // Petriukas
  asmuo0.pasisveikinti(); // sveikinasi kaip Petriukas
  console.log(asmuo1);
  asmuo1.pasisveikinti();


//   class Koncertas{
    // constructor(grupe, miestas, data){
    //     this.grupe = grupe;
    //     this.miestas = miestas;
    //     this.data = data;
    // }
    // #id;
    // constructor(koncertoInfo){
    //     this.grupe = koncertoInfo.grupe;
    //     this.miestas = koncertoInfo.miestas;
    //     this.data = koncertoInfo.data;
    //     this.data = new Date(koncertoInfo.data);
    //     this.#id = Math.cell(Math.random()*9999)

    // constructor({data, ...rest}){
//     constructor({data, grupe, miestas}){
//         this.data = data; //"2025-07-15"
//         this.miestas = miestas;
//         this.grupe = grupe;
//         // this.extraInfo = rest; // {grupe: "RHCP", miestas: "Vilnius", data: "2025-07-15"}
//         this.#id = Math.cell(Math.random()*9999);

    
//     }
//     laikasIki(){
//         const now = new Date(); 
//         const timeDifference = this.data - now; 
        
//         const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); 
//         const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
//         const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); 
        
//         return `${daysRemaining} days, ${hoursRemaining} hours, ${minutesRemaining} minutes`;
//     }
// }
//   }
  
//   const konc0 = new Koncertas('RHCP', 'Vilnius', '2025-07-15');
//   const konc1 = new Koncertas('RS', 'Kaunas', '2025-09-20');

// const koncertuDuomenys = [
//     {grupe: "RHCP", miestas: "Vilnius", data: "2025-07-15"},
//     {grupe: "RS'", miestas: "Kaunas", data: "2025-09-20"},
//     {miestas: "Klaipdeda", grupe: "ACDC", data: "2025-06-10"}
// ]


// const koncertai = [
//     // new Koncertas('RHCP', 'Vilnius', '2025-07-15'),
//     // new Koncertas('RS', 'Kaunas', '2025-09-20'),
//     // new Koncertas('Klaipdeda', 'ACDC', '2025-06-10'),
//     new Koncertas({grupe: "RHCP", miestas: "Vilnius", data: "2025-07-15"}),
//     new Koncertas({grupe: "RS'", miestas: "Kaunas", data: "2025-09-20"}),
//     new Koncertas({miestas: "Klaipdeda", grupe: "ACDC", data: "2025-06-10"}),
// ]

// const koncertai = koncertuDuomenys.map(koncertas => new Koncertas(koncertas));

//   console.log(koncertai[0], koncertai[1]);





/*
  2) Sukurkite klasę vardu "Rectangle" ir duokite jai "width" ir "height" parametrus ir savybes.
    2.1) Sukurkite papildomą savybę "color" ir priskirkite jam randomly parinktą spalvą.
    2.2) Sukurkite metodą "area", kuris grąžina stačiakampio plotą.
    2.3) Sukurkite metodą "perimeter", kuris grąžina stačiakampio perimetrą.
*/

class Rectangle{
    constructor(width, height){
      this.width = width;
      this.height = height;
      // this.color = `rgb(${[1,2,3].map(()=>Math.random()*256|0)})`;
      this.color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    }
    area(){
      return this.width * this.height; // ploto apskaičiavimas
    }
    perimeter(){
      return this.width*2 + this.height*2; // perimetro apskaičiavimas
    }
  }
  
  const rectangles = [
    new Rectangle(10, 10),
    new Rectangle(32, 64)
  ];


//1)Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą turnOn – kuris alert’ins vrooom. Sukurkite du objektus ir patikrinkite ar veikia tesingai 🚗. 

// 2)Pakoreguokite šį car konstruktorių.
// 1.Pridėkite papildomą property basePrice ir metodą getPrice. 
// 2.basePrice propertį įsirašys sukuriant objektą, tačiau getPrice, priklausomai nuo variklio, išmes kokia yra galutinė kaina. 
// a)Jei variklis electric – kaina bus +10,000
// b)Jei diesel +5,000
// c)Jei petrol – kaina tokia kokia ir basePrice

// class Car {
//     constructor(brand, model, engine, basePrice){
//         this.brand = brand;
//         this.model = model;
//         this.engine = engine;
//         this.basePrice = basePrice;
//     }

//     turnOn(){
//         alert('vrooom');
//     }

//     getPrice(){
//         if(this.engine === 'electric'){
//             return this.basePrice + 10000
//         } else if (this.engine === 'diesel'){
//             return this.basePrice + 5000
//         } else if (this.engine === 'petrol'){
//             return this.basePrice 
//         }
//     }
// }

// const car1 = new Car('Autoxx8', 'Auto', 'electric', 12000);
// const car2 = new Car('AutoLux', 'Automato', 'diesel', 2600);
// const car3 = new Car('AutoLuxlo', 'Automatoto', 'petrol', 8000);
// // car1.turnOn();
// console.log(car1.getPrice());
// console.log(car2.getPrice());
// console.log(car3.getPrice());

//3)Sukurkite klasę BankAccount, kuri turi savybes ownerName ir balance. Klasė taip pat turėtų turėti metodus deposit(amount) ir withdraw(amount), kurie atitinkamai didina arba mažina balance.

// Rezultatas:


class BankAccount {
    constructor(ownerName, balance){
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount){
        this.balance = this.balance + amount
    }

    withdraw(amount){
        this.balance = this.balance - amount
    }
}

const person1 = new BankAccount('Jonas', 0);
const account = new BankAccount("Jonas", 0);
account.deposit(100);
account.withdraw(30);
console.log(account.balance); // 70

//4)Sukurkite bazinę klasę Vehicle su savybėmis brand ir model. Taip pat sukurkite išvestines klases Car ir Bicycle. Car turi papildomą savybę engineType, o Bicycle - hasEngine. Kiekviena klasė turėtų turėti metodą information, kuris atspausdina visą turimą informaciją apie transporto priemonę.

// Klasių inicializavimo pavyzdys:
// const car = new Car("Toyota", "Corolla", "Petrol");
// console.log(car.information()); // "Brand: Toyota, Model: Corolla, Engine Type: Petrol"

// const bicycle = new Bicycle("Trek", "Marlin", true);
// console.log(bicycle.information()); // "Brand: Trek, Model: Marlin, Has Engine: true"

class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

class Car extends Vehicle {
    constructor(brand, model, engineType) {
        super(brand, model);
        this.engineType = engineType;
    }

    information() {
        return `Brand: ${this.brand}, Model:${this.model}, Engine Type:${this.engineType}`;
    }
}

class Bicycle extends Vehicle {
    constructor(brand, model, hasEngine) {
        super(brand, model);
        this.hasEngine = hasEngine;
    }

    information() {
        return `Brand: ${this.brand}, Model:${this.model}, Has Engine:${this.hasEngine}`;
    }
}

// Klasių inicializavimo pavyzdys:
const car = new Car("Toyota", "Corolla", "Petrol");
console.log(car.information()); // "Brand: Toyota, Model: Corolla, Engine Type: Petrol"

const bicycle = new Bicycle("Trek", "Marlin", true);
console.log(bicycle.information()); // "Brand: Trek, Model: Marlin, Has Engine: true"