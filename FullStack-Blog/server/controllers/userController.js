const User = require("../model/userModel");


const signUpUser = async(request,response) => {
     try{
    const user = request.body;
    const newUser = User(user)
    await newUser.save()
    return response.status(200).json({msg: "signup successfull"})
     }catch(err){
      response.status(500).json({msg :"error while signup the user"})
     }
}

module.exports = {signUpUser}