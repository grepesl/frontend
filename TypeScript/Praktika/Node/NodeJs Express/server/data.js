export let books = [
    {
        id: "0",
        name: "Friends, Lovers, and the Big Terrible Thing",
        author: "Matthew Perry"
    },{
        id: "1",
        name: "Mortal Engines",
        author: "Philip Reeve"
    },{
        id: "2",
        name: "The Sons of Great Bear",
        author: "Liselotte Welskopf-Henrich"
    },{
        id: "3",
        name: "Dune",
        author: "Frank Herbert"
    }
];

export const deleteBook = (id) => {
    if(books.find(book => book.id === id)){
        books = books.filter(book => book.id !== id);
        return { success: `Successfully deleted book with id of ${id}.` };
    } else {
        return { error: `Could not delete book with id of ${id}. Book not found.` };
    }
}

export const addBook = (newBook) => {
    books.push(newBook);
    return { success: `Successfully added book`, book: newBook };
}