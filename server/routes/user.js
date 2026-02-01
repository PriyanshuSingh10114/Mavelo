const {handleSignup, handleLogin,getProfile, logout}=require ('../controller/user.js');
const express=require ('express');
const authMiddleware = require('../middleware/auth.js');
const router=express.Router();
router.post('/signup',handleSignup);
router.post('/login',handleLogin);
router.get('/profile',authMiddleware,getProfile);
router.post('/logout',authMiddleware,logout);
module.exports=router;