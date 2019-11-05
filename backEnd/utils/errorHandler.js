
//When client/user requests page which not exist
//response 404, unknown endpoint

const unknownEndpoint = (request, response) => {
    response.status(404).send('Unknown endpoint!')
}


//response when error occurs
//Needed error types will be found during testing

const commonErrors = (error, request, response, next) => {

}


module.exports = {
    unknownEndpoint,
    commonErrors
}