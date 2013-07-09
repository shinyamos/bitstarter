var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var textBuffer = new Buffer();
    
    var byteLength = fs.readSync('index.html', textBuffer);

    response.send (textBuffer.toString('utf-8'));

//  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


