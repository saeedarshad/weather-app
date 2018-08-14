const request = require('request');
var fahrenheitToCelsius = require('fahrenheit-to-celsius');

module.exports = function (lat,lng) {
    return new Promise((resolve,reject) =>{
        request({
            url: `https://api.darksky.net/forecast/9366239bd7a997ab30d80f6fd9533e8e/${lat},${lng}`,
            json: true
        }, (err, response, body) => {
            if (err) {
                reject('Error.....');
            }
            if (body) {
                var temperature = fahrenheitToCelsius(body.currently.temperature);
                resolve({
                    address : '',
                    latitude : body.latitude,
                    longitude : body.longitude,
                    summary: body.currently.summary,
                    temperature: temperature ,
                    humidity: body.currently.humidity,
                    pressure : body.currently.pressure,
                    windSpeed : body.currently.windSpeed,
                    visibility : body.currently.visibility
                });
            }
            else {
                reject('No Weather found');
            }
        });
    });
};