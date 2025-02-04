import TableBodyRow from "./TableBodyRow.js";

// GET'iname visus kinoSeansai duomenis
// fetch(`http://localhost:3000/kinoSeansai`)
//     .then(res => res.json())
//     .then(data => console.log(data));

// import TableBodyRow from "./TableBodyRow";

// GET'iname vieną specifinį kinoSeansai duomenį pagal ID
// fetch(`http://localhost:3000/kinoSeansai/654`)
//     .then(res => {
//         // console.log('response:', res);
//         return res.json();
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// POST'iname vieną naują kinoSeansai duomenį
// fetch(`http://localhost:3000/kinoSeansai`, {
//     method: "POST",
//     headers:{
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       id: "654621",
//       pavadinimas: "Mufasa. Liūtas karalius",
//       laikas: "13:30",
//       sale: 10,
//       nuotrauka: "https://images.markus.live/media.forumcinemas.lt/1012/Event_13063/landscape_qhd/Mufasa1920x1080_3D.png"
//     })
//   }).then(res => res.json())
//     .then(data => console.log(data))

//redaguoti naudojant PATCH vieną specifinį duomenį pagal ID iš kinoseansai
// fetch(`http://localhost:3000/kinoSeansai/654621`, {
//     method: "PATCH",
//     headers:{
//         "Content-Type": "aplication/json"
//     },
//     body: JSON.stringify({
//         pavadinimas: "Liūtas Karalius"
//     })
// })
//     .then(res => res.json())
//     .then(data => console.log(data))

//redaguoti naudojant PUT vieną specifinį duomenį pagal ID iš kinoseansai
// fetch(`http://localhost:3000/kinoSeansai/654621`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "aplication/json"
//         },
//         body: JSON.stringify({
//             pavadinimas: "Liūtas Karalius"
//         })
//     }).then(res => res.json())
//       .then(data => console.log(data))


// trindi naudojant DELETE vieną specifinį duomenį ių kinoSeansai
// fetch(`http://localhost:3000/kinoSeansai/654621`, {
//     method: "DELETE"
// }).then(res => res.json())
//   .then(data => console.log(data))


//UZDUOTYS
fetch(`http://localhost:3000/users`)
.then(res => res.json())
.then(data => {
    console.log(data)
    const section = document.querySelector('#users');

    //from here
    const table = document.createElement('table');
    table.id = "userTable";
    table.classList.add('table');
    const tableHead = document.createElement('thead');
    const tableRow = document.createElement('tr');

    const theadId = document.createElement('th');
    theadId.textContent = 'id';
    const theadImg = document.createElement('th');
    theadImg.textContent = 'img';
    const theadName = document.createElement('th');
    theadName.textContent = 'name';
    const theadSurname = document.createElement('th');
    theadSurname.textContent = 'surname';
    const theadCity = document.createElement('th');
    theadCity.textContent = 'city';
    const theadFavColor = document.createElement('th');
    theadFavColor.textContent = 'fav_color';
    tableRow.append(theadId, theadImg, theadName, theadSurname, theadCity, theadFavColor);
    tableHead.appendChild(tableRow);
    //to here put in class

    table.appendChild(tableHead);

    const tableBody = document.createElement('tbody');
    data.forEach(user => {
        const fullName = user.name.split(' ');
        const row = new TableBodyRow([user.id, user.image, fullName[0], fullName[1], user.city, user.fav_color]);
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);

    section.appendChild(table);
})

document.querySelector('#isVip').addEventListener('change', (event) => {
    console.log(event);

    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
        const rows = document.querySelectorAll('#userTable tr');
        console.log(rows)

        rows.forEach((row, i) => {
            if(event.target.checked && i !== 0){
                const userId = row.cells[0].textContent;
                const isVip = users.find(user => user.id === userId && user.vip) !== undefined;
                console.log(row);
                row.style.display = isVip ? '' : 'none';
                console.log(isVip)
            } else {
                row.style.display = '';
            }
        });
    });
})

document.querySelector('#searchButton').addEventListener('click', () => {
    const searchText = document.querySelector('#searchBar').value.toLowerCase();
    console.log("Search Submitted:", searchText);

    const rows = document.querySelectorAll('#userTable tr');
    console.log(rows)

    rows.forEach((row, i) => {
        if(i !== 0){
            const userName = row.cells[2].textContent.toLowerCase();
            const userSurname = row.cells[3].textContent.toLowerCase();
            if(userName.includes(searchText) || userSurname.includes(searchText)){
                row.style.display = '';
            } else {
                row.style.display = 'none';
            } 
        }
    });
})

