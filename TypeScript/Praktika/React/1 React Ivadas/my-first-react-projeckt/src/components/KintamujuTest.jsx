const KintamujuTest = () => {
    const randomSk0 = Math.random();
    const randomSk2 = randomSk(10);
    const zodis = 'labas rytas';
    return ( 
        <section>
            <h2>Kintamuju panaudojamas React</h2>
            <p>Random skaičius0: {randomSk0}</p>
            <p>Random skaičius1: {Math.random()}</p>
            <p>Random skaičius2: {randomSk2}</p>
            <p>Random skaičius3: {randomSk(100)}</p>
            <p>Dauginant {randomSk0} ir {randomSk2} gausime {randomSk0*randomSk2}</p>
            {/* <p>Dauginant {Math.random()} ir {randomSk(100)} gausime {Math.random()*randomSk(100)}</p> NEGALIMAS */}
            <p>{zodis}</p>
            <p>{zodis.toUpperCase}</p>
        </section>
     );
}

function randomSk(iki) {
    return Math.ceil(Math.random()*iki);
}
 
export default KintamujuTest;