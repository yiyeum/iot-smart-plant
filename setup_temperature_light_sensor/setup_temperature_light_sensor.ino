int tempPin = A1;
int lightPin = A0;

float get_temperature() {
  int tempValue = analogRead(tempPin);
  float volt = tempValue * 3.3;
  volt /= 1024.0;

  float tempC = (volt - 0.5) * 100;
  // convert Celsius to Fahrenheit 
  float tempF = (tempC * 9.0 / 5.0) + 32.0;
  return tempF;
}

int get_light() {
  int lightValue = analogRead(A0);
  return lightValue;
}
