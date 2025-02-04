// 3) JS'u sukurkite x stulpelių ir y eilučių (x ir y nurodomas formoje) lentelę (table) vartotojui pateikus formą. (tik eilutes ir elementus eilutėse, nereikia tbody/thead/tfoot).

// document
//     .querySelector('#testForm')
//     .addEventListener('submit', (event) => {
//         event.preventDefault();
//         const ete = event.target.elements;

//         //x -> stulpeliai
//         //y -> eilutes

//         const table = document.createElement('table');
//         table.style.border = '3px solid black';
//         table.style.width = '100%';
//         table.style.height = '100%';
        
        
        // const td2 = document.createElement('td');


        
        // tr.appendChild(td2);

        // table.appendChild(tr);


        // for(let i = 0; i < ete.x.valueAsNumber; i++){
        //     //tr
        //     const tr = document.createElement('tr');
        //     for(let j = 0; j < ete.y.valueAsNumber; j++){
        //         //td
        //         const td1 = document.createElement('td');
        //         tr.appendChild(td1);
        //     }

        //     //table -> tr
        //     table.appendChild(tr);
        // }

        // document.body.appendChild(table);

        //console.log(ete.x.valueAsNumber);
// })

// 4+) Sukurkite formą su select ir option's. Pateikus formą - išimkite pažymėtą opciją iš select'o.

// document
//     .querySelector('#testForm2')
//     .addEventListener('submit', (event) => {
//         event.preventDefault();
//         console.log(event);
    
//         const petSelect = document.querySelector('#pet-select');
//         petSelect.options[petSelect.selectedIndex].remove();
// })

// 5++) Sukurkite formą, kurioje užpildžius x/y/z number laukelius ir pasirinkus atitinkamą opciją iš select'o apskaičiuokite 2D arba 3D (priklausomai ar z paliktas tušias/0 ar duotas dydis) keturkampio Plotą, Perimetrą, Paviršiaus plotą arba Turį.

document
    .querySelector('#testForm3')
    .addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event);
    
        const skaiciavimas = document.querySelector('#skaiciavimas');

        const ete = event.target.elements;

        if (skaiciavimas.selectedIndex === 1){
            alert('plotis: ' + ete.x.valueAsNumber * ete.y.valueAsNumber);
        } else if (skaiciavimas.selectedIndex === 2){
            if (ete.z.value === ''){
                alert('perimetras: ' + 2 * (ete.x.valueAsNumber + ete.y.valueAsNumber));
            } else {
                alert('perimetras: ' + 4 * (ete.x.valueAsNumber + ete.y.valueAsNumber + ete.z.valueAsNumber));
            }
        } else if (skaiciavimas.selectedIndex === 3){
            alert('pavirsiasu plotas: ' + 6 * ete.z.valueAsNumber * ete.z.valueAsNumber);
        } else if (skaiciavimas.selectedIndex === 4){
            alert('turis: ' + ete.z.valueAsNumber * ete.z.valueAsNumber * ete.z.valueAsNumber)
        }

        const canvas = document.createElement()
})







//5.1 EXTRA) Naudojant Canvas atkurti vizualų figurų vaizdą.
