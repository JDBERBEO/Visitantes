const { Schema, model } = require('mongoose');
//const QueryString = require('qs');

const Visitor = new Schema({
    name : {
        type: String,
        default: 'Anonimo',
},
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

module.exports = model('Visitor', Visitor)