//1)Parašykite funkciją setNotification, kuri priima tekstą ir išsaugo jį į Local Storage naudojant raktą "notification".

// Naudojimas:
// setNotification("Labas pasauli!");

// const setNotification = (text) => {
//     window.localStorage.setItem('notification', text)
// }
// setNotification("Labas pasauli!");

//2)Sukurkite funkciją getNotification, kuri grąžina pranešimą išsaugotą Local Storage naudojant raktą "notification". Gautą pranešimą atvaizduokite vartotojui, pvz. naudojant alert().

// const getNotification = () => {
//     alert(window.localStorage.getItem('notification'));
// }

// getNotification();

//3)Sukurkite internetinį puslapį, kuriame būtų galima saugoti užduočių/darbų sąrašą. Puslapyje vartotojai galės pridėti ir pašalinti atliktas užduotus. Užduotys turėtų būti saugomos ir užkraunamos iš naršyklės.

// Funkcionalumas:

// 1Įvedimo laukas naujoms užduotims pridėti.
// 2Sąrašas užduočių atvaizdavimui su galimybėmis pažymėti užduotis kaip atliktas arba jas ištrinti.
// 3Išsaugoti užduotis naršyklėje, kad jos išliktų net perkrovus puslapį.


document
.querySelector('#testForm')
.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(event)
    const ete = event.target.elements;

    if (ete.inputText.value === "") return; 

    let container = document.querySelector("#checkboxList");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    console.log(ete.inputText.value)

    let label = document.createElement("label");
    label.appendChild(document.createTextNode(" " + ete.inputText.value));

    let div = document.createElement("div");
    div.appendChild(checkbox);
    div.appendChild(label);

    container.appendChild(div);

    ete.inputText.value = ''
})