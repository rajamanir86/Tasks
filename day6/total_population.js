

  const XMLHttpRequest = require('xhr2');
  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'https://restcountries.com/v3.1/all');
  
  xhr.onload = function () {
      let countries = JSON.parse(xhr.responseText);
      
      const totalPopulation = countries.reduce(
        (accumulator, countries) => accumulator + countries.population,
        0
      );
      console.log("Total population of countries:", totalPopulation);
      
    }
  xhr.send();