import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRoutes from "./routes/emailRoutes.js";
import connectDb from "./connection/connectDb.js";
import router from './routes/user.js';
import cookieParser from "cookie-parser";
import carRoute from "./routes/car.js";
import bookingRoute from "./routes/booking.js";
import paymentRoute from "./routes/payment.js";
dotenv.config();
const app = express();
connectDb();
// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
// Routes
app.use("/api/email", emailRoutes);
app.use('/api/user',router)
app.use('/api/cars',carRoute);
app.use('/api/bookings',bookingRoute);
app.use('/api/payments',paymentRoute);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
