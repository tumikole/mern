const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = async (password)  => {
    try{
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        return hashedPassword
    }catch(e){
        console.log(e)
    }
}

const comparePassword = async  (password , dbPassword) => {
    const isPasswordCorrect = bcrypt.compare(password, dbPassword)
    return isPasswordCorrect

}  

module.exports = {comparePassword , hashPassword}
// Load hash from your password DB.