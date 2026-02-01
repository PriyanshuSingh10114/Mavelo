const Stripe = require('stripe');
console.log('payment controller file loaded');
const stripe=new Stripe(process.env.STRIPE_SECRET_KEY);
const Booking=require('../model/booking.js');
const { use } = require('react');
async function createPaymentIntent(req,res){
    console.log('createPaymentIntent called');
    console.log('Request body:', req.body);
    try {
        const {bookingId}=req.body;
        console.log('Booking ID:', bookingId);
        const booking=await Booking.findById(bookingId)
        if(!booking){
            return res.status(404).json({message:"Booking not found"});
        }
        const paymentIntent=await stripe.paymentIntents.create({
            amount:booking.totalAmount*100,
            currency:'inr',
            metadata:{
                bookingId:booking._id.toString(),
                userId:booking.user.toString(),
            },
        });
        res.status(200).json({clientSecret:paymentIntent.client_secret});

    } catch (error) {
            console.error("❌ Stripe Error FULL:", error);
            console.error("❌ Stripe Error message:", error.message);
            console.error("❌ Stripe Error type:", error.type);

            res.status(500).json({
                message: error.message || "Payment failed",
            });
    }
};
module.exports={createPaymentIntent};