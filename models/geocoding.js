const request = require('request');

module.exports = function (encodedAddress) {
    return new Promise((resolve,reject) =>{
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (err, response, body) => {
            if (err) {
                reject('Error.....');
            }
            if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
            else {
                reject('No Address Found');
            }
        });
    });
};