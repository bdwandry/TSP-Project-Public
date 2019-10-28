const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const httpServer = http.createServer(app)

httpServer.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
})

