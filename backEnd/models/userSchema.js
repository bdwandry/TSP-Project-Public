const mongoose = require('mongoose')


//Create model for users

const userSchema = mongoose.Schema({
    userName: {type: String, required: true},

})

const User = mongoose.model('User', userSchema)

module.exports = User