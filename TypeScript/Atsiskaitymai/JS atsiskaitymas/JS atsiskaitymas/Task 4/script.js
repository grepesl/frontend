/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

fetch(`http://localhost:3000/cars`, {
    meyhod: "GET"
}).then(response => {
    return response.json();
}).then(cars => {
    for(let i = 0; i < cars.length; i++){
        createCard(cars[i].brand, cars[i].models);
    }
})

const createCard = (brand, models) => {
    const div = document.createElement('div');

    const p = document.createElement('p');
    p.textContent = brand;
    p.classList.add('brand');
    div.appendChild(p);

    const ul = document.createElement('ul');
    ul.classList.add('models');

    for(let i = 0; i < models.length; i++){
        let li = document.createElement('li');
        li.textContent = models[i];
        ul.appendChild(li);
    }

    div.appendChild(ul);

    document.querySelector('#output').appendChild(div);
};