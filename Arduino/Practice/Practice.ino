//Author: Bryan Wandrych
//TSP Project


char receivedChar;
void setup() {
 Serial.begin(9600);
 pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
 recvOneChar();
}

void recvOneChar() {
   if (Serial.available() > 0) {
   receivedChar = Serial.read();
  
   if (receivedChar == 'w') {
   digitalWrite(LED_BUILTIN, HIGH);
   }

   if (receivedChar == 's') {
    digitalWrite(LED_BUILTIN, LOW);
   }
 }
}
