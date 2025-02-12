class CarsClass {
    constructor(name, year) {
        this.name = name;
        this.year = year;
        this.helloCar = `Labas, čia mano mašina ${this.name} ir ji buvo pagaminta ${this.year} metais`; 
        
        return this.render();
    }

    render() {
        const heading = document.createElement(`h1`)
        const headingText = document.createTextNode(this.helloCar);
        heading.appendChild(headingText);

        this.age();

        return heading;
    }

   age() {
    const nowYear = new Date().getFullYear();


    console.log(nowYear - this.year);
   }

}

export default CarsClass;