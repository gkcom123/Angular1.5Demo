//Get modules.
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var app = express();
app.use(bodyParser.json())

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/'));


http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
