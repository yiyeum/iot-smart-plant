#include <WiFi101.h> // allows to connect the board to a WIFI network
#include <WiFiSSLClient.h> // allows to create a client that always connects in SSL to specified IP address and port
#include <RTCZero.h>

WiFiSSLClient client;
RTCZero rtc;

const byte seconds = 10;
const byte minutes = 36;
const byte hours = 02;

const byte day = 1;
const byte month = 05;
const byte year = 20;
bool is_email_sent = false;

void setup() {
  Serial.begin(9600);
  // wait for serial port to connect
  while (!Serial) { 
    delay(2000);
  }
  connectNetwork();
  setupTime();
}

void connectNetwork() {
  Serial.print("Connecting Wifi: ");
  Serial.println(ssid);
  while (WiFi.begin(ssid, password) != WL_CONNECTED) {
    delay(500); // pause program
  }
  Serial.println("WIFI Connected");
}

void setupTime() {
  rtc.begin(); // initialize RTC 24h format
  rtc.setTime(hours, minutes, seconds);
  rtc.setDate(day, month, year);
  rtc.setAlarmTime(9, 0, 0);
  rtc.enableAlarm(rtc.MATCH_HHMMSS);
  rtc.attachInterrupt(alarmMatch);
}

void loop() {
  // set values for now - TODO: Replace hardcoded values
  float temperature = 22;
  int moisture = 150;
  int light = 40;
  String warning = "Warning Message Sample";
  warning.replace(" ", "%20");
  if (!is_email_sent) {
    send_email(temperature, moisture, light, warning);
    is_email_sent = true; 
   }
}

void alarmMatch() {
  Serial.println("Alarm Match!");
  is_email_sent = false;
}

void send_email(float temperature, int moisture, int light, String warning) {
  String _temperature = String(temperature);
  String _moisture = String(moisture);
  String _light = String(light);
  String _warning = warning;
  if (client.connect(host, 443)) {
    client.println("POST " + httpsRequest + "?temperature=" + _temperature + "&moisture=" + _moisture + "&light=" + _light + "&warning=" + _warning + " HTTP/1.1");
    client.println("HOST: " + String(host));
    client.println("----------");
    delay(1000);
    while(client.available()) {
      char c = client.read();
      Serial.write(c);  
    } 
    client.stop(); // disconnect from the server
   }
}
