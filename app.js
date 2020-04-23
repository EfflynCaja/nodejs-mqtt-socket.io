
const express = require('express');
const mqtt = require('mqtt');
const path = require('path');
const bodyParser = require('body-parser');

//constantes
const app = express();
const MQTT_TEMPERATURE = 'demo/sensores/temperature';
const MQTT_LEVEL = 'demo/sensores/level';
const MQTT_FLOW = 'demo/sensores/flow';
const MQTT_PRESSURE = 'demo/sensores/pressure';

//configuraciones
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); //carga index.html
app.use(bodyParser.json());

//routes
//app.use(require('./routes/history.js'));

//server
var server = app.listen(app.get('port'), () => {
	console.log('server port ' + app.get('port'));
});

//socket
const io = require('socket.io').listen(server);

//mqtt - suscribe
var options = {
	clientId: "cristina",
  	username: "nvinjwxt",
  	password: "KkOPwaOoMtr4"
};
var client = mqtt.connect("tcp://m16.cloudmqtt.com:15231", options);

client.on('connect', function (topic, message) {
    client.subscribe(MQTT_TEMPERATURE);
    client.subscribe(MQTT_LEVEL);
    client.subscribe(MQTT_FLOW);
    client.subscribe(MQTT_PRESSURE);
});


client.on('message', function (topic, message) {
	var time = Date.now();

	if (topic == MQTT_TEMPERATURE){
		io.sockets.emit('mqtt_temperature', { 
		raw: message.toString(),
		time: time
		});
	}

	if (topic == MQTT_LEVEL){
		io.sockets.emit('mqtt_level', { 
		raw: message.toString(),
		time: time
		});
	}

	if (topic == MQTT_FLOW){
		io.sockets.emit('mqtt_flow', { 
		raw: message.toString(),
		time: time
		});
	}

	if (topic == MQTT_PRESSURE){
		io.sockets.emit('mqtt_pressure', { 
		raw: message.toString(),
		time: time
		});
	}
});






