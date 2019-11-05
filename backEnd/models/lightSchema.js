const mongoose = require('mongoose')


//Create model for lights

const lightSchema = mongoose.Schema({
    state: {type: Boolean, required: true},
    roomNumber: {type: Number, required: true},
    totalOnTime: {type: Number, required: true}
})


const Light = mongoose.model('Light', lightSchema)

module.exports = Light