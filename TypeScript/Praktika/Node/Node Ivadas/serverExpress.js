
import express from 'express';
import { users, movies } from '../Node Ivadas 2/data.js';

const app = express();
app.use(express.json());

app.listen(5000, () => {
    console.log(`Serveris paleistas ant 5000 port'o`);
});

app.get('/users', (req, res) => {
    res.send(users);
});
app.get('/users/:id', (req, res) => {
    const foundUser = users.find(user => user.id === req.params.id);
    if(foundUser){
        res.send(foundUser);
    } else {
        res.status(400).send(`No user with id ${req.params.id}`);
    }
});
app.post('/users', (req, res) => {
    res.status(500).send(`Adding user is not possible yet.`);
});

app.get('/movies', (req, res) => {
    res.send(movies);
});
