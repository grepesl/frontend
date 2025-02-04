// document.getElementById('idName'); // vienas node elementas su nurodytu ID (jeigu surado)
// document.getElementsByClassName('className'); // masyvą su node elementais (net jeigu buvo rastas tik vienas)
// document.querySelector('CSS_SELECTOR'); // pirmasis node elementas rastas pagal nurodytą selektorių
// document.querySelectorAll('CSS_SELECTOR'); // visi (masyvas) node elementai rasti pagal nurodytą selektorių

// node - HTML elementas JS'o aplinkoje

// const testForma = document.querySelector('#testForm');
// console.dir(testForma);
// testForma.addEventListener('submit', (event) => {

//FormEventArgs (args -> arguments)
// //asdasd


document
    .querySelector('#testForm')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      console.log('Forma pateikta');
      console.log(event);
      // iš formos paimtos vardo/nuotraukos/dob/amziaus... reikšmės
    
      // BLOGAI, nes formos įvesčių vietos gali keistis arba atsirasti naujų įvesčių viduryje formos...
      // const vardas = event.target[0].value; 
      // const nuotrauka = event.target[1].value;
      // const dob = event.target[2].value;
      // const amzius = event.target[3].valueAsNumber;
    
      // nėra gerai, nes pastoviai per naują kreipiamasi į dokumentą (HTML'ą)
      // const vardas = document.querySelector('#vardas').value;
      // const nuotrauka = document.querySelector('#nuotrauka').value;
      // const dob = document.querySelector('#dob').value;
      // const amzius = document.querySelector('#amzius').valueAsNumber;
    
      // geras būdas, nes nevarbu eiliškumas ir nėra daug sykių kreipiamasi į HTML'ą
      // const vardas = event.target.elements.vardas.value;
      // const nuotrauka = event.target.elements.nuotrauka.value;
      // const dob = event.target.elements.dob.value;
      // const amzius = event.target.elements.amzius.valueAsNumber;
      // const lytis = event.target.elements.lytis.value;
      // const pomegiai = [];
      // event.target.elements.pomegiai.forEach( pomegis => {
      //   pomegis.checked ? pomegiai.push(pomegis.value) : null
      // });
      // // const pomegiai = [...event.target.elements.pomegiai].filter(pomegis => pomegis.checked).map(pomegis => pomegis.value);
      // const miestas = event.target.elements.miestas.value;
      // console.log(vardas, nuotrauka, dob, amzius, lytis, pomegiai, miestas);
    
      // galima sutrumpinti event.target.elements ir naudoti trumpinį
      const ete = event.target.elements;
      // galima vietoj to, kad turėti daug atskirų kintamųjų - juos visus patalpinti objekte
      const asmensInfo = {
        vardas: ete.vardas.value,
        nuotrauka: ete.nuotrauka.value,
        dob: ete.dob.value,
        amzius: ete.amzius.valueAsNumber,
        lytis: ete.lytis.value,
        // pomegiai: [],
        pomegiai: [...ete.pomegiai].filter(pomegis => pomegis.checked).map(pomegis => pomegis.value), //masyvas stringu pavadinimu[]
        miestas: ete.miestas.value
      }
      // ete.pomegiai.forEach(pomegis => {
      //   pomegis.checked ? asmensInfo.pomegiai.push(pomegis.value) : null
      // });
      console.log(asmensInfo);
    });
    
    document
    .querySelector('#calculator')
    .addEventListener('submit', e => {
      e.preventDefault();
      console.log(e);
      console.log(e.target.elements);
      const nr1 = e.target.elements.nr1.valueAsNumber;
      const nr2 = e.target.elements.nr2.valueAsNumber;
      const answer = nr1 + nr2;
      console.log(answer);
      console.log(e.target.nextElementSibling);
      e.target.nextElementSibling.innerHTML += `Sum of ${nr1} and ${nr2} is ${answer}.<br>`;
      e.target.reset();
    });