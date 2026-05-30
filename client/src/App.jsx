import { useState, useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'
import Nav from './Components/Nav/Nav'
import Index from './Components/Pages/index';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import CarsDetails from './Components/Pages/CarsDetails';
import Footer from './Components/Footer/Footer'
import Cars from './Components/Pages/Cars';
import Blog from './Components/Pages/Blog';
import Teams from './Components/Pages/Teams';
import Contact from './Components/Pages/Contact';
import LoginModal from './Components/Pages/LoginModal';
import MyBookings from './Components/Pages/MyBooking';
function App() {
  // Connection health check on mount
  useEffect(() => {
    const checkConnection = async () => {
      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
        const res = await fetch(`${backendUrl}/api/cars`);
        if (res.ok) {
          console.log(
            '%c✅ SUCCESS: Frontend is connected to the Backend & Database!', 
            'color: #4CAF50; font-weight: bold; font-size: 14px; padding: 10px; border: 2px solid #4CAF50; border-radius: 5px; background: #e8f5e9;'
          );
        } else {
          console.log(
            '%c⚠️ WARNING: Backend is reachable, but returned an error status.', 
            'color: #ff9800; font-weight: bold; font-size: 14px; padding: 10px; border: 2px solid #ff9800; border-radius: 5px; background: #fff3e0;'
          );
        }
      } catch (error) {
        console.log(
          '%c❌ ERROR: Frontend could NOT connect to the Backend!', 
          'color: #F44336; font-weight: bold; font-size: 14px; padding: 10px; border: 2px solid #F44336; border-radius: 5px; background: #ffebee;'
        );
      }
    };

    checkConnection();
  }, []);

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/car/:id' element={<CarsDetails/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/cars' element={<Cars/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/teams' element={<Teams/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path="/login" element={<LoginModal />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
