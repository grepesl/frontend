const AboutSection = () => {
    return ( 
        <section id='about'>
        <h2>About React</h2>
        <div>
          <h3>Kas yra React</h3>
          <p>
            React yra šiuo metu populiaraisuias JS freamework'as / biblioteka
          </p>
        </div>
        <div>
          <h3>Kokia yra React nauda?</h3>
          <ul>
            <li>Labai patogu, lengva ir greita kurti svetaines/aplikacijas</li>
            <li>Automatinis kintančios informacijos pervaizdavimas</li>
            <li>Labai didelė bendruomenė. Daug informacijos ir papildomų bibliotekų internete</li>
            <li>Daug patogiau kurti ir pernaudoti komponentus (lyginant su JS)</li>
            <li>Galima kurti ne tik svetaines, bet ir mobiliąsias aplikacijas</li>
            <li>Kuriamos aplikacijos yra one-page'ai(tam, kad atvaizduotų kitą "puslapį" nereikia per naują kreiptis į serverį)</li>
            <li>...</li>
          </ul>
        </div>
        <div>
          <h3>Extra info</h3>
        </div>
      </section>
     );
}
 
export default AboutSection;