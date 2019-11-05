
const Light = require('../models/lightSchema')


//the message parameter comes from utils/datagram.js
//then update the database

const updateDB = async (message) => {
    console.log(message)
    
    let roomNumber = "!!!!"
    let state = "!!!!"

    await Light.findOneAndUpdate({ roomNumber : roomNumber }, { $set : { state : state } }, { new : true}, (error, doc) => {
        
        if (error) {
            console.log(error)
        } else {
            console.log("updated")
        }

    });
}




const fetchFromDB = async () => {
    await Light.find({}).then(result => {
        result.forEach(l => {
            console.log(l)
        })
    })
}


module.exports = {
    updateDB,
    fetchFromDB
}