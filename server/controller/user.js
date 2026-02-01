const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
async function handleSignup(req,res){
    const {name,email,password}=req.body;
    // Add your signup logic here (e.g., save user to database)
    if(!name || !email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    const existingUser=await User.findOne({email});
    if(existingUser){
        return  res.status(409).json({message:"User already exists"});
    }
    const hashedPassword=await bcrypt.hash(password,10);
    await User.create({
        name,
        email,
        password:hashedPassword,
    }).then(()=>{
        res.status(201).json({message:"User signed up successfully"});
    })
}
async function handleLogin(req,res){
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({message:"Email and password are required"});
    }
    const user=await User.findOne({email});
    if(!user){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const token=jwt.sign({
        userId:user._id}, 
        process.env.JWT_SECRET, 
        {expiresIn:'7d'}
    );
    res.cookie('token',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV==='production',
        sameSite:'strict',
        maxAge:7*24*60*60*1000,
    });
    res.status(200).json({message:"Login successful",user:{
        id:user._id,
        name:user.name,
        email:user.email,
    },
});
}
async function getProfile(req,res){
    const user=await User.findById(req.userId).select('-password');
    res.status(200).json({user});
}
function logout(req,res){
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
    });

    res.json({ message: "Logged out successfully" });
}
module.exports={handleSignup,handleLogin,getProfile,logout};