const mongoose = require('mongoose')
const uniquevalidator = require('mongoose-unique-validator')


//Create model for users

const userSchema = mongoose.Schema({
    userName: {
        type: String, 
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required:true
    },
    admin: {
        type: Boolean
    }
})

userSchema.plugin(uniquevalidator)
const User = mongoose.model('User', userSchema)

module.exports = User