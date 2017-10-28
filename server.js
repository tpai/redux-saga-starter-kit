var fallback = require('express-history-api-fallback');
var path = require('path');
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var port = process.env.PORT || 3000;

var root = path.resolve(__dirname, './public');
app.use(express.static(root));
app.use(fallback('index.html', { root: root }));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

http.listen(port, function() {
    console.log("Listening http://localhost:" + port);
});
