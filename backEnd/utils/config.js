
//if not using production mode -> use .env variables

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

//Variables are defined in .env file

let PORT = process.env.PORT
let UDP_PORT = process.env.UDP_PORT
let UDP_HOST = process.env.UDP_HOST
let MONGODB_URI = process.env.MONGODB_URI


//if using test mode -> use different port and mongo table

if (process.env.NODE_ENV === 'test') {
    PORT = process.env.TEST_PORT
    MONGODB_URI = process.env.TEST_MONGODB_URI
}

module.exports = {
    PORT,
    UDP_HOST,
    UDP_PORT,
    MONGODB_URI
}