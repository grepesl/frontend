import Heading from "./UI/Heading"

const KintanciuKomponentuSekcija = () => {
    return (
        <section>
            {/* <h2>Kintantys komponentai</h2> */}
            {/* <Heading
            text='Labas rytas'
            size={2}
            />
            <Heading 
            text='Skanios arbatytes'
            size={3}
            /> */}
            <Heading
            text="Komponentas"
            size={2}
            />
            <p>
                Kazkoks JS failas, kuris grazina HTML koda.
            </p>
            <Heading
            text="Kintantys Komponentai"
            size={2}
            />
            <p>
                Komponentai kurie gali priimti kazkokius props (informacija/parametrai/ atributai), ir grazinti HTML koda, kuriame atvaizduojama susijusi info susisjusi su tais props<br />
                Komponento return galima rasyti ternary salyga, kuri esant vienam ar kitam atvejui grazina atitinkama HTML'a
            </p>
            <Heading
            size={2}
            text="Komponentu stilizavimas (basic)"
            />
            <p>
                Norint stilizuoti inline budu tag'ui reikia syteikti style atributa ir jo reiksmes isvardinti objekte kur stiliu pavadinimai aprasyti camelCase principu (kaip kad node.style viduje(JS)) {`<`} &lt; variables &gt;{`>`} {`{`} &#123; curly braces &#125; {`}`}<br />
                Norint suteikti klase - viskas tas pats kaip iprastai  - nueini i koki nors CSS (siulau app.css) jame aprasai klase ir tuomet ta klase suteiki elementui JSX'e BET vietoj atributo "class NEPABAIGTA RASYT"
            </p>
            <Heading
            size={3}
            text="Komponentu generavimas iteruojant"
            />
            <p>
                Iteruojant per duomen masyva ir po viena reiksme perduodant i kazkoki komponentta, reiketu tuo paciu perduoti ir "key" kuris butu unikalus kiekvienos iteracijos metu (key reikalingas paciam Rect'ui mes su juo nieko neveikiamas)<br />
                Iteruojame naudodami map metoda (pries tai gali prafiltruoti su filtru)
            </p>
        </section>
    )
}