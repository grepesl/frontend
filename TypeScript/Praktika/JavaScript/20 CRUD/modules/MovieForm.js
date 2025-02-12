import InputField from "./InputField.js";

class MovieForm{
  constructor(props){
    this.props = props;
    return this.render();
  }
  render(){
    const form = document.createElement('form');

    const titleField = new InputField({
      inputId: 'title',
      labelText: 'Title:',
      inputType: 'text',
      inputPlaceholder: 'Name of the movie...',
      inputValue: this.props.title
    });

    const genresField = new InputField({
      inputId: 'genres',
      labelText: 'Genres:',
      inputType: 'text',
      inputPlaceholder: 'genre1, genre2, genre3...',
      inputValue: this.props.genres.join(', ')
    });

    const lengthField = new InputField({
      inputId: 'length0',
      labelText: 'Length minutes:',
      inputType: 'number',
      inputValue: this.props.length
    });

    const releaseField = new InputField({
      inputId: 'releaseDate',
      labelText: 'Release Date:',
      inputType: 'date',
      inputValue: this.props.releaseDate
    });

    const submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit');
    submitInput.setAttribute('value', 'Complete Edit');


    form.append(titleField, genresField, lengthField, releaseField, submitInput);
    return form;
  }
}

export default MovieForm;