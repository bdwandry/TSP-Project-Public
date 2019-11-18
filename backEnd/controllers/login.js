const jToken = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const loginRouter = require('express').Router()
const User = require('../models/userSchema')


//Client sends a request to http://localhost:5601/login 
//check credentials, and if correct, send a token to the user's browser

loginRouter.post('/', async (request, response) => {

    //save request body to the variable body (less writing) 
    const body = request.body

    //check if user exist
    const user = await User.findOne( {userName: body.userName})
    
    //response if user doesn't exist
    if (user === null) {
        response.send('userName not found')

    } else {

        //Check if passwords are the same. (The one client sent and the one in the database)
        const pw = await bcryptjs.compare(body.password, user.password)

        //if passwords match, create token and send it to client
        if (pw) {
            const userToken = {
                userName: user.userName,
                _id: user._id
            }

            const token = jToken.sign(userToken, 'lousyEncryption')

            response.send({token, userName: user.userName, email: user.email})

        //Or if password isn't correct, send "wrong password" to client    
        } else {
            response.send("Wrong password")
        }
    }
})

module.exports = loginRouter