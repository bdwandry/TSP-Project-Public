if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}


let PORT = process.env.PORT
let UDP_PORT = process.env.UDP_PORT
let UDP_HOST = process.env.UDP_HOST
let MONGODB_URI = process.env.MONGODB_URI

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