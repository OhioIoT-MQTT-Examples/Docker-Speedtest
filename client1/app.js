
const mqtt = require('mqtt');

const options = { host: '192.168.0.69' };

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
	
	if (++cnt == cycles) {
		const stop = new Date();
		console.log("time: "+(stop - start));
		process.exit(0);
	} else {
		connection.publish("topic1", "payload");
	}

});

