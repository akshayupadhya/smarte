
#include <ESP8266WiFi.h>
#include <ArduinoJson.h>

const char* ssid     = "D-Link_DIR-615";  
const char* password = "optiplex755";

const char* host     = "powerful-beach-46971.herokuapp.com"; // Your domain, no slashes (ex: www.nyl.io)  
String path          = "/led"; // path to light.json beginning with slash (ex: /esptest/light.json)  
const int pin        = 2;
StaticJsonBuffer<200> jsonBuffer;
void setup() {  
  pinMode(pin, OUTPUT); 
  pinMode(pin, LOW);
  Serial.begin(115200);

  delay(10);
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);
  int wifi_ctr = 0;
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("WiFi connected");  
  //Serial.println("IP address: " + WiFi.localIP());
}
void loop() {  
  //Serial.print("connecting to ");
  //Serial.println(host);
  WiFiClient client;
  const int httpPort = 80;
  if (!client.connect(host, httpPort)) {
    Serial.println("connection failed");
    return;
  }

  client.print(String("GET ") + path + " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" + 
            "Connection: keep-alive\r\n\r\n");

  delay(500); // wait for server to respond

  // read response
  int dir = 0; 
  while(client.available()){
    String line = client.readStringUntil('\r');
    //Serial.print(line);
    /////////////////////////////////////////////////////////////////////
    // NOTE: we’ll replace the line above with something to parse the 
    // JSON response here!
    /////////////////////////////////////////////////////////////////////
    if(line[11]=='t'){Serial.println("true"); digitalWrite(pin, HIGH);}else{
        Serial.println('false');
         digitalWrite(pin, LOW);
      }
    
   // JsonObject& root = jsonBuffer.parseObject(line);
    //if (!root.success()) {Serial.println("parseObject() failed");return;}
    //const bool status =root["status"];
    //Serial.print("the obtained status is"+status);
  }
  Serial.print("closing connection. ");
}
