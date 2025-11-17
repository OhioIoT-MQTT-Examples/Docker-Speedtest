# MQTT: Docker Speedtest <a href="https://www.ohioiot.com"><img src="https://www.ohioiot.com/images/logo.jpg" width="40" ></a>


## Overview
The code here is used in the YouTube video [MQTT - Using Docker](https://www.youtube.com/watch?v=k9CnF3siO6s).  Two basic NodeJS MQTT clients play ping pong 1000 times across a Mosquitto broker and then report how long the process takes to complete.  This is tested against a bare-metal installation and a Docker installation.  Check out the video for the result.


👉 Subscribe to the [OhioIoT YouTube Channel](https://www.youtube.com/@OhioIoT?sub_confirmation=1) for more on "All Things IoT": hardware, firmware, connectivity, cloud computing, and dev toolkit.


## Getting Started
```
git clone https://github.com/OhioIoT-MQTT-Examples/Docker-Speedtest.git
```
update the IP addresses in ***/client1/app.js*** and ***/client2/app.js*** to match your Pi

### Bare-Metal Test
- copy the commands from ***/install-bare-metal/install*** and paste them in the command line on your Pi
- go to ***/client2***
    - `npm install`
    - `node app.js`
- go to ***/client1***
    - `npm install`
    - `node app.js`
- record the time
- copy the commands from ***/install-bare-metal/uninstall*** and paste them in the command line on your Pi


### Docker Test
- copy the commands from ***/install-docker/install*** and paste them in the command line on your Pi
- go to ***/client2***
    - `npm install`
    - `node app.js`
- go to ***/client1***
    - `npm install`
    - `node app.js`
- record the time
- copy the commands from ***/install-docker/uninstall*** and paste them in the command line on your Pi


## About
*OhioIoT is an IoT platform designed for small-scale IoT projects (https://www.ohioiot.com).*
