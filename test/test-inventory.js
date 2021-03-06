const chai = require('chai'),
    chaiHttp = require('chai-http'), {app} = require('../index'),
    {Apparel, Electronics, Homegoods} = require('../models/Inventory'),
    should = chai.should()

chai.use(chaiHttp)

describe('Apparel Path', () => {
    it('should GET Apparel Inventory', (done) => {
         chai.request(app).get('/inventory/apparel').then((res) => {
                res.should.have.status(200)
                res.should.be.json
                res.body.should.be.an('object')
                res.body.should.have.property('_id')
                res.body.should.have.property('apparelData').with.lengthOf(18)
                done()
        })
    })
})

describe('Electronics Path', () => {
    it('should GET Electronics Inventory', (done) => {
         chai.request(app).get('/inventory/electronics').then((res) => {
              res.should.have.status(200)
                res.should.be.json
                res.body.should.be.an('object')
                res.body.should.have.property('_id')
                res.body.should.have.property('electronicsData').with.lengthOf(8)
                done()
         })        
    })
})

describe('Homegoods Path', () => {
    it('should GET Homegoods Inventory', (done) => {
         chai.request(app).get('/inventory/homegoods').then((res) => {
              res.should.have.status(200)
                res.should.be.json
                res.body.should.be.an('object')
                res.body.should.have.property('_id')
                res.body.should.have.property('homegoodsData').with.lengthOf(9)
                done()
         })        
    })
}) 