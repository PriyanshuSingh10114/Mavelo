import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

/* -----------------------------
   💠 Nodemailer Transporter
----------------------------- */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* -----------------------------
   1️⃣ NEWSLETTER SUBSCRIPTION
----------------------------- */
router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    await transporter.sendMail({
      from: `"Mavelo Rentals" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Welcome to Mavelo Rentals 🚗✨",
      html: `
        <h2>Thanks for subscribing!</h2>
        <p>You’ll now receive exclusive deals and luxury car updates.</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/* -----------------------------
   2️⃣ CONTACT FORM
----------------------------- */
router.post("/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    // Email to company
    await transporter.sendMail({
      from: `"Mavelo Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `📩 New Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // Auto reply to customer
    await transporter.sendMail({
      from: `"Mavelo Rentals" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We Received Your Message 📨",
      html: `
        <h2>Hello ${name.split(" ")[0]},</h2>
        <p>Your message has been received. Our team will contact you soon.</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/* -----------------------------
   3️⃣ CAR BOOKING (MAIN FEATURE)
----------------------------- */
router.post("/book-car", async (req, res) => {
  const {
    fullName,
    email,
    phone,
    carType,
    pickUpLocation,
    dropOffLocation,
    pickUpDate,
    returnDate,
    notes,
    carName,
    carPrice,
  } = req.body;

  try {
    /* -------------------------------------------
       1️⃣ EMAIL TO YOU (ADMIN)
    --------------------------------------------*/
    const adminMail = {
      from: `"Mavelo Rentals" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `📌 New Car Booking: ${carName}`,
      html: `
        <h2>New Car Booking Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Car Selected:</strong> ${carName} (${carType})</p>
        <p><strong>Price Per Day:</strong> $${carPrice}</p>
        <br/>
        <p><strong>Pick-Up Location:</strong> ${pickUpLocation}</p>
        <p><strong>Drop-Off Location:</strong> ${dropOffLocation}</p>
        <p><strong>Pick-Up Date:</strong> ${pickUpDate}</p>
        <p><strong>Return Date:</strong> ${returnDate}</p>
        <br/>
        <p><strong>Notes:</strong> ${notes || "None"}</p>
      `,
    };

    /* -------------------------------------------
       2️⃣ EMAIL TO CUSTOMER (FULL BOOKING SUMMARY)
    --------------------------------------------*/
    const customerMail = {
      from: `"Mavelo Rentals" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `🚗 Booking Confirmation – ${carName}`,
      html: `
        <div style="font-family:Arial;padding:20px;color:#333;">
          <h2 style="color:#28a745;">Your Booking is Confirmed! 🎉</h2>

          <p>Hello <strong>${fullName}</strong>,</p>

          <p>Thank you for choosing <strong>Mavelo Rentals</strong>.  
          Here is your complete booking summary:</p>

          <hr style="border:0;border-top:1px solid #ccc; margin:15px 0;" />

          <h3>🚗 Car Details</h3>
          <p><strong>Car Name:</strong> ${carName}</p>
          <p><strong>Car Type:</strong> ${carType}</p>
          <p><strong>Price Per Day:</strong> $${carPrice}</p>

          <h3>📍 Rental Details</h3>
          <p><strong>Pick-Up Location:</strong> ${pickUpLocation}</p>
          <p><strong>Drop-Off Location:</strong> ${dropOffLocation}</p>
          <p><strong>Pick-Up Date:</strong> ${pickUpDate}</p>
          <p><strong>Return Date:</strong> ${returnDate}</p>

          <h3>👤 Your Information</h3>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <h3>📝 Additional Notes</h3>
          <p>${notes || "No additional notes provided."}</p>

          <hr style="border:0;border-top:1px solid #ccc; margin:15px 0;" />

          <p>We will contact you shortly with further instructions!</p>

          <p>Warm regards,<br/><strong>The Mavelo Rentals Team</strong></p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMail);
    await transporter.sendMail(customerMail);

    return res.json({ success: true });
  } catch (error) {
    console.error("Booking email error:", error);
    return res.json({ success: false, error: error.message });
  }
});


export default router;
