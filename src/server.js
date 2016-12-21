/* eslint-disable */

var express = require('express');
var port = process.env.PORT || 8301;
var app = express();

app.disable('x-powered-by');
app.set('views', 'src/template');
app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.sendFile('src/template/index.html', {
     root: '.'
   });
});

app.listen(port);

console.log("server started on port " + port);