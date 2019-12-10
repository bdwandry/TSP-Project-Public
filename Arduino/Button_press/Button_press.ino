int LED1 = 12;
int LED2 = 13;
int BUTTON = 4;
char receivedChar;

void setup() {
  Serial.begin(9600);
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
  pinMode(BUTTON, INPUT);
}

void loop() {
  recvOneChar();
  if (digitalRead(BUTTON) == HIGH) {
  digitalWrite(LED1, HIGH);
  } else {
  digitalWrite(LED1, LOW);
  }
}

void recvOneChar() {
   if (Serial.available() > 0) {
   receivedChar = Serial.read();
  
   if (receivedChar == 'w') {
   digitalWrite(LED2, HIGH);
   }

   if (receivedChar == 's') {
    digitalWrite(LED2, LOW);
   }
 }
}
