// Get info from database and prepare it
// for sending to arduino

const Light = require('../models/lightSchema')

let info1 = Buffer.from('TURN ON')
let info2 = Buffer.from('TURN OFF')

//get the info from db first
//don't create new model
const updateDB = async (message) => {
    console.log(message)
    await Light.updateOne({}, {state: true})
}


const fetchFromDB = async () => {
    Light.find({}).then(result => {
        result.forEach(l => {
            console.log(l)
        })
    })

}


module.exports = {
    info1,
    info2,
    updateDB,
    fetchFromDB
}