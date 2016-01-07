var spotify = require('spotify-node-applescript'),
    five = require("johnny-five"),
    isPause  = false;


five.Board().on("ready", function() {
  bumper = new five.Button(7);

  bumper.on("hit", function() {
    var method = (shouldPause) ? 'play' : 'pause';
    isPause = !isPause;

    spotify[method](function() {
      console.log(method + 'ed song');
    });
  })
});