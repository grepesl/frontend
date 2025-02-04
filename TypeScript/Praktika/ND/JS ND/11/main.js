//DOM

// //1)Susikurkite projektą be jokių HTML elementų <body> viduje. 
// Sukurkite funkciją createTextElement, kuri sukuria ir grąžina naują DOM elementą p su pateiktu tekstu  ir pridėkite į <body>.

// function createParagraph(text)
// {
//     const paragraph = document.createElement('p');
//     paragraph.textContent = text;
//     return paragraph;
// }

// document.body.appendChild(createParagraph('Šiandien labai graži diena'));

//2)Sukurkite HTML faile <h1> žymą su id="name" ir tekstu "unknown". Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .

// const nameSelector = document.querySelector('#name');

// nameSelector.textContent = `Greta`;

//3)Nusikopijuokite apačioje esantį kodą ir su JavaScript pasikeiskite antrame paragrafe esančio <span> tekstą - iš 'red' į 'blue':

// console.log(document.querySelector('.bluetext > span')); 

// document.querySelector('.bluetext > span').textContent = 'blue';

//4) Naudodami JavaScript apkeiskite pirmus du sąrašo elementus vietomis. Tačiau, kabliukas - negalima JavaScript įrašyti teksto (kitaip tariant hard-codinti). Pirma, Jūs turite pasiimt pirmo ir antro sąrašo elemento reikšmes ir jas išsisaugoti į kintamuosius.

// const firstELement = document.querySelector('ol > li:first-child');
// console.log(firstELement)
// const secondElement = document.querySelector('ol > li:nth-child(2)');
// console.log(secondElement)

// const temporal = firstELement
// firstELement.outerHTML = secondElement.outerHTML;
// secondElement.outerHTML = temporal.outerHTML;

//5)Sukurkite funkciją createList, kuri priima masyvą su tekstu ir sukuria DOM ul elementą su li vaikais, atitinkančiais masyvo elementus.

// const masyvas = ["Pienas", "Duona", "Kiaušiniai"];

// const createList = (masyvas) => {
//     const unorderdList = document.createElement('ul');
//     masyvas.forEach(product => {
//         const listItem = document.createElement('li');
//         listItem.textContent = product;
//         unorderdList.appendChild(listItem);
//     })
//     return unorderdList
// } 

// document.body.appendChild(createList(masyvas));

//6)Jūs turite HTML dokumentą su 3x3 Tic-Tac-Toe žaidimo dydžio lentelę. Kiekvienas lentelės langelis (<td>) turi būti pažymėtas arba "X", arba "O". Sukurkite JavaScript funkciją highlightWinner, kuri patikrina, ar yra trys vienodi ženklai iš eilės (eilutėje, stulpelyje arba įstrižainėje) ir, jei taip, nuspalvina atitinkamas lentelės eilutę, stulpelį, arba įstrižainę.

// const tableData = document.querySelectorAll('#tictactoe td');

// console.log(document.querySelectorAll('td'))
// console.log(tableData[0].innerText)

// function CheckIfAllEqual(sign, val1, val2, val3) {
//     return val1 === sign && val2 === sign && val3 === sign
// }

// if (
    
// CheckIfAllEqual('X', tableData[0].innerText, tableData[1].innerText, tableData[2].innerText) || 
// CheckIfAllEqual('O', tableData[0].innerText, tableData[1].innerText, tableData[2].innerText)) {
//     tableData[row].cells[col].style.backgroundColor = 'lightgreen';
// }

{
    // tic tac toe
  
    const table = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    let turn = 1;
    let isWinner = false;
  
    document
    .querySelectorAll('#ticTacToe td')
    .forEach(td => td.addEventListener('click', () => {
      if(!isWinner && td.textContent === ''){
        if(turn % 2 === 1){
          td.textContent = 'O';
          table[td.id.charAt(1)][td.id.charAt(2)] = 'O';
        } else {
          td.textContent = 'X';
          table[td.id.charAt(1)][td.id.charAt(2)] = 'X';
        }
        turn++;
        isWinner = winCondition(table);
        if(isWinner){
          document.querySelector('#ticTacToe > p').textContent = `Laimėjo: ${isWinner.winner}`;
          isWinner.winningCondition.forEach(winSquare => {
            console.log(winSquare);
            document.querySelector(`td#_${winSquare}`).style.backgroundColor = 'green';
          })
        }
      }
    }));
  
    function winCondition(arr){
      const winConditions = [
        ['00','01','02'],
        ['10','11','12'],
        ['20','21','22'],
        ['00','10','20'],
        ['01','11','21'],
        ['02','12','22'],
        ['00','11','22'],
        ['02','11','20']
      ];
      const returnObj = {
        winner: '',
        winningCondition: []
      }
      winConditions.forEach(cond => {
        if(arr[cond[0].charAt(0)][cond[0].charAt(1)] !== null &&
           arr[cond[0].charAt(0)][cond[0].charAt(1)] === arr[cond[1].charAt(0)][cond[1].charAt(1)] &&
           arr[cond[0].charAt(0)][cond[0].charAt(1)] === arr[cond[2].charAt(0)][cond[2].charAt(1)]
          ){
          console.log(`Laimėjo:`, arr[cond[0].charAt(0)][cond[0].charAt(1)]);
          returnObj.winner = arr[cond[0].charAt(0)][cond[0].charAt(1)];
          returnObj.winningCondition = cond;
        }
      });
      if(returnObj.winner){
        return returnObj;
      } else {
        return false;
      }
    }
  }

