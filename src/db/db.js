const mongoose = require('mongoose')

    mongoose.connect('mongodb://localhost/adc-api', {
        useNewUrlParser: true,
        useUniFiedTopology: true

    }).then(() => { 
        console.log('Mongo connected')

    }).catch(err => {
        console.log(err)
    })

    module.exports = mongoose