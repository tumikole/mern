const mongoose = require('mongoose');
// const { Schema } = mongoose;


const studentsSchema = mongoose.Schema({
email:{
    type: 'string',
    required: true
},
password:{
    type: 'string',
    required: true
},
date:{
    type:  Date,
    default: new Date
}
})

module.exports = mongoose.model('students' , studentsSchema)