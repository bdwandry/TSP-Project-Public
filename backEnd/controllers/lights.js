const lightsRouter = require('express').Router()
const udpHelper = require('../utils/udpHelper')
const datagram = require('../UDP/datagram')
const config = require('../utils/config')
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

 lightsRouter.put('/:roomNumber', async (request, response, next) => {
   
    const body = request.body
    try {
        if (body.roomNumber == 7) {

            await Light.updateMany({ }, { $set : { state : body.state } }, { new : true}, (error, doc) => {
                arduino.arduinoSend(body.roomNumber, body.state)
                
                if(doc === undefined) {
                    response.send("incorrect query")

                } else {
                    response.send(doc.toJSON())
                }

            });
        }

        else {
            await Light.findOneAndUpdate({ roomNumber : body.roomNumber }, { $set : { state : body.state } }, { new : true}, (error, doc) => {
                //datagram.sendUDP(doc.toJSON())
                
                arduino.arduinoSend(body.roomNumber, body.state)
                
                if(doc === undefined) {
                    response.send("incorrect query")
                } else {
                    response.send(doc.toJSON())
                }
                
                
                
            });
        }
        

   } catch (error) {
    next(error)
   }  
 })


module.exports = lightsRouter

