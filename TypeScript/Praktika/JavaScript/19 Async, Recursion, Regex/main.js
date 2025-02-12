// setTimeout 

setTimeout(() => {
    console.log('1')
    setTimeout(() => {
        console.log('2')
    }, 2000);
}, 1000);

// Promise (resolve)

function pazadasBasic(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Grąžinau atsakymą po kažkiek laiko')
        }, 1000); // 1000*60*60 = 3_600_000 - viena valanda
    });
}

// const atsaymasIsKarto0 = pazadasBasic();
// console.log('asdas'+ atsaymasIsKarto0); //'Grąžinau atsakymą po kažkiek laiko'

// const atsaymasPoLaiko0 = pazadasBasic().then(atsakymas => {return atsakymas});
// console.log(atsaymasPoLaiko0);
pazadasBasic().then(atsakymas => {console.log(atsakymas)});

//Promise normal

function pazadasNormal(time, data){
    return new Promise((resolve, reject) => {
        if(typeof(time) !== 'number'){
            reject(`Error: ${time} must be a number`);
        } else if(time < 0 || time > 10000) {
            reject(`Error: ${time} must be between 0 and 10000`)
        } else {
            setTimeout(() => {
                resolve(`${data} with some changes or w/e`)
            }, time)
        }
    }); 
}

// pazadasNormal('3000', 'hello')
//     .then(atsakymas => console.log('Sėkmė:', atsakymas))
//     .catch(erroras => console.log('Klaida:', erroras))
//     .finally(() => console.log('Pagaliau baigesi...'))

//Async funkcija

    (async() => {
        try{
            const pazadoAtsakymas = await pazadasNormal('3000', 'hello');
            console.log('Sekme:', pazadoAtsakymas);
        } catch(err){
            console.log('Klaida:', err)
        } finally{
            console.log('Pagaliau baigesi...')
        }
    })();

// Recursion 

const grazinkDideliSkaiciu = (sk, iteration = 1) => {
    const randomSk = Math.ceil(Math.random()*sk)*2;
    iteration++;
    if(randomSk > 1_000){
        return{
            skaicius: randomSk,
            itereracija: iteration
        }
    } else {
        return grazinkDideliSkaiciu(randomSk, iteration);
    }
}

console.log(grazinkDideliSkaiciu(5));
console.timeEnd();

// Be recusrion
let sk = 5;
let iteration = 1;
while(sk <= 1_000){
    sk = Math.ceil(Math.random()*sk)*2;
    iteration++
}
console.log('ciklas', {
    skaicius: sk,
    itereracija: iteration
});
console.timeEnd()

// RegularExpression

const string = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, deserunt? Placeat soluta voluptates, nobis, nihil molestias reprehenderit quam facilis atque quos nesciunt distinctio unde exercitationem sequi voluptate, rem libero. Architecto, similique velit, saepe labore corrupti nemo obcaecati nulla quas quia harum incidunt nam omnis consequuntur distinctio excepturi laboriosam qui quod.`

const reg0 = /([A-Z])\w*/g;
const matchedReg0 = string.match(reg0);
console.log(matchedReg0);

const regPass = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?#&])[A-Za-z0-9@$!%*#?&]{8,}$");
console.dir(regPass)
console.log(regPass.test('ArTinkaToksPass?')); // false
console.log(regPass.test('ArTinkaToksPass?'));

const checkPassword = (password) => {
    // return password.match(regPass);
    return regPass.test(password);
}

console.log(checkPassword('Silpnas')) // false
console.log(checkPassword('Stiprus')) // false
console.log(checkPassword('St1prus?')) // true
console.log(checkPassword('St1pr?')) //false