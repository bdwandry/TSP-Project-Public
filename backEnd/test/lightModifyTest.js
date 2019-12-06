let chai = require('chai')
let chaiHttp = require('chai-http')
var should = chai.should()
chai.use(chaiHttp)
let server = require('../index')

describe('modifyLights', () => {
 describe('/PUT lights', () => {
     it('it should change the state of a light', (done) => {
     chai.request(server)
       .put('/lights')
       .type('form')
       .send({
           "state": "true",
           "roomNumber": "3"
       })
       .end((err, res) => {
             res.should.have.status(200)
             
             done()
          })
       })
  })
})

