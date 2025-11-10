import { useState } from 'react'
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


function App() {

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
        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
