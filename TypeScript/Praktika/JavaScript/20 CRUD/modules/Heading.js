class Heading{
    constructor(size, text){
      this.size = size;
      this.text = text;
      return this.render();
    }
    render(){
      const heading = document.createElement(`h${this.size}`);
      const headingText = document.createTextNode(this.text);
      heading.appendChild(headingText);
  
      return heading;
    }
  }
  
  export default Heading;