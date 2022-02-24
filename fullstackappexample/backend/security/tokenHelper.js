var jwt = require('jsonwebtoken');
require('dotenv').config()

const createToken = (userDetail) => {
    var token = jwt.sign({dateToExpire: new Date().setHours(new Date().getHours() + 1) , 
         email: userDetail.email , id : userDetail._id}, process.env.SECRET);
    return token
}

const validateToken = (req ,res , next) => {
    try{
        const token = req.headers.authorization
        var decoded = jwt.verify(token, process.env.SECRET);
        console.log("decoded" , decoded)
        next()
    }catch(e){
        console.log(e)
        return res.send(401)
    }
}


module.exports = {createToken , validateToken}



