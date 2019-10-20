const dgram = require('dgram')
const udpServer = dgram.createSocket('udp4')
const config = require('../utils/config')
const udpHelper = require('../utils/udpHelper')


udpServer.on('listening', () => {
    const address = udpServer.address()
    console.log(`UDP SERVER listening on address: ${address.address} and port: ${address.port}`)
})

//Needs parsing from message
//save info from arduino to database

udpServer.on('message', (message, addressInfo) => {
    console.log(`Message from ARDUINO: ${message}`)
    console.log(`Address: ${addressInfo.address}:${addressInfo.port}`)
    udpHelper.updateDB(message)
})

udpServer.on('error', (error) => {
    console.log(`server error: ${error.stack}`)
})


module.exports = {
    udpServer
}


//Kun frontilta tulee pyyntö muuttaa lampun tilaa, niin kyseinen objekti
//välitetään suoraan datagrammille, josta sitten lampun tila muutetaan.
//Kun lampun tila on muutettu, niin arduino lähettää siitä viestin takaisin datagrammille,
//joka taas helperin avulla päivittää databasen.
//Olisi myös hyvä saada jokin viesti siitä takaisin frontille.