//EVENTS
//1)Padarykite, kad paspaudus ant mygtuko išoktų alert su jūsų vardu! (naudoti inline metoda: onclick="")

//2)Perrašyti pirmą pratimą su addEventListener (ir nuo šiol naudoti būtent jį 😊 ).

// document.querySelector('button').addEventListener('click', () => {
//   alert('Greta');
// });

//3)Padaryti, kad paspaudus ant mygtuko, po apačia atsirastų paragrafe tekstas apie jus.

// document.querySelector('button');

// document.querySelector('button').addEventListener('click', () => {
//     const par = document.createElement('p');
//     par.textContent = 'Aš mėgstu kates';
//     document.body.appendChild(par);
// })

//4)Sukurkite programą, kurioje bus h1 tekstas su skaičiumi ir mygtukas. Paspaudus ant mygtuko, skaičius padidėja +1.

// let count = 1;
// const plusOne = document.querySelector('button').addEventListener
// ('click', () => {
//     count++;
//     document.querySelector('#counter').innerText = `${count}`;
// })

//5)Sukurkite programą, kurioje ilgas paragrafas. Bandant kopijuoti kodą – išmeta, kad negalima kopijuoti.
// document.querySelector('#counter').addEventListener
// ('copy', (event) => {
//     event.preventDefault();
//     console.log(event)
// })

//6)Sukurkite programą, kur paspaudus ant mygtuko – sugeneruoja random skaičių nuo 1 iki 100 ir jį išveda kaip h1 tekstą.

// document.querySelector('button').addEventListener('click', () => {
//       const heading = document.createElement('h1');
//       heading.innerText = `${Math.floor(Math.random() * 100)}`
//       document.body.appendChild(heading);
// })

//7)Sukurkite programą, kurioje du mygtukai – Turiu bent 18 metų ir Mažiau nei 18 metų. Jei paspaudžia ant pirmo mygtuko – išmeta h1 tekstą Alus. Jei antrą paspaudžia – išmeta alert su nepilnametis - nieko neturim.

// document.querySelector('#is18').addEventListener('click', () => {
//     const heading = document.createElement('h1');
//     heading.textContent = 'Alus';
//     document.body.appendChild(heading);
// })

// document.querySelector('#underage').addEventListener('click', () =>{
//     alert('Nepilnametis - nieko neturim')
// })

//8)Sukurkite programą, kuri sugeneruoja random skaičių nuo 1 iki 3, kai tik užsikrauna puslapis. Vartotojas skaičiaus nemato (bet jūs pasiconsole’inkite). Ekrane – trys mygtukai (1, 2, 3). Vartotojas turi spėti koks random skaičius susigeneravo. Jei atspėja – iššoka alert("Yay"), jei ne – alert("Nay").




//besikartojantys vardai
// {
//    document
//    .querySelector('#besikatrojantysVardai > form')
//    .addEventListener('submit', e => {
//         console.log(e)
//         e.preventDefault();
//         const vardas = e.target.elements.vardas.value;
//         console.log(e.target.elements.kiekis.value)

//         const kiekis = e.target.elements.kiekis.value;

//         for(let i = 1; i <= kiekis; i++){
//             const par = document.createElement('p');
//             par.textContent = vardas.repeat(i);
//             par.style.margin = 0;
//             e.target.nextElementSibling.appendChild(par);

//             console.log(i)
//         }

//         e.target.reset();
//    });
// }

//FIZZBUZZ

// {
//     document
//     .querySelector('#fizzBuzz > form')
//     .addEventListener('submit', e => {
//       e.preventDefault();
  
//       const from = e.target.elements.from.valueAsNumber;
//       const to = e.target.elements.to.valueAsNumber;
  
//       const div = document.querySelector('#fizzBuzz > div');
//       div.innerHTML = '';
//       for(let i = from; i <= to; i++){
//         const par = document.createElement('p');
//         if(i % (3*5) === 0){
//           par.textContent = 'Fizz Buzz';
//         } else if(i % 3 === 0){
//           par.textContent = 'Fizz';
//         } else if(i % 5 === 0){
//           par.textContent = 'Buzz';
//         } else {
//           par.textContent = i;
//         }
//         div.appendChild(par);
//       }
  
//       e.target.reset();
//     });
  
//     const from = document.querySelector('#from');
//     const to = document.querySelector('#to');
    
//     from.addEventListener('change', e => {
//       to.setAttribute('min', e.target.valueAsNumber);
//     });
//     to.addEventListener('change', e => {
//       from.setAttribute('max', e.target.valueAsNumber);
//     });
//   }




