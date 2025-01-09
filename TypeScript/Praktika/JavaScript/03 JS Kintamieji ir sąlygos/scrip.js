console.groupCollapsed('Masyvai ir Objektai');
console.groupCollapsed('Masyvų metodai')
    let miestai = ['Kaunas','Vilnius','Klaipėda','Tauragė','Utena','Šiauliai','Telšiai','Panevežys'];

    console.log(miestai);
    console.log(miestai[miestai.length-1]);
    console.log(miestai.pop());
    console.log(miestai);
    console.log(miestai.push('Alytus'));
    console.log(miestai);
    console.log(miestai.shift());
    console.log(miestai);
    console.log(miestai.unshift('Elektrėnai'));
    console.log(miestai);
    console.group();
// let laikinas = miestai[0];
// miestai[0] = miestai[1];
// miestai[1] = laikinas;
[miestai[0], miestai[1]] = [miestai[1], miestai[0]];
console.log(miestai);

console.groupCollapsed('Mandras kreipimasisi į masyvą');
    let masina = {
        metai: 2000,
        marke: "Audi",
        spalva: "juoda"
    };
    let masinosRaktai = (Object.keys(masina));
    let raktoVardas = 'metai';
    console.log(masinosRaktai);
    console.log(masina.metai); //2000
    console.log(masina['metai']); //2000
    console.log(masina[raktoVardas]); //2000
    console.log(masina[masinosRaktai[0]]); //2000
    console.log(`Objektas 'masina' turi tokius raktinius žodžius: ${masinosRaktai} ie vieno iš jų reikšmė yra: ${masina[masinosRaktai[0]]}. Pabandyk atsp4ti kuri :)`);
console.groupEnd();

console.groupCollapsed('Masyvų ir Objektų nestinimas');
    // Masyvų ir Objektų nestinimas

    //masyvo viduje objektai
    let masyvoVidujeObjektai = [
        {
            vardas: 'Rokas',
            amzius: 28
        }, {
            vardas: 'Petras',
            amzius: 35,
            dirba: true
        }, {
            vardas: 'Jonas',
            amzius: 10
        }
    ];
    console.log(masyvoVidujeObjektai); //3objektai
    console.log(masyvoVidujeObjektai[0].vardas); //'Rokas'
    console.log(masyvoVidujeObjektai[2].vardas); //'Jonas'

    //objekto viduje objektai
    let objektoVidujeObjektas = {
        vardas: "Rokas",
        pavarde: "Banaitis",
        amzius: 20,
        gyvenamojiVieta: {
            miestas: "Kaunas",
            gatve: "Karaliaus Mindaugo prospektas",
            namoNumeris: 28,
            butoNumeris: 5,
            salis: "Lietuva",
            kontinentas: "Europa"
        }
    };
    console.log(objektoVidujeObjektas);
    console.log(objektoVidujeObjektas.vardas); //"Rokas"
    console.log(objektoVidujeObjektas.gyvenamojiVieta.salis); //"Lietuva"

    let objektasVidujeMasyvo = {
        vardas: "Rokas",
        pavarde: "Banaitis",
        amzius: 28,
        pomegiai: ['sportas','zaidimai','laukas','keliones']
    };

    console.log(objektasVidujeMasyvo);
    console.log(objektasVidujeMasyvo.pomegiai); //['sportas','zaidimai','laukas','keliones']
    console.log(objektasVidujeMasyvo.pomegiai[0]); //'sportas'

    let masyvoVidujeMasyvai = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    console.log(masyvoVidujeMasyvai);
    console.log(masyvoVidujeMasyvai[0][0]); //1
    console.log(masyvoVidujeMasyvai[2][2]); //9
    console.log(masyvoVidujeMasyvai[1][0]); //4
console.group();
console.groupEnd();

//Sąlygos
//Switch
// let sezonas = 'Žiema';
// if(sezonas === 'Žiema'){
//     console.log('Gražu, nes pilna sniego ir slow mo avarijų :)');
// } else if (sezonas === 'Pavasaris'){
//     console.log('Žiedadulkės0');
// } else if (sezonas === 'Vasara'){
//     console.log('Uodai');
// } else if (sezonas === 'Ruduo'){
//     console.log('Krenta lapai auksniai ir leid=iasi tyliai...');
// } else {
//     console.log('Nurodytas neegzistuojantis sezonas')
// };

switch(sezonas){
    case 'Žiema':
        console.log('Gražu, nes pilna sniego ir slow mo avarijų :)');
        break;
        case 'Pavasaris':
        console.log('Žiedadulkės');
        break;
        case 'Vasara':
        console.log('Uodai');
        break;
        case 'Ruduo':
        console.log('Krenta lapai auksniai ir leid=iasi tyliai...');
        break;
        default:
        console.log('Nurodytas neegzistuojantis sezonas')
}

switch(car){
    case 'VW':
    case "Audi":
    case "Bentley":
    case "Bugatti":
    case "Lamborgini":
    case "Porsche":
        console.log('VW Group');
        break;
    case "BMW":
    case "Mini":
    case "Rolls-Royce":
        console.log('Group 2');
        break;
        default:
        console.log('Nei vienas');
}

//Ternary 
let amzius0 = 20;
if(amzius0 >= 18){
    console.log('Pilnametis');
} else {
    console.log('Vaikas')
}
amzius0 >= 18 ? console.log('Pilnametis') : console.log('Vaikas');
//Logical End 
let userRole = 'admin';
if(userRole === 'admin'){
    console.log('Mato extra dalykų.');
}
// userRole === 'admin' ? console.log('Mato extra dalykų.') : null;
userRole === 'admin' && console.log('Mato extra dalykų.');

//sąlygos nestinimas
let amzius1 = 15;
if(amzius1 < 18 && amzius1 >=0){
    console.log('Nėra pilnametis');
    if(amzius1 < 2){
        console.log('yra kūdikis');
    } else if(amzius1 < 7){
        console.log('Yra darželinukas');
    } else if(amzius1 < 14){
        console.log('Mokyklinukas');
    }
} 
else if (amzius1 > 65){
    console.log('Pensininkas');
} else if(amzius1 <= 18 && amzius < 65 ){
    console.log('Darbingo amžiaus žmogus');
} else{
    console.log('Netinkama įvestis')
}