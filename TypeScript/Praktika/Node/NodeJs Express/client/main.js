import BookCard from "./modules/BookCard.js";

fetch(`http://localhost:5000/books`)
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then(books => {
        console.log(books);
        const booksContainer = document.querySelector('#booksContainer');
        books.forEach(book => {
            const bookCard = new BookCard(book);
            booksContainer.appendChild(bookCard);
        });
    });

document
.querySelector('#addForm > form')
.addEventListener('submit', e => {
    e.preventDefault();

    const { name:{value:name}, author:{value:author} } = e.target.elements;
    // console.log(name, author);

    fetch(`http://localhost:5000/books`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, author})
    })
})