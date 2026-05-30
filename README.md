# Mavelo – Luxury Car Rental Platform

## Overview

Mavelo is a full-stack luxury car rental platform designed to provide users with a seamless vehicle discovery and booking experience. The application combines a modern React-based frontend with a scalable Node.js and Express backend, enabling users to browse premium vehicles, explore detailed specifications, submit rental requests, and receive automated booking confirmations.

The project was built to demonstrate end-to-end full-stack development skills, including frontend engineering, backend API development, database integration, email automation, deployment, and responsive UI design.

**Live Demo:** https://mavelo-cars.onrender.com

---

# Problem Statement

Traditional car rental websites often provide poor user experiences, outdated interfaces, and complicated booking processes.

Mavelo addresses these challenges by offering:

* Modern and responsive user interface
* Fast vehicle browsing experience
* Detailed vehicle specifications
* Streamlined booking workflow
* Automated email notifications
* Mobile-first design approach

---

# Key Features

### Vehicle Discovery

* Browse premium luxury vehicles
* Dynamic search functionality
* Category-based filtering
* Vehicle detail pages
* Real-time data rendering

### Rental Booking System

* Customer information collection
* Pickup and drop-off location management
* Rental date selection
* Special request handling
* Booking validation

### Automated Email Workflow

* Booking notification sent to administrators
* Confirmation email sent to customers
* SMTP integration using Nodemailer
* Dynamic email templates

### Responsive User Experience

* Fully responsive layout
* Mobile-friendly design
* Tablet optimization
* Desktop-first experience
* Smooth transitions and animations

### Contact & Engagement

* Contact form integration
* Newsletter subscription system
* Customer inquiry management

---

# System Architecture

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

---

## Backend Setup

cd server

npm install

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
