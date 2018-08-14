const express = require('express');
const weather = require('./routes/weather');
const home = require('./routes/home');
const app = express();

require('express-async-errors');

app.use(express.json());
app.use('/', home);
app.use('/api/weather',weather);

const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.listen(port, () => console.log('listening on port ' + port));
