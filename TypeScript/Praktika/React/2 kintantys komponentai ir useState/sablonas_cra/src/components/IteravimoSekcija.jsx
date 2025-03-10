import AugintinioKortele from "./UI/AugintinioKortele";
import Heading from "./UI/Heading";

const IteravimoSekcija = () => {
    
    const duomensObjektas = {
        vardas: "Reksas",
        rusis: "suo",
        amzius: 6,
        nuotrauka: "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100"
    }
    
    const augintiniuMasyvas = [{
        vardas: "Reksas",
        rusis: "suo",
        amzius: 6,
        nuotrauka: "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100"
    },{
        vardas: "Mikas",
        rusis: "suo",
        amzius: 8,
        nuotrauka: "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100"
    },{
        vardas: "Kaulas",
        rusis: "suo",
        amzius: 2,
        nuotrauka: "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100"
    }]

    return ( 
        <section>
            <Heading
            size={2}
            text="Komponentu iteravimas react'e"
            />
            <div className="augintiniuKonteineris">
                {/* <AugintinioKortele
                info={augintinis}
                /> */}
                {
                    augintiniuMasyvas.map((augintinis, i) =>
                        <AugintinioKortele
                        info={augintinis}
                        key={i}
                        />
                    )
                }
            </div>
        </section>
     );
}
 
export default IteravimoSekcija;