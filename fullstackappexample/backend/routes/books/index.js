const Books = require('../../models/books')
const {validateToken} = require("../../security/tokenHelper")


const books = (app) => {
    app.get('/books' , validateToken,  async (req ,res) =>  {
        try{
            const books = await Books.find()
            res.send(books)
        }catch(err){
            console.log(err)
        }
    })

    app.get('/books/:id' , async (req ,res) =>  {
        const {id} = req.params 
        try{
            const foundBook = await Books.findOne({_id: `${id}`})
            console.log("foundBook" , foundBook)
            res.send(foundBook)
        }catch(err){
            console.log(err)
        }
    })

    app.put('/books/:id' , async (req ,res) =>  {
        const {id} = req.params
        const {title, description} = req.body
        try{
            const foundBook = await Books.findOneAndUpdate({_id: `${id}`} , { title, description})
            res.send(foundBook)
        }catch(err){
            console.log(err)
        }
    } )

    app.post('/books' , async (req , res)  =>  {
        try{
            const {title , description} = req.body
            if(title == "" || description == ""){
                return res.send(400)
            }

            const books =  new Books({title , description }) 
            const value =  await books.save()   
            console.log(value)      
            res.send(value)
        }catch(err){
            console.log(err);
            res.send(501)
        }
    })

    app.delete('/books/:id' , async (req , res)  =>  {
        try{
            const {id} = req.params                       
            const book = await Books.deleteOne({_id : id})
            res.send(book)
        }catch(err){
            console.log(err);
            res.send(501)
        }
    })
} 



module.exports = {books}