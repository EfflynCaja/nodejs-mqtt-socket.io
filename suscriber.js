var mqtt = require("mqtt");

var options = {
	clientId: "subscribe",
  	username: "nvinjwxt",
  	password: "KkOPwaOoMtr4"
};

var client = mqtt.connect("tcp://m16.cloudmqtt.com:15231", options);

const MQTT_TEMPERATURE = 'demo/sensores/temperature';
const MQTT_LEVEL = 'demo/sensores/level';
const MQTT_FLOW = 'demo/sensores/flow';
const MQTT_PRESSURE = 'demo/sensores/pressure';

client.on('connect', function () {
    client.subscribe(MQTT_TEMPERATURE);
    client.subscribe(MQTT_LEVEL);
    client.subscribe(MQTT_FLOW);
    client.subscribe(MQTT_PRESSURE);
});

client.on('message', function (topic, message) {
	if (topic == MQTT_TEMPERATURE){
		console.log("Temperatura: " + message.toString());
	}
	if (topic == MQTT_LEVEL){
		console.log("Nivel: " + message.toString());
	}
	if (topic == MQTT_FLOW){
		console.log("Flujo: " + message.toString());
	}
	if (topic == MQTT_PRESSURE){
		console.log("Presion: " + message.toString());
	}
});