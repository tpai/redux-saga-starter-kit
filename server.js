const fallback = require('express-history-api-fallback');
const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 3000;

const root = path.resolve(__dirname, './dist');
app.use(express.static(root));
app.use(fallback('index.html', { root }));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});

http.listen(port, function() {
  console.log("Listening http://localhost:" + port);
});
