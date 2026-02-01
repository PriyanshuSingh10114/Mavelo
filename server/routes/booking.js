const express=require('express');
const bookingRoute=express.Router();
const {createBooking, getMyBooking,updateBookingStatus,cancelBooking}=require('../controller/booking.js');
const authMiddleware = require('../middleware/auth.js');
bookingRoute.post('/',authMiddleware,createBooking);
bookingRoute.get('/my-bookings',authMiddleware,getMyBooking);
bookingRoute.put('/:id/status',authMiddleware,updateBookingStatus);
bookingRoute.put('/:id/cancel',authMiddleware,cancelBooking);
module.exports=bookingRoute;