const lightsRouter = require('express').Router()
const udpHelper = require('../utils/udpHelper')
const datagram = require('../UDP/datagram')
const config = require('../utils/config')

/**
 * Response for the request to get information about lights
 * 
 * @param {object} request request a client made
 * @param {object} response promise to pass back client
 */

lightsRouter.get('/', async (request, response) => {
    response.send('returns all the rooms, including onTime, state and roomNumber')
})

lightsRouter.get('/:roomNumber', async (request, response) => {
    response.send('no ei oo sitäkään vielä...')
})


 /**
  * Modify already existing information of a room ie. lights on/off
  * 
  * @example sql query 
  */

 lightsRouter.put('/:roomNumber', async (request, response, next) => {
    console.log(request.body.state)
    datagram.udpServer.send(udpHelper.info1, config.UDP_PORT, config.UDP_HOST, (error) => {
        if (error) {
            console.log(error)
        }
        else {
            udpHelper.fetchFromDB()
            console.log(`UDP message succesfully sent to ${config.UDP_HOST}:${config.UDP_PORT}`)
        }
    })
    
 })

 lightsRouter.delete('/', async (request, response, next) => {

 })


module.exports = lightsRouter

