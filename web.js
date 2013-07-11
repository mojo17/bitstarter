var express = require('express');
var fs = require("fs");
var app = express.createServer(express.logger());
app.get('/', function(request, response) {
//var buf = new Buffer();
var text = fs.readFileSync('index.html',{'encoding':'utf-8'});
    console.log("text is: " + text);
//  response.send('Hello World 2!');
response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
