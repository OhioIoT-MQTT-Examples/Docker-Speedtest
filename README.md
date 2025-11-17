# MQTT: Docker Speedtest <a href="https://www.ohioiot.com"><img src="https://www.ohioiot.com/images/logo.jpg" width="40" ></a>


## Overview
The code here is used in the YouTube video [MQTT - Your First Broker](https://www.youtube.com/watch?v=k9CnF3siO6s).  Two basic NodeJS MQTT clients play ping pong 1000 times across a Mosquitto broker and then report how long the process takes to complete.  This is tested against a bare-metal installation and a docker installation.  Check out the video for the result.


👉 Subscribe to the [OhioIoT YouTube Channel](https://www.youtube.com/@OhioIoT?sub_confirmation=1) for more on "All Things IoT": hardware, firmware, connectivity, cloud computing, and dev toolkit.


## Getting Started

### Mosquitto Installation - Windows
- Download https://mosquitto.org/files/binary/win64/mosquitto-2.0.22-install-windows-x64.exe
- Run It
- Add the following lines to ***C:\Program Files\mosquitto\mosquitto.conf***:
    - `listener 1883`
    - `allow_anonymous true`
- Go to Services and restart Mosquitto

### Mosquitto Installation - Rasbperry Pi
```
sudo apt update -y
sudo apt install -y mosquitto
echo "listener 1883" | sudo tee /etc/mosquitto/conf.d/additional.conf
echo "allow_anonymous true" | sudo tee -a /etc/mosquitto/conf.d/additional.conf
sudo systemctl restart mosquitto
```

### ESP32 Programming
- Open ***simple_publish.ino*** in Arduino IDE and burn on one device
- Open ***simple_subscribe.ino*** in Arduino IDE and burn on othe other device
- Change the values in the following lines of code:
```
#define WIFI_SSID "[YOUR WIFI SSID]"                  <-- update these
#define WIFI_PASS "[YOUR WIFI PASS]"                  <-- update these
#define MQTT_HOST "[THE IP ADDRESS OF YOUR BROKER]"   <-- update these
```


## About
*OhioIoT is an IoT platform designed for small-scale IoT projects (https://www.ohioiot.com).*
