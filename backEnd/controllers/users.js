const usersRouter = require('express').Router()
const User = require('../models/userSchema')
const bcrypt = require('bcryptjs')

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users.map(u => u.toJSON()))
    
})

usersRouter.post('/', async (request, response, next) => {
    
    const body = request.body
    const satlRounds = 10

    if (body.password.length < 6) {
        response.send("password has to be more than 6 characters")

    } else {

        try {

            bcrypt.hash(body.password, satlRounds, async (error, hash) => {

                const user = new User({
                    userName: body.userName,
                    email: body.email,
                    password: hash,
                    admin: body.admin
                })

                const newUser = await user.save()
                response.json(newUser)

            })

        } catch (error) {
            next(error)
        }

    }

})

usersRouter.delete('/:user', async (request, response, next) => {
    const body = request.body
    await User.findOneAndRemove({userName: body.userName}, (error, docs) => {

        if (docs) {
            response.send(`${body.userName} deleted`)
        } else {
            response.send("userName doesn't exist")
        }
        next(error)
    })
    
})


module.exports = usersRouter