/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

document
    .querySelector('#btn')
    .addEventListener('click', () => {
        fetch(`https://api.github.com/users`, {
            method: "GET"
        }).then(response => {
            return response.json();
        }).then(users => {
            
            for(let i = 0; i < users.length; i++){
                createCard(users[i].login, users[i].avatar_url);
            }
        })
        document.querySelector('#message').style.display = 'none';
    })

    const createCard = (username, photoUrl) => {
        const div = document.createElement('div');

        const img = document.createElement('img');
        img.src = photoUrl
        img.classList.add('photo');
        div.appendChild(img);

        const p = document.createElement('p');
        p.textContent = username;
        p.classList.add('name');
        div.appendChild(p);

        document.querySelector('#output').appendChild(div);
    }
