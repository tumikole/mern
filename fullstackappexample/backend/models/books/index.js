const mongoose = require('mongoose');
// const { Schema } = mongoose;


const booksSchema = mongoose.Schema({
title:{
    type: 'string',
    required: true
},

description:{
    type: 'string',
    required: true
},
date:{
    type:  Date,
    default: new Date
}
})

module.exports = mongoose.model('books' , booksSchema)