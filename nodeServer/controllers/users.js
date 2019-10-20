const usersRouter = require('express').Router()


usersRouter.get('/', async (request, response) => {
    response.send('tästä löytyy sitten käyttäjät')
})

usersRouter.post('/', async (request, response, next) => {
    response.send('lisää ihminen')
})

usersRouter.delete('/:user', async (request, response, next) => {

})


module.exports = usersRouter