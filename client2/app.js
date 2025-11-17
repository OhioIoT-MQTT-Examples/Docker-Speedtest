
const mqtt = require('mqtt');

const options = { host: '[IP address of your Pi]' };

const connection = mqtt.connect(options);

connection.on('connect', function(ack) {
	console.log("\tconnected");
})

connection.subscribe("topic1");

connection.on('message', function(topic, payload) {
	connection.publish("topic2", "payload");
});
