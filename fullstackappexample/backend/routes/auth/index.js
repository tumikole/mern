const Students = require('../../models/students')
const {hashPassword , comparePassword} = require('../../security/passwordHelper');
const students = (app) => {
    app.post('/sign-in' , async (req ,res) =>  {
        const {email , password} = req.body
        try{ 
            const foundUser = await Students.findOne({email : email})

            if(foundUser !== null){
                return res.status(400).send({error: "email already exists"})
            }

            const hashedPassword = await hashPassword(password)            
            const student = new Students({email , password: hashedPassword}) 
            const record = await student.save() 
            res.send(record)
        }catch(err){
            console.log(err)
        }
    })
    
    app.post('/login' , async (req ,res) =>  {
        const {email , password} = req.body
        try{ 
            const foundUser = await Students.findOne({email : email})
            
            if(!foundUser){
                return res.send("password or email is incorrect ")
            }

            if(foundUser){
                const isPasswordCorrect = await comparePassword(password , foundUser.password)
                if(isPasswordCorrect){
                   return res.send('you password is correct')
                }else{
                  return   res.send("password or email is incorrect ")
                }
            }

          
        }catch(err){
            console.log(err)
        }
    })


}


module.exports  = {students}