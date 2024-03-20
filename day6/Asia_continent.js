const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    
    let asiaCountries = countries.filter(country => {
        if (country.continents && country.region === 'Asia') {
            //console.log(Object.keys(country.currencies).includes('USD'));
            
            return true;
        }
    });

    console.log(asiaCountries.map(country => country.name.common).join('\n'));
}

xhr.send();