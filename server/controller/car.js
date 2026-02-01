const Car=require('../model/carModel.js');
async function addCar(req,res){
    const car=await Car.create(req.body);
    res.status(201).json({message:"Car added successfully",car});
}
async function getAllCars(req,res){
    const cars=await Car.find({available:true});
    if(cars.length===0){
        return res.status(404).json({message:"No cars available"});
    }
    res.status(200).json({cars});
}
async function getCarById(req,res){
    const car=await Car.findById(req.params.id);
    if(!car){
        return res.status(404).json({message:"Car not found"});
    }
    res.status(200).json({car});
}
async function updateCar(req,res){
    const car=await Car.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!car){
        return res.status(404).json({message:"Car not found"});
    }
    res.status(200).json({message:"Car updated successfully",car});
}
async function deleteCar(req,res){
    const car=await Car.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"Car deleted successfully"});
}
module.exports={
    addCar,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar
}