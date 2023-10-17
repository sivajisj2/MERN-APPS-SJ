const User = require("../model/userModel");


const signUpUser = async(req,res) => {
     try{
    const user = req.body;
    const newUser = User(user)
    await newUser.save()
    return res.status(200).json({msg: "signup successfull"})
     }catch(err){
      res.status(500).json({msg :"error while signup the user"})
     }
}

module.exports = {signUpUser}