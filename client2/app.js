
const mqtt = require('mqtt');

const options = { host: '[your Pi IP address]' };

const connection = mqtt.connect(options);

connection.on('connect', function(ack) {
	console.log("\tconnected");
})

connection.subscribe("topic1");

connection.on('message', function(topic, payload) {
	connection.publish("topic2", "payload");
});
