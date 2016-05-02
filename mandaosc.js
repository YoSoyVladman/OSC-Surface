var osc = require('node-osc'),
    io = require('socket.io').listen(1236);

var oscClient;
var url = '10.1.7.25';
var puerto = 1234;
oscClient = new osc.Client(url,puerto);

io.sockets.on('connection', function (socket) {

  socket.on("mensaje", function (mensaje) {
    console.log(mensaje);
    oscClient.send('/checkin',mensaje);
  });



});