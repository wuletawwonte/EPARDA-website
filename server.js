

var express = require('express');
var app = express();
var server = require('http').createServer(app);

// app.use(express.static('/public'));
app.use('/', express.static(__dirname + '/public'));

server.listen(process.env.PORT || 3000);
console.log("listening on *: 3000");

app.get('/', function(req, res){
	res.sendFile(__dirname + "/public/index.html");
});

