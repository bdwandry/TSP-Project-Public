const lightsRouter = require('express').Router()
const udpHelper = require('../utils/udpHelper')
const Light = require('../models/lightSchema')
const arduino = require('../UDP/serial')

//get light info from database and
//send all info of the lights back to the front-end

lightsRouter.get('/', async (request, response) => {
    try {
        
        const lights = await Light.find({})
        response.json(lights.map(l => l.toJSON()))

    } catch (error) {
        next(error)
    }
})


//receive request from the front-end to modify light object
//do the changes to the db and
//send data to arduino as well
//and send response back to front-end 

 lightsRouter.put('/', (request, response, next) => {
   
    //save request body to the variable body (less writing) 
    const body = request.body
    const delay = 100

    try {
        arduino.arduinoSend(body.roomNumber, body.state)

        setTimeout(  () => {
        const lightFound = Light.findOne({ roomNumber : body.roomNumber})
        
            if (lightFound.state != body.state) {
                response.send("state changed")
            } else {
                response.send("nonono")
            }

        }, delay);


    } catch (error) {
        next(error)
    }
        

 })


module.exports = lightsRouter

