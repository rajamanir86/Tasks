const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    
    countries.forEach(function (country) {
        console.log(country.name.common, country.capital, country.flag);
    });
}

xhr.send();