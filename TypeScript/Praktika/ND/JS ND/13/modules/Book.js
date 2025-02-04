class Book {
    constructor(title, author, year){
        // this.id = Math.ceil(Math.random()*999999999);
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} by ${this.author} published in ${this.year}`;
    }
}
export default Book