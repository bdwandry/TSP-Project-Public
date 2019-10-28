/**
 * Author: Bryan Wandrych
 * Username: bdwandry
 * Project: Electrical Applicator for TSP
 * Description: Everything is handled through software, all of the buttons (suppose to represent a physical light switch), but it gives
 *              a user a physical way to turn on the lights. Also everything can be handled through software by sending specific characters
 *              to the arduino using the serial connection. 
 *              
 *              To turn on the LEDs, send the following Characters: 
 *                q - Turns on all LED's
 *                w - Turns on LED 2
 *                e - Turns on LED 3
 *                r - Turns on LED 4
 *                t - Turns on LED 5
 *                y - Turns on LED 6
 *                u - Turns on LED 7
 *                
 *              To turn off the LEDs, send the following Characters:
 *                a - Turns off all LED's
 *                s - Turns off LED 2
 *                d - Turns off LED 3
 *                f - Turns off LED 4
 *                g - Turns off LED 5
 *                h - Turns off LED 6
 *                j - Turns off LED 7
 *                
 * **NOTE: I am using the Arduino IDE for my testing. When it comes to sending data, open the Arduino IDE (upload code if needed) --> Go to tools --> Serial Monitor              
 *         Make sure if you are using a program like putty to send data over, make sure its using a 9600 baud rate. 
 *         Also the reason why I stated LED 2 to LED 7 is because how the data pins are alined to the LEDs.
 */

int buttonNumber = 0; //Keeps track of which button is pressed and then turns on or off the specified LED.
int buttonPressed; //Checks to see if the button is pressed.
char recievedChar; //Keeps track of the characters being sent over the Serial Connection. 

//Button Initializers
const int buttonPin7 = 7;
const int buttonPin6 = 6;
const int buttonPin5 = 5;
const int buttonPin4 = 4;
const int buttonPin3 = 3;
const int buttonPin2 = 2;

//Setting up analog inputs
const int analogPin0 = A0;
const int analogPin2 = A2;

//Setting up LED Buttons
const int ledPin7 =  13;
const int ledPin6 =  12;
const int ledPin5 =  11;
const int ledPin4 =  10;
const int ledPin3 =  9;
const int ledPin2 =  8;

//This is for button processing, so if you click it. It turns and keeps the lights on.
//These variables have to deal with the processor speed.
int reading;        
int previous = LOW;  
long time = 0;         
long debounce = 200;  

//This is the constructor that instatiates all LED's and Buttons. 
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
  pinMode(analogPin0, INPUT);
  pinMode(analogPin2, INPUT);
}

//This is the loop that constantly runs and it will detect if a button is pressed. 
//Or it will go to the keyboards commands for further functions.
void loop() {
    if ((buttonPressed = digitalRead(buttonPin2)) == 1) {
      buttonNumber = 2;
      TurnOnOrOff(buttonPressed, buttonNumber);
    } else if ((buttonPressed = digitalRead(buttonPin3)) == 1) {
        buttonNumber = 3;
        TurnOnOrOff(buttonPressed, buttonNumber);
    } else if ((buttonPressed = digitalRead(buttonPin4)) == 1) {
        buttonNumber = 4;
        TurnOnOrOff(buttonPressed, buttonNumber);
    } else if ((buttonPressed = digitalRead(buttonPin5)) == 1) {
        buttonNumber = 5;
        TurnOnOrOff(buttonPressed, buttonNumber);
    } else if ((buttonPressed = digitalRead(buttonPin6)) == 1) {
        buttonNumber = 6;
        TurnOnOrOff(buttonPressed, buttonNumber);
    } else if ((buttonPressed = digitalRead(buttonPin7)) == 1) {
        buttonNumber = 7;
        TurnOnOrOff(buttonPressed, buttonNumber);
    } else if ((buttonPressed = analogRead(analogPin2)) >= 1000) {
        digitalWrite(8, HIGH);
        digitalWrite(9, HIGH);
        digitalWrite(10, HIGH);
        digitalWrite(11, HIGH);
        digitalWrite(12, HIGH);
        digitalWrite(13, HIGH);
        Serial.println("BUTTON 2: ON");
        Serial.println("BUTTON 3: ON");
        Serial.println("BUTTON 4: ON");
        Serial.println("BUTTON 5: ON");
        Serial.println("BUTTON 6: ON");
        Serial.println("BUTTON 7: ON");
    } else if ((buttonPressed = analogRead(analogPin0)) >= 1000) {
        digitalWrite(8, LOW);
        digitalWrite(9, LOW);
        digitalWrite(10, LOW);
        digitalWrite(11, LOW);
        digitalWrite(12, LOW);
        digitalWrite(13, LOW);
        Serial.println("BUTTON 2: OFF");
        Serial.println("BUTTON 3: OFF");
        Serial.println("BUTTON 4: OFF");
        Serial.println("BUTTON 5: OFF");
        Serial.println("BUTTON 6: OFF");
        Serial.println("BUTTON 7: OFF");
    }

    KeyboardCommands();
 }

