const int buttonPin7 = 7;
const int buttonPin6 = 6;
const int buttonPin5 = 5;
const int buttonPin4 = 4;
const int buttonPin3 = 3;
const int buttonPin2 = 2;

const int ledPin7 =  13;
const int ledPin6 =  12;
const int ledPin5 =  11;
const int ledPin4 =  10;
const int ledPin3 =  9;
const int ledPin2 =  8;

int buttonState2 = 0;
int buttonState3 = 0;  
int buttonState4 = 0;  
int buttonState5 = 0;  
int buttonState6 = 0;  
int buttonState7 = 0;   
  
boolean buttonPressNumber = false;
char receivedChar;

//Variables used to make sure that refresh rate matches up with the button.
int state2 = LOW;
int state3 = LOW;
int state4 = LOW;
int state5 = LOW;
int state6 = LOW;
int state7 = LOW;
int reading;        
int previous = LOW;  
long time = 0;         
long debounce = 200;   

//Constructure
void setup() {
  Serial.begin(9600);
  pinMode(ledPin7, OUTPUT);
  pinMode(buttonPin7, INPUT);
  pinMode(ledPin6, OUTPUT);
  pinMode(buttonPin6, INPUT);
  pinMode(ledPin5, OUTPUT);
  pinMode(buttonPin5, INPUT);
  pinMode(ledPin4, OUTPUT);
  pinMode(buttonPin4, INPUT);
  pinMode(ledPin3, OUTPUT);
  pinMode(buttonPin3, INPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(buttonPin2, INPUT);
}

//Loops through data, if it recieves a character, then do work. If button pressed, then do work.
void loop() {  
  recvOneChar();
  button7();
  button6();
  button5();
  button4();
  button3();
  button2();
}

//----------------------------------------------------------------------------------------------------------------------//
//button 7 and LED 7
void button7() {
  buttonState7 = digitalRead(buttonPin7);
  if (buttonState7 == HIGH && previous == LOW && millis() - time > debounce) {
    if (state7 == HIGH) {
      state7 = LOW;
      Serial.println("BUTTON 7: OFF");
    }
    else {
      state7 = HIGH;
      Serial.println("BUTTON 7: ON");
    }

    time = millis(); 
    digitalWrite(ledPin7, state7); 
  }
}

//button 6 and LED 6
void button6() {
  buttonState6 = digitalRead(buttonPin6);
  if (buttonState6 == HIGH && previous == LOW && millis() - time > debounce) {
    if (state6 == HIGH) {
      state6 = LOW;
      Serial.println("BUTTON 6: OFF");
    }
    else {
      state6 = HIGH;
      Serial.println("BUTTON 6: ON");
    }

    time = millis(); 
    digitalWrite(ledPin6, state6); 
  }
}

//button 5 and LED 5
void button5() {
  buttonState5 = digitalRead(buttonPin5);
  if (buttonState5 == HIGH && previous == LOW && millis() - time > debounce) {
    if (state5 == HIGH) {
      state5 = LOW;
      Serial.println("BUTTON 5: OFF");
    }
    else {
      state5 = HIGH;
      Serial.println("BUTTON 5: ON");
    }

    time = millis(); 
    digitalWrite(ledPin5, state5); 
  }
}

//button 4 and LED 4
void button4() {
  buttonState4 = digitalRead(buttonPin4);
  if (buttonState4 == HIGH && previous == LOW && millis() - time > debounce) {
    if (state4 == HIGH) {
      state4 = LOW;
      Serial.println("BUTTON 4: OFF");
    }
    else {
      state4 = HIGH;
      Serial.println("BUTTON 4: ON");
    }

    time = millis(); 
    digitalWrite(ledPin4, state4); 
  }
}

//button 3 and LED 3
void button3() {
  buttonState3 = digitalRead(buttonPin3);
  if (buttonState3 == HIGH && previous == LOW && millis() - time > debounce) {
    if (state3 == HIGH) {
      state3 = LOW;
      Serial.println("BUTTON 3: OFF");
    }
    else {
      state3 = HIGH;
      Serial.println("BUTTON 3: ON");
    }

    time = millis(); 
    digitalWrite(ledPin3, state3); 
  }
}

//button 2 and LED 2
void button2() {
  buttonState2 = digitalRead(buttonPin2);
  if (buttonState2 == HIGH && previous == LOW && millis() - time > debounce) {
    if (state2 == HIGH) {
      state2 = LOW;
      Serial.println("BUTTON 2: OFF");
    }
    else {
      state2 = HIGH;
      Serial.println("BUTTON 2: ON");
    }

    time = millis(); 
    digitalWrite(ledPin2, state2); 
  }
}

//----------------------------------------------------------------------------------------------------------------------//
//Checks for Characters
void recvOneChar() {
   if (Serial.available() > 0) {
   receivedChar = Serial.read();
     
     if (receivedChar == 'w') {
     state2 = HIGH;
     digitalWrite(ledPin2, state2);
     Serial.println("SERIAL 2: ON");
     } else if (receivedChar == 's') {
      state2= LOW;
      digitalWrite(ledPin2, state2);
      Serial.println("SERIAL 2: OFF");
     }     
     
     if (receivedChar == 'e') {
     state3 = HIGH;
     digitalWrite(ledPin3, state3);
     Serial.println("SERIAL 3: ON");
     } else if (receivedChar == 'd') {
      state3 = LOW;
      digitalWrite(ledPin3, state3);
      Serial.println("SERIAL 3: OFF");
     }  
 
    if (receivedChar == 'r') {
     state4 = HIGH;
     digitalWrite(ledPin4, state4);
     Serial.println("SERIAL 4: ON");
    } else if (receivedChar == 'f') {
      state4 = LOW;
      digitalWrite(ledPin4, state4);
      Serial.println("SERIAL 4: OFF");
    }

    if (receivedChar == 't') {
     state5 = HIGH;
     digitalWrite(ledPin5, state5);
     Serial.println("SERIAL 5: ON");
    } else if (receivedChar == 'g') {
      state5 = LOW;
      digitalWrite(ledPin5, state5);
      Serial.println("SERIAL 5: OFF");
    } 

    if (receivedChar == 'y') {
     state6 = HIGH;
     digitalWrite(ledPin6, state6);
     Serial.println("SERIAL 6: ON");
    } else if (receivedChar == 'h') {
      state6 = LOW;
      digitalWrite(ledPin6, state6);
      Serial.println("SERIAL 6: OFF");
    }

    
    if (receivedChar == 'u') {
     state7 = HIGH;
     digitalWrite(ledPin7, state7);
     Serial.println("SERIAL 7: ON");
    } else if (receivedChar == 'j') {
      state7 = LOW;
      digitalWrite(ledPin7, state7);
      Serial.println("SERIAL 7: OFF");
    }

    if (receivedChar == 'q') {
     state2 = HIGH;
     digitalWrite(ledPin2, state2);
     Serial.println("SERIAL 2: ON");
     state3 = HIGH;
     digitalWrite(ledPin3, state3);
     Serial.println("SERIAL 3: ON");
     state4 = HIGH;
     digitalWrite(ledPin4, state4);
     Serial.println("SERIAL 4: ON");
     state5 = HIGH;
     digitalWrite(ledPin5, state5);
     Serial.println("SERIAL 5: ON");
     state6 = HIGH;
     digitalWrite(ledPin6, state6);
     Serial.println("SERIAL 6: ON");
     state7 = HIGH;
     digitalWrite(ledPin7, state7);
     Serial.println("SERIAL 7: ON");
    } else if (receivedChar == 'a') {
      state2= LOW;
      digitalWrite(ledPin2, state2);
      Serial.println("SERIAL 2: OFF");
      state3 = LOW;
      digitalWrite(ledPin3, state3);
      Serial.println("SERIAL 3: OFF");
      state4 = LOW;
      digitalWrite(ledPin4, state4);
      Serial.println("SERIAL 4: OFF");
      state5 = LOW;
      digitalWrite(ledPin5, state5);
      Serial.println("SERIAL 5: OFF");
      state6 = LOW;
      digitalWrite(ledPin6, state6);
      Serial.println("SERIAL 6: OFF");
      state7 = LOW;
      digitalWrite(ledPin7, state7);
      Serial.println("SERIAL 7: OFF");
    }
 }
}
