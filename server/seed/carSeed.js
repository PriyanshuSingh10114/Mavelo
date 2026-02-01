const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDb=require('../connection/connectDb.js');
const Car = require('../model/carModel.js');
const carData=require('../../../Mavelo/client/Cars.json');
dotenv.config();
async function seedCars() {
  try {
    await connectDb();
    console.log("Connected to MongoDB");

    await Car.deleteMany();

    const mappedCars = carData.map(car => ({
      name: car.name,
      brand: car.name.split(" ")[0], // Lamborghini, Audi, BMW etc
      type:
        car.carType === "SUV"
          ? "SUV"
          : car.carType === "Sports Car"
          ? "Coupe"
          : "Sedan", // map safely to enum

      pricePerDay: Number(car.price),
      seats: Number(car.passengers),
      fuelType: "Petrol", // default (can refine later)
      transmission: car.transmission === "auto" ? "Automatic" : "Manual",
      image: [car.image],
      available: true,
      location: "Delhi"
    }));

    await Car.insertMany(mappedCars);

    console.log("✅ Dummy cars seeded successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding car data:", err);
    process.exit(1);
  }
}
seedCars();