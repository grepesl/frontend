import { useState } from "react";
import Heading from "./UI/Heading";

const UseStateSekcija = () => {
    
    let [skaicius, setSkaicius] = useState();
    const didinti = () => {
        skaicius(++skaicius);
    }
    const mazinti = () => {
        setSkaicius(--skaicius);
    }


    // const [] = useState(0);
    // console.log(grazina);

    // let skaicius = 0;

    // function didinti(){
    //     skaicius++
    // }
    // function mazinti(){
    //     skaicius--
    // }

    return ( 
        <section>
            <Heading
            size={2}
            text="useState Hook"
            />
            <p></p>
            <div>
        <button onClick={mazinti}>-</button>
        <span>{skaicius}</span>
        <button onClick={didinti}>+</button>
            </div>
        </section>
     );
}
 
export default UseStateSekcija;