var osc = require('node-osc');
 //   io = require('socket.io').listen(8081);

var oscServer;


oscServer = new osc.Server(1235, '127.0.0.1');

oscServer.on('message', function(msg, rinfo) {
      console.log(msg);
      console.log(msg[1]);
      //socket.emit("message", msg);
    });