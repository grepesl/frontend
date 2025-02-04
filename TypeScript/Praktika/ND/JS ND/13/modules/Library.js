class Library{
    #books;
    constructor(){
      this.#books = [];
      this.borrowers = []; // [{ userName: "Petras", borrowedBooks: [215, 30, 654321] }, { userName: "Jonas", borrowedBooks: [] }]
    }
    addBook(book){
      this.#books.push({ ...book, available: true, id: Math.ceil(Math.random()*999999999) }); // { ...book } === book; ...book === author, title, year
    }
    lendBook(bookTitle, userName){
      // visų pirma reikia patikrinti ar tarp this.#books yra knyga su nurodytu bookTitle, kurią galime skolinti
      const bookToBeFoundIndex = this.#books.findIndex(book => book.title === bookTitle && book.available);
      if(bookToBeFoundIndex !== -1){
        console.log('Rado laisvą knygą su title', bookTitle);
        // įrašyti pasiskolinusį asmenį į masyvą jeigu jo ten nebuvo; papildyti pasiskolinusio asmens masyvo knygų sąrašą
        const borrower = this.borrowers.find(person => person.userName === userName);
        if(borrower){
          console.log(`toks vartotojas (${userName}) jau buvo`);
          // sukame ciklą per this.borrowers ir jeigu tas asmuo yra skolininkas, tuomet jo pasiskolintų knygų pasyvą papildome rastos knygos id, o visus kitus grąžiname nekeistus
          const knygosDublikatas = borrower.borrowedBooks.some(bookId => {
            return this.#books.some(book => book.id === bookId && book.title === bookTitle);
          });
          if(!knygosDublikatas){ // knygos su tokiu pavadinimu šitas pasiskolintojas nėra pasiskolinęs
            // tarp visų knygų (this.#books) surandame tą vieną ir nustatome jos available į false
            this.#books[bookToBeFoundIndex] = { ...this.#books[bookToBeFoundIndex], available: false };
            this.borrowers = this.borrowers.map(person => {
              if(person.userName === userName){
                return {
                  ...person,
                  borrowedBooks: [...person.borrowedBooks, this.#books[bookToBeFoundIndex].id]
                }
              } else {
                return person
              }
            });
          } else { // knygą su tokiu pavadinimu šitas pasiskolintojas jau yra pasiskolinęs
            console.log(`Vieną ${bookTitle} kopiją jau esi pasiskolinęs. Dėl to neskolinsim antros.`);
          }
        } else {
          console.log(`tokio vartotojo (${userName}) dar nebuvo`);
          // tarp visų knygų (this.#books) surandame tą vieną ir nustatome jos available į false
          this.#books[bookToBeFoundIndex] = { ...this.#books[bookToBeFoundIndex], available: false };
          this.borrowers = [ ...this.borrowers, {
            userName: userName,
            borrowedBooks: [this.#books[bookToBeFoundIndex].id]
          }];
        }
      } else {
        console.log(`Atsiprašome, šiuo metu knygos su pavadinimu ${bookTitle} neturime.`);
      }
    }
    returnBook(bookTitle, userName){
        const borrower = this.borrowers.find(person => person.userName === userName);
        const bookId = borrower.borrowedBooks.find(borrowedBookId => this.#books.find(book => book.id === borrowedBookId && book.title === bookTitle));
        console.log(this.#books[bookIndex])
    }
    listAvailableBooks(){
      console.log(this.#books.filter(book => book.available));
    }
  }
  
  export default Library;