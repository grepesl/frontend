// console.groupCollapsed();
//FETCH 

// console.log('prieš fetch') 

// const fetchISS = () => fetch(`https://api.wheretheiss.at/v1/satellites/25544`, {
//     method: "GET"
// }).then(response => {
//     console.log(response);  
//     return response.json();
// }).then(data => {
//     console.log(data);
//     document.querySelector('#lat').textContent = data.latitude.toFixed(3);
//     document.querySelector('#lon').textContent = data.longitude.toFixed(3);
// }).catch(err => {
//     console.log('error', err)
// }).finally((niekoNera) => {
//     console.log('finally', niekoNera);
// });
// fetchISS();
// document.querySelector('#refLoc').addEventListener('click', fetchISS);
// setInterval(fetchISS, 5000); // cia automatiskai info kiek laiko atsinaujina info

// console.log('po fetcho') ;

// console.groupEnd();

// const apartment = {
//     image: '',
//     city: 'Kunas',
//     price: 9999999, 
//     description: 'Labai cool'
// }

// fetch(`https://robust-safe-crafter.glitch.me/`, {
//     method: "POST",
//     headers: {
//         "Content-Type":"application/json"
//     },
//     body: JSON.stringify(apartment)
// }).then(res => res.json())
// .then(data => console.log(data));

// fetch(`https://robust-safe-crafter.glitch.me/`)
// .then(res => res.json())
// .then(data => console.log(data));



//LOKALUS FAILO GETINIMAS
// fetch(`./data.json`)
// .then(res => {
//     console.log(res);
//     return res.json();
// })
// .then(data => {
//     console.log(data);
// })

// fetch(`./data.json`, {
//     method: "POST",
//     headers: {
//         "Content-Type":"application/json"
//     },
//     body: JSON.stringify('hello')
// }).then(res => {
//     console.log(res);
// })

//UZDUOTYS CAO 21

//1)Įsivazduokite, kad dirbate prie pažinčių portalo produkto – jūsų užduotis greitai sukurti puslapį, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų puslapyje.

// Svarbu atvaizduoti:
// Nuotrauką
// Vardą 
// Amžių
// El. pašto adresą


// document.querySelector('#next').addEventListener('click', () => {
//     fetch(`https://randomuser.me/api/`, {
//         method: "GET"
// }).then(response => {  
//         return response.json();
// }).then(data => {
//     document.querySelector('#photo').src = data.results[0].picture.medium;
//     document.querySelector('#name').textContent = data.results[0].name.first;
//     document.querySelector('#age').textContent = data.results[0].dob.age;
//     document.querySelector('#gmail').textContent = data.results[0].email;
// }).catch(err => {
//     console.log("error", err);
// }).finally(() => {

// })
// });

//2)Naudojant https://party-wedding.glitch.me/v1/party – pasiimkite informaciją iš šio puslapio ir naudodami skirtingus array metodus, transformuokite duomenis bei išveskite true/false ekrane – ar "Kristupas Lapeika" yra VIP, ar ne?

const fetchWedding = () => {
    fetch('https://party-wedding.glitch.me/v1/party', {
        method: "GET"
    }).then(response => {
        console.log(response);
        return response.json();
    }).then(people => {
        console.log(people);
        const kristupas = people.find(person => person.name === 'Kristupas Lapeika');
        document.querySelector('#name2').textContent = kristupas.name;
        document.querySelector('#vip').textContent = kristupas.VIP;
    }).catch(err => {
        console.log("error", err);
    }).finally(() => {
    
    });
}
fetchWedding();

//3)Įsivaizduokite, kad organizuojate vestuves. Pasiimkite informaciją iš https://party-wedding.glitch.me/v1/wedding ir atvaizduokite lentelėje: name, plusOne ir attending. Parašykite taip, kad plusOne ir attending būtų ne true/false, bet + arba -.

