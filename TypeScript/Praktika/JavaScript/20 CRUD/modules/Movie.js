import Heading from './Heading.js';
import Paragraph from './Paragraph.js';
import EditModal from './EditModal.js';

class Movie{
  constructor(props, app){
    this.props = props;
    this.app = app;
    this.render();
  }
  render(){
    // console.log(this.props, this.app);
    
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('movieCard');

    const title = new Heading(3, this.props.title);
    const genres = new Paragraph(`Genres: ${this.props.genres.join('; ')}`);
    const time = `${Math.floor(this.props.length/60)}h ${this.props.length%60}m`;
    const length = new Paragraph(`Length: ${time}`);
    const release = new Paragraph(`Released in: ${this.props.releaseDate}`);

    const editButton = document.createElement('button');
    editButton.classList.add('editButton');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      new EditModal(this.props, cardDiv);
    });

    cardDiv.append(title, genres, length, release, editButton);
    this.app.appendChild(cardDiv);
  }
}

export default Movie;