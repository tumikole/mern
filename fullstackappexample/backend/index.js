const express = require('express');
const app = express();
require('dotenv').config()
const {books} = require('./routes/books')
const mongoose = require("mongoose")
cors = require("cors")


app.use(cors())
mongoose.connect(
    process.env.DATABASE_SERVER,
  ).then(res => console.log('("i am connected to mangoDB")')).catch(err => console.log(err))

app.use(express.json())
books(app)
// console.log(book)


 app.listen(process.env.PORT,() =>  {
  console.log('Your app is listening on port ' + process.env.PORT)
 })