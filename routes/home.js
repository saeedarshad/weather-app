const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index',{title:'Weather App',message:'Weather Checking App'});
});

module.exports = router;