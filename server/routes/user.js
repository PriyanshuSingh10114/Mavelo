import {handleSignup, handleLogin,getProfile, logout} from '../controller/user.js';
import express from 'express';
import authMiddleware from '../middleware/auth.js';
const router=express.Router();
router.post('/signup',handleSignup);
router.post('/login',handleLogin);
router.get('/profile',authMiddleware,getProfile);
router.post('/logout',authMiddleware,logout);
export default router;