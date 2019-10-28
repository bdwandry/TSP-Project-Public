const dgram = require('dgram')
const udpServer = dgram.createSocket('udp4')
const config = require('../utils/config')
const udpHelper = require('../utils/udpHelper')


//"Confirmation" that server is listening incoming udp messages

udpServer.on('listening', () => {
    const address = udpServer.address()
    console.log(`UDP SERVER listening on address: ${address.address} and port: ${address.port}`)
})


//receive message from arduino and use udpHelper's function to save info to database
//Forward message to front-end

udpServer.on('message', (message, addressInfo) => {
    console.log(`Message from ARDUINO: ${message}`)
    console.log(`Address: ${addressInfo.address}:${addressInfo.port}`)
    udpHelper.updateDB(message)
})


//Get necessary info from controllers/lights.js and send it to arduino

const sendUDP = (message) => {

    //Parse message for sending
    let state = message.state.toString()
    let roomNumber = message.roomNumber.toString()
    let lightInfo = Buffer.from(state + ' ' + roomNumber)

    udpServer.send(lightInfo, config.UDP_PORT, config.UDP_HOST, (error) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log(`UDP message ${lightInfo} succesfully sent to ${config.UDP_HOST}:${config.UDP_PORT}`)
        }
    })
}


//If errors occur while listening -> print it

udpServer.on('error', (error) => {
    console.log(`server error: ${error.stack}`)
})


module.exports = {
    udpServer,
    sendUDP
}

