var express = require('express');
var spotify = require('spotify-node-applescript');
var app = express();

app.set('views', './')
app.set('view engine', 'jade');

app.get('/play', function (req, res) {
  spotify.play(function() {
    console.log('played song');
  });
  res.render('index.jade', { play: true});
});

app.get('/pause', function (req, res) {
  spotify.pause(function() {
    console.log('paused song');
  });
  res.render('index.jade', { pause: true});
});


app.get('/', function (req, res) {
  res.render('index.jade', { pause: true});
});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('play-pause app listening at http://%s:%s', host, port);
});