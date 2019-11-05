const usersRouter = require('express').Router()
const User = require('../models/userSchema')
const bcrypt = require('bcryptjs')

//Client send a request to http://localhost:5601/users and
//get returns all the users in json format

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users.map(u => u.toJSON()))
    
})


//Client send a request to http://localhost:5601/users 
//request constains userName (string), email (string), password(string) and admin (boolean)

usersRouter.post('/', async (request, response, next) => {
    
    //save request body to the variable body (less writing) 
    //saltRounds defines how many hashing rounds are done
    const body = request.body
    const satlRounds = 10

    //check if password is more than 6 characters
    if (body.password.length < 6) {
        response.send("password has to be more than 6 characters")

    } else {

        try {

            //do the hashing and save new user to the database
            //response back to front-end with a new user info
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

            //if error occurs, it will be forwarded to ../utils/errorHandler.js
            next(error)
        }

    }

})


//Client send a request to http://localhost:5601/users 
//delete user by it's userName (string)

usersRouter.delete('/:user', async (request, response, next) => {
    const body = request.body

    //if userName is found from database, it will be removed
    try {
        await User.findOneAndRemove({userName: body.userName}, (error, docs) => {

            if (docs) {
                response.send(`${body.userName} deleted`)
            } else {
                response.send("userName doesn't exist")
            }
            
        })
    } catch (error) {

        //if error occurs, it will be forwarded to ../utils/errorHandler.js
        next(error)
    }
    
})


module.exports = usersRouter