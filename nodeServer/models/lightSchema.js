const mongoose = require('mongoose')


const lightSchema = mongoose.Schema({
    state: {type: Boolean, required: true},
    roomNumber: {type: Number, required: true},
    totalOnTime: {type: Number, required: true}
})


const Light = mongoose.model('Light', lightSchema)

module.exports = Light