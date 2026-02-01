# Mavelo 🚗 Luxury Car Rental Web App

[Live Demo](https://mavelo-cars.onrender.com)

## Overview

Mavelo is a modern full-stack car rental web application built with React (frontend) and Node.js/Express (backend).  
It allows users to browse a curated fleet of luxury cars, filter/search by type, and make rental bookings — with booking requests sent to admin **and** confirmation emails sent to customers automatically.

---

## Features

- Browse luxury cars with details such as doors, passengers, transmission, luggage capacity, price/day.  
- Filter and search cars by name, type, and other attributes.  
- Responsive UI with modern design and smooth animations (powered by Framer Motion + Tailwind CSS).  
- Car details page with “Rent Now” modal for booking.  
- Booking form collects user details, rental dates, pick-up & drop-off locations, etc.  
- Backend email integration using Nodemailer: sends booking info to admin and confirmation to customer.  
- Newsletter subscription and contact form (with email handling).  
- Config via environment variables (.env) for secure email credentials.

---

## 📁 Repository Structure

/ (root)
├── client/ # React frontend
├── server/ # Express backend (email & booking logic)
├── Cars.json # Car data (fleet)
├── README.md # This file
└── package.json # Root metadata

markdown
Copy code

- `client/` — Contains React components, routes (car listing, car details, bookings), UI & styling.  
- `server/` — Contains email routes (`/book-car`, `/contact`, `/subscribe`) and SMTP configuration.  
- `Cars.json` — Static JSON database of cars (id, name, image, price, carType, etc.).  

---

## 🛠️ Getting Started — Local Setup

### Prerequisites

- Node.js (v14 or newer recommended)  
- A Gmail account with an **App Password** for SMTP (or any valid SMTP credentials)  
- Environment variables:

```env
SMTP_USER=yourgmail@gmail.com             # Gmail address (or SMTP user)
SMTP_PASS=your_app_password               # Gmail “App Password” (not login password)
Installation & Running
bash
Copy code
# 1. Clone the repo
git clone https://github.com/PriyanshuSingh10114/Mavelo.git
cd Mavelo

# 2. Setup backend
cd server
npm install
# create a .env file with SMTP_USER & SMTP_PASS
node server.js               # start Express server (default port 5000)

# 3. Setup frontend
cd ../client
npm install
npm run start              # start React app (default port 3000)
Then open http://localhost:3000 in your browser. The backend must be running for booking/email features to work.

Usage
Browse the car catalog on the home page — use the sidebar filters or search bar.

Click “Details” on any car to view full specs and “Rent Now.”

Fill in the booking form (name, email, phone, pick-up & drop-off dates/locations, notes).

Submit booking — you should see a success modal.

Admin receives booking email; the customer gets booking confirmation via email.

📬 Make sure your SMTP credentials are valid and, if using Gmail, that less-secure app access or app-password is configured.

Contributing
Contributions are welcome!

To contribute:

Fork the repository.

Create a new branch: git checkout -b feature/your-feature.

Make your changes and ensure code quality.

Submit a Pull Request describing your changes.

Please follow the existing code style (React + Tailwind + functional components).

Future Roadmap / Ideas
Persist bookings in a database (e.g. MongoDB) so admin can view booking history.

User authentication & dashboard — allow users to view their bookings, manage profile.

Payment integration — add payment gateway for booking confirmation.

Better UI/UX improvements — calendar date-picker improvements, better modal transitions, email templates.

Admin dashboard — manage cars, bookings, edit car data.

License
This project is provided under the MIT License. Feel free to use, modify, or deploy as you like.

Acknowledgments
Inspired from various full-stack car-rental tutorials and built using:

React

Express

Nodemailer

Tailwind CSS

Framer Motion
