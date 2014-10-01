var express = require('express'),
    http    = require('http'),
    path    = require('path');

var app = express();

app.set('port', process.env.PORT || 3000)
app.set('views', __dirname + '/')
app.use(express.static(path.join(__dirname, 'app')))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/server', function(req, res){
  res.sendFile(__dirname + '/server.html');
});

app.get('/client', function(req, res){
  res.sendFile(__dirname + '/cliente.html');
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Media Capture rodando!')
})
