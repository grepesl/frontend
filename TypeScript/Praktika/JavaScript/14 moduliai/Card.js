import Heading from "./Heading1.js";
import Image from "./Image.js";
import Paragraph from "./Paragraph.js";

class Card{
  constructor({ title, description, image }){
    this.title = title;
    this.description = description;
    this.image = image;

    return this.render();
  }
  render(){
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('kortele');

    const heading = new Heading('3', this.props.title);
    const par = new Paragraph(this.description);
    // const image = new Image({ src: this.image.src, alt: this.image.alt });
    const image = new Image(this.image);

    cardDiv.append(heading, par, image); // h1-6, p, img
    return cardDiv;
  }
}

export default Card;