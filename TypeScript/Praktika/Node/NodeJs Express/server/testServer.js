import express from 'express';
import cors from 'cors';
import path from 'path';
import { v4 as generateID } from 'uuid';
import { fileURLToPath } from 'url';
import { users, movies } from './dataTest.js';

// susikuriame express serverio kintamąjį
const app = express();

// surašome kelis middleware, kurie bus naudojami kiekviename route'e
app.use(express.json());
app.use(cors());

// susikuriame __filename ir __dirname modulio tipo projekte
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(5000, () => {
    console.log(`Serveris paleistas ant 5000 port'o.`);
});

app.get('/users', (req, res) => {
    res.send(JSON.stringify(users));
});
app.get('/users/:id', (req, res) => {
    const foundUser = users.find(user => user.id === req.params.id)
    if(foundUser){
        res.send(JSON.stringify(foundUser));
    } else {
        res.status(400).send(JSON.stringify({ error: `User with id of ${req.params.id} wasn't found` }));
    }
});
app.post('/users', (req, res) => {
    // console.log(req.body);
    const newUser = { vardas: req.body.name, id: generateID() }
    users.push(newUser);
    res.send(JSON.stringify(newUser));
});

app.get('/movies', (req, res) => {
    res.send(JSON.stringify(movies));
});