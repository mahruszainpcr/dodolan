
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3006,
    bodyParser = require('body-parser'), cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./route');
routes(app);

app.listen(port);
console.log('RESTful API server started on: ' + port);