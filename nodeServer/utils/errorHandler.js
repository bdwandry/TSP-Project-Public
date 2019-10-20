
//responses when address not found
const unknownEndpoint = (request, response) => {
    response.status(404).send('UNKNOWN ENDPOINT ELI TÄÄLTÄ EI LÖYDY MITÄÄN')
}

//handler for common errors
const commonErrors = (error, request, response, next) => {

}


module.exports = {
    unknownEndpoint,
    commonErrors
}