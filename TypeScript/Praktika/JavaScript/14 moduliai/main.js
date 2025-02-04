// import { capitalizeFirstLetter as CFL } from './modules/helperFunctions.js';
// import { randomColor } from './modules/helperFunctions.js';
// import { capitalizeFirstLetter as CFL, randomColor } from "./modules/helperFunctions.js";
// import RNT from "./modules/helperFunctions.js";

// console.log('------------')

// import RNT, { capitalizeFirstLetter as CFL, randomColor } from "./modules/helperFunctions.js";
import Heading2 from "./Heading3.js";
import Paragraph from "./Paragraph.js";
import Heading from "./Heading1.js";
import Image from "./Image.js";
import Card from "./Card.js";

// console.log(CFL('ne didzioji pirmoji')); // 'Ne didzioji pirmoji'
// console.log(randomColor()); // 'rgb(x,y,z)'
// console.log(RNT(10)); // 0 -> 10

const testSec = document.querySelector('testComponents');

// const heading0 = document.querySelector('h2');
// const headingText = document.createTextNode('Komponentų testavymas');
// heading0.appendChild(headingText);
// testSec.appendChild(heading0);
const heading0 = new Heading2('Komponentų testavimas');
testSec.appendChild(heading0);

// const par0 = document.createElement('p');
// const par2Text = document.createTextNode('Paragrafas apie kažką...');
// par2.appendChild(par2Text);
// testSec.appendChild(par2);

const par0 = new  Paragraph('Paragrafas apie kazka...');
testSec.appendChild(par0);

const par1 = new  Paragraph('Tekstas');
testSec.appendChild(par1);

const img = new Image({
    src: 'https://www.rspca.org.uk/documents/d/rspca/1167280-ginger-rescue-cat_3x2?imagePreview=1',
    alt: 'cat'
});

const card = new Card({
    title: 'Korteles pavadinimas',
    description: 'jhdhdh dhdd hdhdhuia hdauhd hddugud dhuajghd',
    image: {
        src: 'https://www.rspca.org.uk/documents/d/rspca/1167280-ginger-rescue-cat_3x2?imagePreview=1',
        alt: 'cat'
    }
});


