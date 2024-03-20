const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    
    let twolakhsCountries = countries.filter(country => {
        if (country.population < '200000') {
            //console.log(country.population);
            
            return true;
        }
    });

    console.log(twolakhsCountries.map(country => country.name.common).join('\n'));
}

xhr.send();