const arduinoHelper = require('../utils/arduinoHelper')
const SerialPort = require("serialport");
const Readline = require('@serialport/parser-readline');

const port = new SerialPort('COM4', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

const arduinoOpen = () => {
    port.on("open", () => {
        console.log('Serial connection on');
        parser.on('data', (data) => {
          arduinoHelper.lightChanges(data)
        });
    });
}


const arduinoSend = (roomNumber, state) => {

  let lightToSwitch =  arduinoHelper.translateRoom(roomNumber, state)

  port.write(lightToSwitch, (err) => {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });
}


module.exports = {
    arduinoOpen,
    arduinoSend
}