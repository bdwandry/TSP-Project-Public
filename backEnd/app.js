
const udpServer = require('./UDP/datagram')
const config = require('./utils/config')
const express = require('express')
const errors = require('./utils/errorHandler')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const lightsRouter = require('./controllers/lights')
const usersRouter = require('./controllers/users')
const mongoose = require('mongoose')
const arduino = require('./UDP/serial')

mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
.then(() => {
    console.log('connected to MONGO')
}).catch (error => {
    console.log('error while connecting to MONGO')
})


app.use(bodyParser.json())
app.use(cors())

//take routes in use
app.use('/lights', lightsRouter)
app.use('/users', usersRouter)

//Middlewares for handling errors 
app.use(errors.unknownEndpoint)
app.use(errors.commonErrors)

arduino.arduino()

module.exports = app


