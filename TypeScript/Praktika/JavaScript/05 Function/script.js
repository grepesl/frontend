console.groupCollapsed('function basics');
//sudėties funkcija

console.log(5+1);
console.log(3+2);
console.log(100+32);

function sudetis(sk1, sk2){
    const suma = (sk1 + sk2);
    // console.log(suma)
    return suma;
}
const suma1 = sudetis(5,1);
const suma2 = sudetis(3,12);
const sumaBendra = sudetis(suma1, suma2);
console.log(sumaBendra);

console.groupEnd();

//DOM ir Event test

const sekcionTest = document.querySelector('#test');
const button = document.querySelector('#test > button');
console.dir(sekcionTest);
button.addEventListener('click', DOM_test);
function DOM_test(){
    console.log('paspaudei mygtuką');
    sekcionTest.children[0].style.color='red';
    sekcionTest.children[0].style.fontSize='60px';
    sekcionTest.children[0].className='redText bigText' //cia is CSS klasiu pav surasai ka nori kad pasikeistu sukurei
    sekcionTest.children[2].textContent=`Can't believe you've done...`;
    sekcionTest.innerHTML+=`<img src='URL' height='300px' width='auto'`;
}

console.group('Funkcijų praktika');

function greetUser(login){
    if (login == 'Employee') {
        return 'Hello';
    } else if (login == 'Director'){
        return 'Greetings'
    } else if (login == ''){
        return 'No login'
    } else {
        return ''
    }
}

const greetATS0 = greetUser('Director');
console.log(greetATS0);
console.log(greetUser(''));

console.log('------------');

function arIlgasVardas(vardas){
    if(vardas.lenght > 6){
        return `vardas ${Vardas} yra ilgas`;
    } else {
        return `Vardas ${Vardas} yra trumpas`;
    }
}
console.log(arIlgasVardas('Rokas'));
console.log(arIlgasVardas('Stanislovas'));
console.log(arIlgasVardas('Petras'));

console.log('------------');

function arDidesnisAmzius(amzius){
    if (amzius > 100 || amzius < 0){
        return 'Ivalid age'
    } else if (amzius < 18){
        return 'Child'
    } else if (amzius >= 18){
        return 'Adult'
    } else {
        return 'Please enter your age as a number'
    }
}
console.log(arDidesnisAmzius(10));
console.log(arDidesnisAmzius(101));
console.log(arDidesnisAmzius(30));
console.log(arDidesnisAmzius('Devyni'));

console.log('------------');

function vardoSpausdinimas(vardas, kartai){
    for(let i = 1; i < kartai; i++){
        console.log(i + '. ' + vardas);
    } 
}
vardoSpausdinimas('Rokas', 3);
vardoSpausdinimas('Petras', 2);
vardoSpausdinimas('Augustas', 5);

console.log('------------');

function spausdinti_nuo_iki(nuo, iki){
    console.log('nuo', nuo);
    console.log('iki', iki);
    for(let i = nuo; i <= iki; i++){
        console.log(i);
    }
}
spausdinti_nuo_iki(5,12);

//funkcija, kuri paduoto masyvo realiuosius skaičius paverčia į sveikuosius, sudeda į naują masyvą ir jį grąžina

const skMas0 = [5.4,654,47,1,56.1,4151.51,51,6.1,61,100,561.6,1.6,1.31,3.51,35.13,56.3,1,1,23,5698,12.3,12.8,125.23];
// constskMas1 = [];

function func1(mas){
    const atsakymas = [];
    for(let i = 0; i < mas.lenght; i++){
        // console.log(mas[i]);
        if(ma[i] % 1 !== 0){ //nera sveikasis skaicius
            atsakymas.push(Math.floor(mas[i]));  //math.floor suapvalinomi mazesne puse skaiciu po kablelio
        } else if(mas[i] % 1 === 0){ //yra sveikasis skaicius
            atsakymas.push(mas[i]);
        } else {
            console.log(`${mas[i]} neras skaiciusir nebuvo itrauktas i rezultatu masyva`)
        }
    }
    return atsakymas;
}
console.log(func1(skMas0));

console.groupEnd();
