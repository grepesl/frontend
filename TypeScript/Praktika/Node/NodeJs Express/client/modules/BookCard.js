
class BookCard{
    constructor({ id, name, author }){
        this.id = id;
        this.name = name;
        this.author = author;
        return this.render();
    }
    render(){
        const bookDiv = document.createElement('div');

        const bookName = document.createElement('h3');
        bookName.textContent = this.name;

        const bookAuthor = document.createElement('h4');
        bookAuthor.textContent = `By: ${this.author}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => this.deleteFunc(bookDiv));

        bookDiv.append(bookName, bookAuthor, deleteButton);
        return bookDiv;
    }
    deleteFunc(bookDiv){
        fetch(`http://localhost:5000/books/${this.id}`, {
            method: "DELETE"
        })
            .then(res => {
                if(res.status === 200){
                    // console.log('Deleted successfully');
                    bookDiv.remove();
                } else {
                    // console.log('Could not delete book');
                }
                return res.json();
            })
            .then(responseMessage => console.log(responseMessage));
    }
}

export default BookCard;
