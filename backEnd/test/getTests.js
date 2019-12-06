let chai = require('chai')
let chaiHttp = require('chai-http')
var should = chai.should()
chai.use(chaiHttp)
let server = require('../index')

describe('getTest', () => {
 describe('/GET user', () => {
     it('it should GET all the users', (done) => {
     chai.request(server)
       .get('/users')
       .end((err, res) => {
             res.should.have.status(200)
             res.body.should.be.a('array')
             done()
          })
       })
  })
  
  
  describe('/GET lights', () => {
     it('it should GET all the lights', (done) => {
     chai.request(server)
         .get('/lights')
         .end((err, res) => {
               res.should.have.status(200)
               res.body.should.be.a('array')
               done()
            })
         })
     })
})

