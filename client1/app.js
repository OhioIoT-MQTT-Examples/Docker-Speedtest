
const mqtt = require('mqtt');

const options = { host: '[your Pi IP address]' };

const connection = mqtt.connect(options);

connection.on('connect', function() { 
	console.log("\tconnected"); 
	connection.publish("topic1", "payload");
})

connection.subscribe('topic2');

let cnt = 0;

const cycles = 1000;

const start = new Date();

connection.on('message', function(topic, payload) {
	
	cnt++;

	if (cnt == cycles) {
		const stop = new Date();
		console.log("time: "+(stop - start));
		process.exit(0);
	} else {
		connection.publish("topic1", "payload");
	}
});

