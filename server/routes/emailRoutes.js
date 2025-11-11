import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

/* 
  🔸 Common transporter setup for Gmail SMTP
  (you can reuse this for both subscribe and contact emails)
*/
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER, // your company email
    pass: process.env.SMTP_PASS, // your app password
  },
});

/* -----------------------------
   📩 1️⃣ Newsletter Subscription Route
----------------------------- */
router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  try {
    const mailOptions = {
      from: `"Mavelo Rentals" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Welcome to Mavelo Rentals 🚗✨",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Welcome to <span style="color:#f5b754;">Mavelo Rentals!</span></h2>
          <p>Thank you for subscribing to our updates.</p>
          <p>We’ll keep you posted with exclusive deals, new cars, and offers tailored for you.</p>
          <br />
          <p>Best regards,<br/>The Mavelo Team 🚘</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Subscription email sent to:", email);
    res.status(200).json({ success: true, message: "Subscription email sent successfully" });
  } catch (error) {
    console.error("❌ Error sending subscription email:", error);
    res.status(500).json({ success: false, message: "Failed to send subscription email" });
  }
});

/* -----------------------------
   💬 2️⃣ Contact Form Route
----------------------------- */
router.post("/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    // Email to company (you)
    const companyMailOptions = {
      from: `"Mavelo Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // send to your company email
      subject: `📩 New Contact Message: ${subject || "No Subject"}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h3>New Inquiry from Mavelo Contact Form</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="border-left: 3px solid #f5b754; padding-left: 10px;">${message}</p>
          <br/>
          <p>— Mavelo Website</p>
        </div>
      `,
    };

    // Auto-reply to sender
    const userMailOptions = {
      from: `"Mavelo Rentals" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting Mavelo Rentals 📨",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Hi ${name.split(" ")[0]},</h2>
          <p>Thank you for reaching out to <b>Mavelo Rentals</b>.</p>
          <p>We’ve received your message regarding <b>${subject || "your inquiry"}</b> 
          and our team will get back to you within 24 hours.</p>
          <br />
          <p>Meanwhile, explore our luxury fleet or follow us on social media for exclusive updates!</p>
          <br />
          <p>Best regards,<br/><b>The Mavelo Team 🚘</b></p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(userMailOptions);

    console.log("✅ Contact form email sent by:", name);
    res.status(200).json({ success: true, message: "Contact email sent successfully" });
  } catch (error) {
    console.error("❌ Error sending contact email:", error);
    res.status(500).json({ success: false, message: "Failed to send contact email" });
  }
});

export default router;
