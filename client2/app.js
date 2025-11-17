
const mqtt = require('mqtt');

const options = { host: '192.168.0.69' };	// <-- set the IP address of your Pi

const connection = mqtt.connect(options);

connection.on('connect', function(ack) {
	console.log("\tconnected");
})

connection.subscribe("topic1");

connection.on('message', function(topic, payload) {
	connection.publish("topic2", "payload");
});
