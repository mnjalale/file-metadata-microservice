'use strict';

var express = require("express"),
    routes = require("./app/routes/index.js");
    
var app = express();
require("dotenv").load();

app.use('/public',express.static(process.cwd() + '/public'));
app.use('/common',express.static(process.cwd() + '/app/common'));
app.use('/controllers',express.static(process.cwd() + '/app/controllers'));

routes(app);

var port = process.env.PORT || 8080;

app.listen(port,function(){
    console.log('Listening on port ' + port + '...');
})