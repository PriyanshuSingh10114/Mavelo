const mongoose= require('mongoose');
const carSchema=new mongoose.Schema({
    name:{type:String,required:true},
    brand:{type:String,required:true},
    type:{
        type:String,
        enum:['Sedan','SUV','Convertible','Coupe','Wagon'],
        required:true
    },
    pricePerDay:{type:Number,required:true},
    seats:{type:Number,required:true},
    fuelType:{type:String,required:true},
    transmission:{type:String,required:true},
    image:[{type:String}],
    available:{type:Boolean,default:true},
    location:{type:String}
},{timestamps:true})
const Car=mongoose.models.Car || mongoose.model('Car',carSchema);
module.exports=Car;