//This will turn on or off the LEDs based on the button pressed. 
 void TurnOnOrOff(int buttonState, int buttonNumber) {
    int state = digitalRead(buttonNumber + 6);
    if (buttonState == HIGH && previous == LOW && millis() - time > debounce) {
        if (state == HIGH) {
          state = LOW;
          Serial.print("BUTTON ");
          Serial.print(buttonNumber);
          Serial.println(": OFF");
        } else {
          state = HIGH;
          Serial.print("BUTTON ");
          Serial.print(buttonNumber);
          Serial.println(": ON");
        }
    
        time = millis(); 
        digitalWrite(buttonNumber + 6, state); 
      }
 }

//This will recieve a character from the serial connection and turn on or off the LEDs based the specific keyboard input character. 
 void KeyboardCommands(){
  if (Serial.available() > 0) {
    recievedChar = Serial.read();
    
    switch (recievedChar) {
      case 'q':
        digitalWrite(8, HIGH);
        digitalWrite(9, HIGH);
        digitalWrite(10, HIGH);
        digitalWrite(11, HIGH);
        digitalWrite(12, HIGH);
        digitalWrite(13, HIGH);
        Serial.println("Serial 2: ON");
        Serial.println("Serial 3: ON");
        Serial.println("Serial 4: ON");
        Serial.println("Serial 5: ON");
        Serial.println("Serial 6: ON");
        Serial.println("Serial 7: ON");
      break;
      case 'w':
        digitalWrite(8, HIGH);
        Serial.println("Serial 2: ON");
      break;
      case 'e':
        digitalWrite(9, HIGH);
        Serial.println("Serial 3: ON");
      break;
      case 'r':
        digitalWrite(10, HIGH);
        Serial.println("Serial 4: ON");
      break;
      case 't':
        digitalWrite(11, HIGH);
        Serial.println("Serial 5: ON");
      break;
      case 'y':
        digitalWrite(12, HIGH);
        Serial.println("Serial 6: ON"); 
      break;
      case 'u':
        digitalWrite(13, HIGH);
        Serial.println("Serial 7: ON");
      break;
      
      case 'a':
        digitalWrite(8, LOW);
        digitalWrite(9, LOW);
        digitalWrite(10, LOW);
        digitalWrite(11, LOW);
        digitalWrite(12, LOW);
        digitalWrite(13, LOW);
        Serial.println("Serial 2: OFF");
        Serial.println("Serial 3: OFF");
        Serial.println("Serial 4: OFF");
        Serial.println("Serial 5: OFF");
        Serial.println("Serial 6: OFF");
        Serial.println("Serial 7: OFF");
      break;
      case 's':
        digitalWrite(8, LOW);
        Serial.println("Serial 2: OFF");
      break;
      case 'd':
        digitalWrite(9, LOW);
        Serial.println("Serial 3: OFF");
      break;
      case 'f':
        digitalWrite(10, LOW);
        Serial.println("Serial 4: OFF");
      break;
      case 'g':
        digitalWrite(11, LOW);
        Serial.println("Serial 5: OFF");
      break;
      case 'h':
        digitalWrite(12, LOW);
        Serial.println("Serial 6: OFF");
      break;
      case 'j':
        digitalWrite(13, LOW);
        Serial.println("Serial 7: OFF");
      break;
   }
  }
 }
 








 
