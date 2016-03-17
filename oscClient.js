var osc = require('node-osc');


var  oscClient;

var url = '127.0.0.1';
var puerto = 1235;
//mensaje = [];
oscClient = new osc.Client(url,puerto);
rfid = '12345678';
monito = '2';
mensaje = rfid+','+monito;
//mensaje = mensaje.concat(rfid,monito);
// oscClient.send('/checkin',rfid);
//oscClient.send('/checkin',monito);
oscClient.send('/checkin',mensaje);