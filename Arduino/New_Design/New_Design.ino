int LED = 12;
int BUTTON = 4;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(LED, OUTPUT);
  pinMode(BUTTON, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  if (digitalRead(BUTTON) == HIGH) {
    Serial.println("ON");
  } else {
    Serial.println("ON");
  }
}
