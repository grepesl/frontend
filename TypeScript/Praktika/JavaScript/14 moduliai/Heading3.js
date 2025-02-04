class Heading2{
    constructor(text){
        this.text = text;
        return this.render();
    }
    render(){
        const heading = document.createElement('h2');
        const headingText = document.createTextNode(this.text);
        heading.appendChild(headingText);

        return heading
    }
}

export default Heading2;

