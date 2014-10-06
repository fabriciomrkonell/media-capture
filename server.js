var express = require('express'),
    http    = require('http'),
    path    = require('path');

var app = express();

app.set('port', process.env.PORT || 3000)
app.set('views', __dirname + '/')
app.use(express.static(path.join(__dirname, 'app')))

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Media Capture rodando!')
})
