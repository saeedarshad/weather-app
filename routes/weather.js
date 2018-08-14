const express = require('express');
const router = express.Router();
const geocodeInfo = require('../models/geocoding');
const weatherInfo = require('../models/weather');

router.get('/:address', async (req, res) => {
    var address = encodedAddress = encodeURIComponent(req.params.address);
    const result = await getLocation();
    if (!result) res.status(404).send('Weather not found');
    res.send(result);
})

async function getLocation() {
    try {
        const location = await geocodeInfo(encodedAddress);
        if (location) {
            return await getWeather(location.latitude, location.longitude,location.address);
        }
    } catch (error) {
        console.log('Error', error);
    }

};

async function getWeather(lat, lng,addr) {
    try {
        const weather = await weatherInfo(lat, lng);
        if (weather) {
            weather.address = addr;
            return weather;
        }
    } catch (error) {
        console.log('Error', error);
    }
};

module.exports = router;