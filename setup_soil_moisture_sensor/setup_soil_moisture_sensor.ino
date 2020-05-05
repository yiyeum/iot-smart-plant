int moisturePin = A2;
int threeshold = 800;

void setup() {
  Serial.begin(9600);
  while (!Serial);
  delay(2000);
}

void loop() {
  Serial.println(get_average_moisture());
  delay(5000);
}

int get_average_moisture() {
   int tempValue = 0;
   for (int i = 0; i < 5; i++) {
    tempValue += analogRead(moisturePin);
    delay(100); 
   }
   return tempValue / 5;
}
