<div align="center">
  <h1>🏎️ Mavelo - Premium Car Rental Platform</h1>
  <p><strong>A full-stack, state-of-the-art car booking and rental application with a stunning UI and robust backend architecture.</strong></p>
</div>

---

## 🌟 Overview

Mavelo is a modern, responsive, and dynamic web application designed to streamline the car rental experience. It offers a premium user interface reminiscent of top-tier automotive brand websites, ensuring an intuitive and visually engaging experience. The application features user authentication, real-time car availability, booking management, and a seamless checkout process.

## ✨ Key Features

- **Premium UI/UX:** A stunning, highly responsive frontend built with React, providing a sleek and modern look.
- **Robust Authentication:** Secure user registration and login utilizing HTTP-only cookies and JWTs.
- **Dynamic Car Catalog:** Browse through a meticulously designed catalog of vehicles with detailed pages for each car.
- **Seamless Booking System:** Easy-to-use booking flow with a dedicated "My Bookings" dashboard for users to manage their trips.
- **RESTful API:** A fast and scalable Express.js backend handling all business logic and data processing.
- **Database Integration:** Reliable data storage utilizing MongoDB with Mongoose ODM for structured schemas.
- **Environment Driven:** Fully configurable via environment variables for easy deployment across development and production environments.

---

## 🛠️ Tech Stack

### Frontend (Client)
- **Framework:** React.js (Vite)
- **Routing:** React Router DOM
- **Styling:** Vanilla CSS / App CSS with premium aesthetics
- **State Management:** React Hooks

### Backend (Server)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Authentication:** Cookie-parser, CORS, bcrypt, jsonwebtoken

---
Live Link: https://mavelo.onrender.com
---
## 📂 Project Structure

```text
Mavelo/
├── client/                     # Frontend Application
│   ├── src/
│   │   ├── Assets/             # Images, icons, and static resources
│   │   ├── Authapi/            # API integration layer for authentication
│   │   ├── Components/         # Reusable React components (Nav, Footer, Pages)
│   │   ├── App.jsx             # Main application routing and health checks
│   │   └── index.css           # Global premium styling
│   └── package.json
│
├── server/                     # Backend API
│   ├── connection/             # MongoDB connection logic
│   ├── controller/             # Business logic for routes
│   ├── middleware/             # Custom Express middlewares (e.g., Auth)
│   ├── model/                  # Mongoose schemas (User, Car, Booking)
│   ├── routes/                 # API route definitions
│   └── server.js               # Application entry point
│
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to set up the Mavelo project locally on your machine.

Frontend (React + Vite)
│
▼
REST API (Express.js)
│
▼
MongoDB Database
│
▼
Nodemailer SMTP Service
│
▼
Customer/Admin Email Notifications

<<<<<<< HEAD
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.x or higher)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster)

### 1. Clone the Repository

```bash
git clone <repository-url>
=======
---

# Technology Stack

## Frontend

* React.js
* Vite
* React Router DOM
* Tailwind CSS
* Framer Motion
* Axios

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemailer
* dotenv
* CORS

## Deployment

Frontend:

* Render

Backend:

* Render

Database:

* MongoDB Atlas

Version Control:

* Git
* GitHub

---

# Project Structure

Mavelo
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore

---

# Database Design

## Booking Collection

Booking

* customerName
* email
* phone
* pickupLocation
* dropLocation
* pickupDate
* returnDate
* vehicleId
* vehicleName
* additionalNotes
* bookingStatus
* createdAt

## Newsletter Collection

Subscriber

* email
* subscribedAt

## Contact Collection

Contact

* name
* email
* message
* createdAt

---

# API Endpoints

## Booking APIs

POST /api/bookings

Creates a new booking request.

GET /api/bookings

Returns all booking records.

GET /api/bookings/:id

Returns a specific booking.

---

## Contact APIs

POST /api/contact

Submits customer inquiries.

---

## Newsletter APIs

POST /api/subscribe

Stores newsletter subscriptions.

---

