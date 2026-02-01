const Booking=require('../model/booking.js');
const Car=require('../model/carModel.js');
async function createBooking(req,res){
    const {carId,startDate,endDate}=req.body;
    if(!carId ||!startDate ||!endDate){
        return res.status(400).json({message:"All fields are required"});
    }
    const car=await Car.findById(carId);
    if(!car || !car.available){
        return res.status(404).json({message:"Car not available"});
    }
    const start=new Date(startDate);
    const end=new Date(endDate);
    if(start>=end){
        return res.status(400).json({message:"Invalid date range"});
    }
    const overlapping = await Booking.findOne({
        car: carId,
        status: { $in: ["pending", "confirmed"] },
        $or: [
        { startDate: { $lte: end }, endDate: { $gte: start } },
        ],
    });
    if(overlapping){
        return res.status(409).json({message:"Car already booked for the selected dates"});
    }
    const totalDays=Math.ceil((end-start)/(1000*60*60*24));
    const totalAmount=totalDays*car.pricePerDay;
    const booking=await Booking.create({
        user:req.userId,
        car:carId,
        startDate:start,
        endDate:end,
        totalDays,
        totalAmount,
    });
    res.status(201).json({message:"Booking created successfully",booking});
}
async function getMyBooking(req,res){
    const bookings=await Booking.find({user:req.userId}).populate('car');
    res.status(200).json({bookings});
}
async function updateBookingStatus(req,res){
    const {status}=req.body;
    const booking=await Booking.findById(req.params.id);
    if(!booking){
        return res.status(404).json({message:"Booking not found"});
    }
    booking.status=status;
    await booking.save();
    if (status === "confirmed") {
        await Car.findByIdAndUpdate(booking.car, { available: false });
    }

    if (status === "cancelled" || status === "completed") {
        await Car.findByIdAndUpdate(booking.car, { available: true });
    }

    res.status(200).json({message:"Booking status updated successfully",booking});
}
async function cancelBooking(req,res){
    const booking=await Booking.findById(req.params.id);
    if(!booking){
        return res.status(404).json({message:"Booking not found"});
    }
    if(booking.user.toString()!==req.userId){
        return res.status(403).json({message:"Forbidden"});
    }
    if(new Date()>=booking.startDate){
        return res.status(400).json({message:"Cannot cancel booking that has already started"});
    }
    booking.status='Cancelled';
    await booking.save();
    res.status(200).json({message:"Booking cancelled successfully",booking});
}
module.exports={
    createBooking,
    getMyBooking,
    updateBookingStatus,
    cancelBooking,
}