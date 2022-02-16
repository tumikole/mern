const Books = require('../../models/books')

const books = (app) => {
    app.get('/books' , async (req ,res) =>  {
        try{
            const books = await Books.find()
            res.send(books)
        }catch(err){
            console.log(err)
        }
    })

    app.post('/books' , async (req , res)  =>  {
        try{
            const {title , description} = req.body
            const books =  new Books({title , description }) 
            const value =  await books.save()         
            res.send(201)
        }catch(err){
            console.log(err);
            res.send(501)
        }
    })
} 



module.exports = {books}