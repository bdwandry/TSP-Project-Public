const SerialPort = require("serialport");
const Readline = require('@serialport/parser-readline');

const port = new SerialPort('COM6', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

const arduino = () => {
    port.on("open", () => {
        console.log('open');
        parser.on('data', (data) => {
          console.log(data);
        });
    });
}

port.write('hello from node\n', (err) => {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('message written');
  });



module.exports = {
    arduino
}