var express = require('express');
var app = express();console.log(__dirname)
app.use('/',express.static(__dirname + '/www'));

var server = app.listen(1818, function() {
    console.log('Listening on port %d', server.address().port);
});
