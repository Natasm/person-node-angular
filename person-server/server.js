const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routesPerson = require('./routes/person');
const routesProfession = require('./routes/profession');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routesPerson);
app.use('/', routesProfession);

const PORT = process.env.PORT || 3001

app.listen(PORT, function () {
    console.log('server running on port ' + PORT);
});

module.exports = app