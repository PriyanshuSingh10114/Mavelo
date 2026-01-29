const express=require('express');
const paymentRoute=express.Router();
const {createPaymentIntent}=require('../controller/payment.js');
const authMiddleware = require('../middleware/auth.js');
paymentRoute.post('/create-intent',authMiddleware,createPaymentIntent);
module.exports=paymentRoute;