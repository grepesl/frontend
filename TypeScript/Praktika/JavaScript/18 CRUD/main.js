import Restaurant from "./Restaurant.js";

fetch(`http://localhost:3000/restaurants`)
  .then(res => res.json())
  .then(restaurants => {
    const restaurantsDiv = document.querySelector('#restaurants');
    // console.log(restaurants);
    restaurants.forEach(restaurant => {
      // sukurti restorano kortele
      const restaurantDiv = new Restaurant(restaurant);
      // kortele patalpinti į restoranų div'ą
      restaurantsDiv.appendChild(restaurantDiv);
    });
  });

document
  .querySelector('#addNewRestaurant')
  .addEventListener('submit', e => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    // const restaurant = {};
    // formData.forEach((value, key) => restaurant[key] = value);
    const restaurant = {
      name: e.target.elements.name.value,
      kitchen: e.target.elements.kitchen.value,
      location: e.target.elements.location.value,
      priceRange: e.target.elements.priceRange.value,
      rating: e.target.elements.rating.valueAsNumber,
      thumbnail: e.target.elements.thumbnail.value
    };
    // console.log(restaurant);
    // atvaizduoju ekrane naują restoraną
    // const restaurantsDiv = document.querySelector('#restaurants');
    // const restaurantDiv = new Restaurant(restaurant);
    // restaurantsDiv.appendChild(restaurantDiv);
    // išsaugoti restoraną duomenyse
    fetch(`http://localhost:3000/restaurants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(restaurant)
    }).then(res => res.json())
      .then(data => {
        // console.log(data);
        const restaurantsDiv = document.querySelector('#restaurants');
        const restaurantDiv = new Restaurant(data);
        restaurantsDiv.appendChild(restaurantDiv);
      })
    e.target.reset();
  });