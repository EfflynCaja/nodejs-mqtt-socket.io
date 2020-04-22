var mqtt = require("mqtt");

var options = {
	clientId: "efflyn",
  	username: "nvinjwxt",
  	password: "KkOPwaOoMtr4"
};
var client = mqtt.connect("tcp://m16.cloudmqtt.com:15231", options);


//var client  = mqtt.connect('mqtt://test.mosquitto.org');

const MQTT_TK1_TEMPERATURE = 'demo/sensores/temperature';
const MQTT_TK1_LEVEL = 'demo/sensores/level';
const MQTT_TK1_FLOW = 'demo/sensores/flow';
const MQTT_TK1_PRESSURE = 'demo/sensores/pressure';


client.on("connect", function(){
	setInterval(function(){
		var temperature = 20 + Math.random() * 10;
		var level = 50 + Math.random() * 10;
		var flow = 30 + Math.random() * 10;
		var pressure = 40 + Math.random() * 10;

		client.publish(MQTT_TK1_TEMPERATURE, temperature.toString());
		client.publish(MQTT_TK1_LEVEL, level.toString());
		client.publish(MQTT_TK1_FLOW, flow.toString());
		client.publish(MQTT_TK1_PRESSURE, pressure.toString());

		console.log("Temperatura: " + temperature.toString() + ", Nivel: " + level.toString(), ", Flujo: " + flow.toString() + ", Presion: " + pressure.toString());
	},5000);
});