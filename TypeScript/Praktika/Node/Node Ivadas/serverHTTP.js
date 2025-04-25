
import { createServer } from 'node:http';
import { users, movies } from '../Node Ivadas 2/data.js';

const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", 'text/json');

    if(request.url === '/users'){
        response.write(JSON.stringify(users));
        response.end();
    } else if(request.url.match(/^\/users.*$/)){
        if(request.method === "GET"){
            const id = request.url.slice(7);
            const foundUser = users.find(user => user.id === id);
            if(foundUser){
                response.write(JSON.stringify(foundUser));
                response.end();
            } else {
                response.statusCode = 400;
                response.write(`No user with id ${id}`);
                response.end();
            }
        } else if(request.method === 'POST'){
            response.statusCode = 500;
            response.write(`Adding user is not possible yet`);
            response.end();
        }
    } else if(request.url === '/movies'){
        response.write(JSON.stringify(movies));
        response.end();
    }
});

server.listen(5000, 'localhost', () => {
    console.log(`Serveris paleistas ant 5000 port'o`);
});
