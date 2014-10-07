var express = require('express'),
		app = express(),
    http    = require('http').Server(app),
    formidable = require('formidable'),
    util = require('util'),
    fs = require('fs'),
    path    = require('path');


app.set('port', process.env.PORT || 3000)
app.set('views', __dirname + '/')
app.use(express.static(path.join(__dirname, '/')))

app.get('/', function(req, res){
	res.sendfile(__dirname + '/index.html');
});

app.get('/arquivos', function(req, res){
  res.send({
    "imagens": fs.readdirSync(__dirname + "/upload/image/")
  });
});

app.post('/salvar-imagem', function(req, res){
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
  	fs.readFile(util.inspect(files.image.path).replace("'", "").replace("'", ""), function (err, data) {
  		var nameArquivo = util.inspect(files.image.name).replace("'", "").replace("'", "");
  		var novo = __dirname + "/upload/image/" + nameArquivo;
  		fs.writeFile(novo, data, function (err) {
 				io.emit('imagens', nameArquivo);
				res.redirect("/");
  		});
		});
 	});
});

http.listen(app.get('port'), function(){
  console.log('Media Capture rodando!')
});

var io = require('socket.io')(http);