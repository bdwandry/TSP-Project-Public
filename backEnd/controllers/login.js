const jToken = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const loginRouter = require('express').Router()
const User = require('../models/userSchema')

loginRouter.post('/', async (request, response) => {
    const body = request.body

    const user = await User.findOne( {userName: body.userName})
    
    if (user === null) {
        response.send('userName not found')

    } else {
        const pw = await bcryptjs.compare(body.password, user.password)

        console.log(user.userName)
        console.log(user.password)

        if (pw) {
            const userToken = {
                userName: user.userName,
                _id: user._id
            }

            const token = jToken.sign(userToken, 'salainen')

            response.send({token, userName: user.userName, email: user.email})

        } else {
            response.send("Wrong password")
        }
    }
})

module.exports = loginRouter