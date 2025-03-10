const AugintinioKortele = ({info}) => {
    return ( 
        <div className="augintinioKortele">
            <h3>{info.rusis} - {info.vardas}</h3>
            <p>
                Mano augintinis yra {info.amzius > 5 ? 'senas' : 'jaunas'}, jam yra {info.amzius} metai.
            </p>
            <img 
            src={info.nuotrauka} 
            alt={`${info.rusis} - ${info.vardas}`} />
        </div>
     );
}
 
export default AugintinioKortele;