import express from 'express';
import {getCarById, getAllCars, updateCar, deleteCar, addCar} from '../controller/car.js';
const carRoute=express.Router();
carRoute.get('/',getAllCars);
carRoute.get('/:id',getCarById);

carRoute.post('/',addCar);
carRoute.put('/:id',updateCar);
carRoute.delete('/:id',deleteCar);
export default carRoute;