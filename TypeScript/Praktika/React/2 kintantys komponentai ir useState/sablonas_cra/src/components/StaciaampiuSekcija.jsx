import Staciakampis from "./UI/Staciakampis";

const StaciakampiuSekcija = () => {
    return ( 
        <section
        id="nesvarbu"
        className="staciakampiuKonteineris"
        >
            {/* <div
            style={{
                height: 100,
                width: 200,
                backgroundColor: "orange"
            }}
            ></div>
            <div
            style={{
                height: 200,
                width: 200,
                backgroundColor: "black"
            }}
            ></div>
                        <div
            style={{
                height: 50,
                width: 150,
                backgroundColor: "red"
            }}
            ></div> */}
            <Staciakampis
            height={150}
            width={200}
            bgColor="black"
            />
            <Staciakampis
            height={200}
            width={200}
            bgColor="orange"
            />
        </section>
     );
}
 
export default StaciakampiuSekcija;