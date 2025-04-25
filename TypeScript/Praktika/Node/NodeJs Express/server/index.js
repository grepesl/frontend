
import express, { response } from "express";
import cors from 'cors';
import { v4 as generateID } from 'uuid';

import {addBook, books, deleteBook} from "./data.js";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(5000, () => {
    console.log(`Severis paleistas ant 5000 port'o`);
});

//      ROUTES
// books
app.get('/books', (req, res) => {
    res.send(JSON.stringify(books));
});
app.get('/books/:id', (req, res) => {
    const { id } = req.params;
    const foundBook = books.find(book => book.id === id);
    if(foundBook){
        res.send(JSON.stringify(foundBook));
    } else {
        res.status(404).send({ error: `Book with id of ${id} was not found.` });
    }
});
app.post('/books', async (req, res) => {
    const { name, author } = req.body;
    if(name || author){
        // bandome prideti
        const newBook = {
            id: generateID(),
            name: name,
            author: author
        }
        const response_DB = await addBook(newBook);
        res.send(JSON.stringify(response_DB));
    } else {
        // error - truksta duomenu
        res.status(500).send(JSON.stringify({error: 'Lack of information'}));
    }
});
app.delete('/books/:id', async (req, res) => {
    const { id } = req.params;
    const response_DB = await deleteBook(id);
    if(response_DB.success){
        res.send(JSON.stringify(response_DB));
        // res.send(response_DB.success);
    } else {
        res.status(404).send(JSON.stringify(response_DB));
        // res.status(404).send(response_DB.error);
    }
});
app.put('/books/:id', (req, res) => {});
app.patch('/books/:id', (req, res) => {});
