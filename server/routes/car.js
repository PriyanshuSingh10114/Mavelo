const express=require ('express');
const carRoute=express.Router();
const {getCarById, getAllCars, updateCar, deleteCar, addCar}=require('../controller/car.js');
carRoute.get('/',getAllCars);
carRoute.get('/:id',getCarById);

carRoute.post('/',addCar);
carRoute.put('/:id',updateCar);
carRoute.delete('/:id',deleteCar);
module.exports=carRoute;