import MovieForm from "./MovieForm.js";
import Heading from "./Heading.js";

class EditModal{
  constructor(props, movieCard){
    this.props = props;
    this.movieCard = movieCard;
    this.render();
  }
  render(){
    const modal = document.createElement('dialog');
    
    const heading = new Heading(3, 'Edit Form');

    const form = new MovieForm(this.props);
    form.addEventListener('submit', e => {
      e.preventDefault();
      const editedMovie = {
        title: e.target.elements.title.value,
        genres: e.target.elements.genres.value.split(', '),
        length: e.target.elements.length0.valueAsNumber,
        releaseDate: e.target.elements.releaseDate.value
      };
      // console.log(editedMovie);
      // console.log(e);
      // console.dir(this.movieCard);

      // redaguojame ekrane (gražiau būtų su funkcija perduota šiai klasei iš movie Klasės vietoj to, kad perduotas movieCard)
      this.movieCard.children[0].textContent = editedMovie.title;
      this.movieCard.children[1].textContent = `Genres: ${editedMovie.genres.join('; ')}`;
      const time = `${Math.floor(editedMovie.length/60)}h ${editedMovie.length%60}m`;
      this.movieCard.children[2].textContent = `Length: ${time}`;
      this.movieCard.children[3].textContent = `Released in: ${editedMovie.releaseDate}`;

      // siunčiame fetch užklausą tam, kad atnaujinti duomenis JSON'e
      fetch(`http://localhost:3000/movies/${this.props.id}`, {
        method: "PUT",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(editedMovie)
      });

      // triname lauk modalą iš ekrano
      modal.remove();
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel Edit';
    cancelButton.addEventListener('click', () => {
      modal.remove();
    });
    
    modal.append(heading, form, cancelButton);
    document.body.appendChild(modal);
    modal.showModal();
  }
}

export default EditModal;