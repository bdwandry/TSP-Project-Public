const usersRouter = require('express').Router()


usersRouter.get('/', async (request, response) => {
    response.send('')
})

usersRouter.post('/', async (request, response, next) => {
    response.send('')
})

usersRouter.delete('/:user', async (request, response, next) => {
    response.send('')
})


module.exports = usersRouter