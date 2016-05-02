var osc = require('node-osc');


var  oscClient;

var url = '10.1.7.216';
var puerto = 1234;
//mensaje = [];
oscClient = new osc.Client(url,puerto);
rfid = '12345678';
monito = '2';
mensaje = rfid+','+monito;
//mensaje = mensaje.concat(rfid,monito);
// oscClient.send('/checkin',rfid);
//oscClient.send('/checkin',monito);
oscClient.send('/checkin',mensaje);