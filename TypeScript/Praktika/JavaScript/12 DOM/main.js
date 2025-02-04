// {
//     // su inner HTML
    // const testSec0 = document.querySelector('suInnerHTML');
    // testSec0.innerHTML += `
    // <h3>Testuojamės innerHTML<h3>
    // <p>Easy, bet nelabai naudinga:</p>
    // <img src="https://i.pinimg.com/736x/15/e9/dc/15e9dc50cd363b19e572bbe7ccf87423.jpg" alt="cat class="mediumImage""
    // `;
// }
{
    //su createElement ir kitais metodais
    const testSec = document.querySelector('#suCreateElements');
    const heading = document.createElement('h3');
    heading.textContent = 'Testuojamės su createElement';
    testSec.appendChild(heading);
    const par = document.createElement('p');
    const parText = document.createTextNode('Ne taip lengva, ne taip greita, bet daug naudingiau, kad ir taip kol kas neatrodo');
    par.appendChild(parText);
    testSec.appendChild(par);
    const image = document.createElement('img');
    image.src = `https://i.pinimg.com/736x/15/e9/dc/15e9dc50cd363b19e572bbe7ccf87423.jpg`;
    image.setAttribute('alt', 'cat');
    image.classList.add('mediumImage');
    testSec.appendChild(image);
}

{
    //koretele su Event
    const cardSelection = document.querySelector('#cardSection');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('infoCardPortrait')
    cardDiv.addEventListener('dblclick', () => {
        if(cardDiv.classList.contains('infoCardPortrait')){
    cardDiv.classList.remove('infoCardPortrait');
    cardDiv.classList.add('infoCardLandScape');
        } else {
            cardDiv.classList.remove('infoCardPortrait')
            cardDiv.classList.add('infoCardLandScape');
        }
    })

    const heading = document.createElement('h3');
    heading.textContent = 'Cats history';

    const par = document.createElement('p');
    par.textContent = `The cat (Felis catus), also referred to as the domestic cat, is a small domesticated carnivorous mammal.`;

    const image = document.createElement('img');
    image.setAttribute('src', 'https://i.pinimg.com/736x/15/e9/dc/15e9dc50cd363b19e572bbe7ccf87423.jpg');
    image.setAttribute('alt', 'cats');

    cardDiv.append(heading, image, par);
    cardSelection.appendChild(cardDiv);
}

{
    const listSec = document.querySelector('#sarasas');
    console.log(listSec);

    // const list = document.createElement('ol');
    // for (let i = 0; i < 10; i++) {
    //     const li = document.createElement('li');
    //     li.textContent = `Labas :)`;
    //     list.appendChild(li);
    // }
    // listSec.appendChild(list);

    const pirkiniai = ['malta mėsa', 'vanduo', 'svogunai', 'cesnakai', 'padazas', 'makaronai', 'avizos', 'cukrus', 'medus', 'mesiukas', 'sumustiniu bulkos', 'kola', 'alus', 'cipsai', ' vistiena', 'ryziai', 'bulves', 'ridikeliai', 'paprika', 'karbonadai'];

    const unorderedList = document.createElement('ul');
    pirkiniai.forEach( pirkinys => {
        const listItem = document.createElement('li');
        listItem.textContent = pirkinys;
        unorderedList.appendChild(listItem);

    });
    // console.log(unorderedList);
    // console.log(listSec);
    listSec.appendChild(unorderedList);
}