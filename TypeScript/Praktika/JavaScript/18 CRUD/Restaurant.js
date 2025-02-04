class Restaurant{
    constructor({ id, name, kitchen, location, priceRange, rating, thumbnail }){
      this.id = id;
      this.name = name;
      this.kitchen = kitchen;
      this.location = location;
      this.priceRange = priceRange;
      this.rating = rating;
      this.thumbnail = thumbnail;
      return this.render();
    }
    render(){
      const cardDiv = document.createElement('div');
  
      const image = document.createElement('img');
      image.setAttribute('src', this.thumbnail);
      image.setAttribute('alt', `${this.name} restaurant`);
  
      const heading = document.createElement('h3');
      heading.textContent = this.name;
  
      const infoDiv = document.createElement('div');
      const kitchenPar = document.createElement('p');
      kitchenPar.textContent = `${this.kitchen} virtuvė`;
      const locationPar = document.createElement('p');
      locationPar.textContent = `Mes randamės adresu: ${this.location}`;
      const priceRangePar = document.createElement('p');
      priceRangePar.textContent = `Mūsų kainos yra ${this.priceRange}`;
      const ratingPar = document.createElement('p');
      ratingPar.textContent = `Mūsų reitingas: ${this.rating}/10`;
  
      infoDiv.append(kitchenPar, locationPar, priceRangePar, ratingPar);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Ištrinti';
      deleteButton.classList.add('deleteButton');
      deleteButton.addEventListener('click', () => {
        // trinimas be patvirtinimo
        cardDiv.remove(); // ištrina iš ekrano
        // ištrina iš duomenų bazės (data.json)
        fetch(`http://localhost:3000/restaurants/${this.id}`, {
          method: "DELETE"
        });
        // trinimą su patvirtinimu galima daryti naudojant modalą (modalą kurti naudojant dialog'ą)
      });
  
      cardDiv.append(image, heading, infoDiv, deleteButton);
  
      return cardDiv;
    }
  }
  
  export default Restaurant;