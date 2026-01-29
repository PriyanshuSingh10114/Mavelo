const mongoose= require('mongoose');
const bookingSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    car:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Car',
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    totalDays:{
        type:Number,
        required:true
    },
    totalAmount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:['Pending','Confirmed','Cancelled','Completed'],
        default:'Pending'
    },
},{timestamps:true});
const Booking=mongoose.models.Booking || mongoose.model('Booking',bookingSchema);
module.exports=Booking;