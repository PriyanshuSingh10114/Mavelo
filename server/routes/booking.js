import express from 'express';
import {createBooking, getMyBooking,updateBookingStatus,cancelBooking} from '../controller/booking.js';
import authMiddleware from '../middleware/auth.js';
const bookingRoute=express.Router();
bookingRoute.post('/',authMiddleware,createBooking);
bookingRoute.get('/my-bookings',authMiddleware,getMyBooking);
bookingRoute.put('/:id/status',authMiddleware,updateBookingStatus);
bookingRoute.put('/:id/cancel',authMiddleware,cancelBooking);
export default bookingRoute;