class  Paragraph{
    constructor(text){
        this.text = text;
        return this.render();
    }
    render(){
        const par2 = document.createElement('p');
        const par2Text = document.createTextNode(this.text);
        par2.appendChild(par2Text);

        return par2
    }
}

export default  Paragraph;