# Security Measures

* Environment variables for secrets
* SMTP credentials hidden via .env
* Backend validation checks
* Error handling middleware
* CORS protection
* Input sanitization

---

# Installation Guide

## Clone Repository

git clone https://github.com/PriyanshuSingh10114/Mavelo.git
cd Mavelo
```

<<<<<<< HEAD
### 2. Backend Setup

Navigate to the server directory and install dependencies:

```bash
=======
---

## Backend Setup
cd server
npm install
```

Create a `.env` file in the `server` directory and add the following variables:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

Start the backend server:

```bash
npm start
# or if using nodemon
npm run dev
```
*(The terminal will log `✅ Server running on port 5000` and `Connected to MongoDB` when successful).*

### 3. Frontend Setup

Open a new terminal window, navigate to the client directory, and install dependencies:

```bash
cd client
npm install
```

Create a `.env` file in the `client` directory (if not already present):

```env
VITE_BACKEND_URL=http://localhost:5000
```

Start the frontend development server:

:point_right: *When you run the frontend, open your browser's Developer Tools (F12) > Console. You will see a stylish **✅ SUCCESS** message confirming that the frontend is perfectly connected to the backend database!*

```bash
npm run dev
```

---

## 📡 API Endpoints

Here's a quick overview of the main backend endpoints:

| Route | Method | Description |
|---|---|---|
| `/api/user/signup` | POST | Register a new user |
| `/api/user/login` | POST | Authenticate user & set cookie |
| `/api/user/profile`| GET  | Retrieve logged-in user details |
| `/api/cars`        | GET  | Fetch all available cars |
| `/api/bookings`    | POST | Create a new car booking |
| `/api/email`       | POST | Send contact form emails |

---

## 💅 Design Philosophy

Mavelo was designed with an "automotive-first" mindset. The color palettes, typography, and component spacing have been specifically chosen to evoke the feeling of interacting with a high-end vehicle's dashboard. 

- **Micro-animations:** Subtle hover states and page transitions.
- **Glassmorphism:** Used sparingly for modal overlays and navigation.
- **Responsive:** Perfectly scaled from 4K desktop monitors down to mobile devices.

---

<div align="center">
  <p>Built with ❤️ for car enthusiasts.</p>
</div>
=======

Create .env file:

PORT=5000

MONGO_URI=your_mongodb_connection_string

SMTP_USER=your_email

SMTP_PASS=your_app_password

npm run dev

---

## Frontend Setup

cd client

npm install

npm run dev

---

# Environment Variables

Backend

PORT

MONGO_URI

SMTP_USER

SMTP_PASS

JWT_SECRET

Frontend

VITE_API_URL

---

# Challenges Faced

### Email Automation

Handling reliable email delivery using SMTP while ensuring customer and admin notifications were generated correctly.

### State Management

Managing booking state, vehicle selection, and user interactions across multiple pages.

### Deployment

Coordinating frontend and backend deployments while maintaining environment variable security.

### Responsive Design

Ensuring a consistent user experience across mobile, tablet, and desktop devices.

---

# Performance Optimizations

* Lazy component loading
* Optimized image assets
* Reusable React components
* API response optimization
* Efficient MongoDB queries

---

# Future Enhancements

* User authentication
* Admin dashboard
* Payment gateway integration
* Booking history tracking
* Vehicle availability calendar
* Advanced analytics dashboard
* Role-based access control
* PDF invoice generation
* Google Maps integration
* AI-powered vehicle recommendations

---

# Learning Outcomes

This project demonstrates proficiency in:

* Frontend Development
* Backend Development
* REST API Design
* Database Integration
* Authentication Concepts
* Deployment Workflows
* Git & GitHub Collaboration
* Responsive UI Development
* Email Automation
* Full-Stack Application Architecture

---

# Author

Priyanshu Singh

Full Stack Developer

GitHub:
https://github.com/PriyanshuSingh10114

LinkedIn:
(Add LinkedIn Profile)

---

# License

This project is licensed under the MIT License.

