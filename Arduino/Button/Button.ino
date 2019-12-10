const int buttonPin = 2;     //The Number that the Pin is receiving data in.
const int ledPin =  13;      //The LEDP in number
int buttonState = 0;  
boolean buttonPressNumber = false;
char receivedChar;

//Variables used to make sure that refresh rate matches up with the button.
int state = LOW;
int reading;        
int previous = LOW;  
long time = 0;         
long debounce = 200;   

//Constructure
void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT);
}

//Loops through data, if it recieves a character, then do work. If button pressed, then do work.
void loop() {
  recvOneChar();
  buttonState = digitalRead(buttonPin);
  if (buttonState == HIGH && previous == LOW && millis() - time > debounce) {
    if (state == HIGH) {
      state = LOW;
      Serial.println("BUTTON 1: OFF");
    }
    else {
      state = HIGH;
      Serial.println("BUTTON 1: ON");
    }

    time = millis(); 
    digitalWrite(ledPin, state); 
  }
}

//Checks for Characters
void recvOneChar() {
   if (Serial.available() > 0) {
   receivedChar = Serial.read();
  
     if (receivedChar == 'w') {
     state = HIGH;
     Serial.println("SERIAL 1: ON");
     } else if (receivedChar == 's') {
      state = LOW;
      Serial.println("SERIAL 1: OFF");
     } 
     digitalWrite(ledPin, state);
     
 }
}
