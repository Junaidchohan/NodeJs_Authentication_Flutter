const express = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/user");
const authRouter = express.Router();


//  Registring and Logging in the users
// Signup route

authRouter.post("/api/signup", async (req, res) =>{
try{
const {name, email, password} =req.body;
    // Check if user exists
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({msg:"User with same email already exists!" });
    }

     // Create user
    const hashedPassword = await bcryptjs.hash(password, 8);
    let user = new User({
        email,
        password: hashedPassword,
        name
    });
    user = await user.save();
    res.json(user);
     // Return without password
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
}catch(e){
res.status(500).json({error: e.message});
}
});


// SignIn route

authRouter.post("/api/signin", async (req, res) => {
try{
const {email, password} =req.body;
    // Check if user exists
    const user = await User.findOne({email});
       if(!user){
        return res.status(400).json({msg:"User with this email does not exists!" });


    }
     const isMatch = await bcryptjs.compare(password, user.password);
     if(!isMatch){
        return res.status(400).json({msg:"Incorrect password." });
       }

          const token = jwt.sign({id: user._id}, "passwordKey");
          res.json({token, ...user.doc});
}catch(e){
res.status(500).json({error: e.message});
}
});

module.exports = authRouter;