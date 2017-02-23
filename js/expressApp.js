var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// middle-ware, has to be 'used' before the 'get'
/*
var logger = function(request, response, next) {
    console.log('Logging...');
    next();
}

app.use(logger);
*/

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (request, response) {
    response.send('Hello World');
});

app.listen(3000, function () {
    console.log('Server Started on Port 3000...');
});

