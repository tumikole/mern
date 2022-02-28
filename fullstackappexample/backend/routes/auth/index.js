const Students = require('../../models/students')
const {createToken} = require('../../security/tokenHelper')
const {hashPassword , comparePassword} = require('../../security/passwordHelper');
const students = (app) => {
    app.post('/sign-up' , async (req ,res) =>  {
        const {email , password} = req.body
        try{ 
            const foundUser = await Students.findOne({email : email})
            if(foundUser !== null){
                return res.send({token: null , error: "email already exists"})
            }

            const hashedPassword = await hashPassword(password)            
            const student = new Students({email , password: hashedPassword}) 
            const record = await student.save() 
            const token = createToken(record)

            return res.send({error: null , token: token})
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
                    const token = createToken(foundUser)
                    return res.send({token})
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
