
//When client/user requests page which not exist
//response 404, unknown endpoint

const unknownEndpoint = (request, response) => {
    response.status(404).send('Unknown endpoint!')

    next(error)
}


//response when error occurs
//Needed error types will be found during testing

const Errors = (error, request, response, next) => {

    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' })
        
      } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
      } else if (error.name === 'JsonWebTokenError') {
        return response.status(401).json({
          error: 'invalid token'
        })
      }
    
      next(error)
    }

}


module.exports = {
    unknownEndpoint,
    Errors
}