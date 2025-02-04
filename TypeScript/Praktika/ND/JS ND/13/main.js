import { books as booksData} from "./modules/Data.js";
import Book from "./modules/book.js";
import Library from "./modules/Library.js";

//1)Sukurkite Book klasę su savybėmis title, author ir year. Pridėkite metodą getSummary(), kuris grąžina santrauką apie knygą.

// Inicializacijos ir naudojimo pavyzdys:
// const book1 = new Book("Book Title", "Author Name", "2023");
// console.log(book1.getSummary()); // "Book Title by Author Name published in 2023"

// class Book {
//     constructor(title, author, year){
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     getSummary(){
//         return `${this.title} by ${this.author} published in ${this.year}`;
//     }
// }
// const book1 = new Book("Book Title", "Author Name", "2023");
// console.log(book1.getSummary()); // "Book Title by Author Name published in 2023"

//2)Sukurkite klasę MusicStudent, kuri saugo informaciją apie muzikos mokyklos studentus. Studentas turi name (vardas), instrument (muzikos instrumentas, kurį jis mokosi groti) ir level (lygis, pvz., pradedantysis, pažengęs). Pridėkite metodą practice, kuris didina studento lygį. Pagal nutylėjimas studento lygis turėtų būti "beginner".

// Inicializacijos ir naudojimo pavyzdys:
class MusicStudent {
    constructor(name, instrument, level = "beginner"){
        this.name = name;
        this.instrument = instrument;
        this.level = level;
    }

    practice(){
        if (this.level === "beginner"){
            this.level = "intermediate";
        } else if (this.level === "intermediate") {
            this.level = "advanced";
        }
    }
}

const student = new MusicStudent("Anna", "piano");
student.practice();
console.log(`${student.name}, ${student.instrument}, ${student.level}`); // "Anna, piano, intermediate"

//3)Sukurkite ShoppingCart klasę, kuri gali pridėti prekes (addItem), pašalinti prekes (removeItem) ir apskaičiuoti bendrą kainą (calculateTotal). Prekės yra objektai su savybėmis name ir price.

// Inicializacijos ir naudojimo pavyzdys:


class ShoppingCart {
    #items = [];

    addItem(item){
        this.#items.push(item);
    }

    removeItem(itemName){
        this.#items = this.#items.filter(el => el.name !== itemName);
    }

    calculateTotal(){
        return this.#items.reduce((sum, item) => sum + item.price, 0);
    }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Apple", price: 0.99 });
cart.addItem({ name: "Bread", price: 1.29 });
console.log(cart.calculateTotal()); // 2.28
cart.removeItem("Apple");
console.log(cart.calculateTotal()); // 1.29

//4)Sukurkite MovieTheater klasę, skirtą valdyti kino teatro sėdimų vietų rezervacijoms. Klasė turi turėti šias savybes: rows (eilučių skaičius) ir seatsPerRow (vietų skaičius eilutėje). Vietos turi būti saugomos dvimačiame masyve, kur kiekviena vieta gali būti true (užimta) arba false (laisva). Taip pat klasėje turi būti šie metodai:

// bookSeat(row, seat) - metodas vietos rezervavimui. Jei vieta jau užimta, turi būti grąžinamas pranešimas apie tai.

// cancelBooking(row, seat) - metodas rezervacijos atšaukimui. Jei vieta nebuvo rezervuota, turi būti grąžinamas atitinkamas pranešimas.

// checkAvailability(row, seat) - metodas, grąžinantis true arba false, priklausomai nuo to, ar vieta yra laisva.

// Inicializacijos ir naudojimo pavyzdys:

class MovieTheater {
    #seats = [];

    constructor(rows, seatsPerRow){
        this.rows = rows;
        this.seatsPerRow = seatsPerRow;

        for(let i = 0; i < rows; i++){
            let row = [];

            for(let j = 0; j < seatsPerRow; j++){
                row.push(false);
            }

            this.#seats.push(row);
        }

        console.log(this.#seats);
    }
    
    bookSeat(row, seat){

    }
}

// const theater = new MovieTheater(5, 5);
// theater.bookSeat(2, 3);
// console.log(theater.checkAvailability(2, 3)); // false
// theater.cancelBooking(2, 3);
// console.log(theater.checkAvailability(2, 3)); // true

//5)Jūs turite sukurti dvi klases: Book ir Library. 

// Book klasė atstovauja knygą ir turi savybes title (pavadinimas), author (autorius), ir year (išleidimo metai). Gali panaudoti iš pirmos užduoties. 
// Library klasė valdo knygų kolekciją ir skolinimo procesą. Ji turi šias funkcijas:
// addBook(book): Prideda naują Book objektą į bibliotekos kolekciją.
// lendBook(bookTitle, userName): Išduoda knygą vartotojui, jei ji yra prieinama. Saugo informaciją apie skolininką.
// returnBook(bookTitle): Grąžina knygą į biblioteką.
// listAvailableBooks(): Atspausdina sąrašą visų prieinamų knygų.

// Inicializacijos ir naudojimo pavyzdys:
// const library = new Library();
// library.addBook(new Book("Book1", "Author1", "2020"));
// library.addBook(new Book("Book2", "Author2", "2021"));
// library.lendBook("Book1", "User1");
// library.listAvailableBooks(); // "Book2 by Author2 published in 2021"
// library.returnBook("Book1");
// library.listAvailableBooks(); // "Book2 by Author2 published in 2021", "Book1 by Author1 published in 2020"

const books = booksData.map(book => new Book(book));
console.log(books);

const library = new Library();
console.log(library);
books.forEach(book => library.addBook(book));
console.log(library);
console.log('---');
library.lendBook('Harry Potter', 'Petras');
console.log('---');
library.lendBook('Harry Potter', 'Petras');
console.log('---');
library.lendBook('Harry Potter', 'Jonas');
console.log('---');
library.lendBook('Harry Potter', 'Rokas');
console.log('---');
library.lendBook('Lord of the Rings', 'Rokas');
console.log('---');
library.lendBook('Lord of the Rings', 'Rokas');
console.log('---');
console.log(library);
library.listAvailableBooks();