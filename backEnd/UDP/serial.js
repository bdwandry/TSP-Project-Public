const arduinoHelper = require('../utils/arduinoHelper')
const Light = require('../models/lightSchema')
const SerialPort = require("serialport");
const Readline = require('@serialport/parser-readline');

const port = new SerialPort('COM6', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));


//Open serialport and start listening incoming messages
const arduinoOpen = () => {
    port.on("open", () => {
        console.log('Serial connection on');
        parser.on('data', async (data) => {

          //call lightChanges function in ../utils/arduinoHelper.js
          let lightObject = arduinoHelper.lightChanges(data)
         
          try {

            if (lightObject.roomNumber == 1) {
    
                await Light.updateMany({ }, { $set : { state : lightObject.state } }, { new : true}, (error, doc) => {
                  if (error) {
                    console.log("eerrorr")
                  }
                })
            }
    
            else if (lightObject.roomNumber >= 2) {
    
              Light.findOneAndUpdate({ roomNumber : lightObject.roomNumber }, { $set : { state : lightObject.state } }, { new : true}, (error, doc) => {
                
                if (error) {
                  console.log("eerrorr2")
                }
               
              })
            }
            
          } catch (error) {
            console.log(error)
          }  
          
        })
    })
}


//RoomNumber and state comes from ../controllers/lights.js
//Send message to arduino which lights to be changed
const arduinoSend = (roomNumber, state) => {

  //call lightToSwitch function in ../utils/arduinoHelper.js
  let lightToSwitch =  arduinoHelper.translateRoom(roomNumber, state)

  //send info to arduino which light will be turned on/off
  port.write(lightToSwitch, (error) => {
    if (error) {
      return console.log('Error on write: ', err.message);
    }
  });
}


module.exports = {
    arduinoOpen,
    arduinoSend
}