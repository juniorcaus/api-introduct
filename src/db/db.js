const mongoose = require('mongoose')

    mongoose.connect('mongodb://localhost/adc-api', {
        useCreateIndex: true
    }).then(() => { 
        console.log('Mongo connected')
    }).catch(err => {
        console.logo(err)
    })

    module.exports = mongoose