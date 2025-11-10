import React, { useState } from 'react';
import CarData from '../../../Cars.json';
import { Link } from 'react-router-dom';

function Cars() {
  const [visible, setVisible] = useState(4);

  const handleLoadMore = () => {
    setVisible((prev) => prev + 2);
  };
 

  return (
    <>
    {/* Banner Section */}
      <div className='font-sans bg-[#121212] text-white'>
        <div className="banner-section cars-banner-section relative flex justify-center items-center">
          <div className="banner-section-content text-center z-10">
            <h6 className='uppercase'>RENT NOW</h6>
            <h1 className='text-5xl font-semibold font-bricolage text-[#f5b574]'>
              <span className='text-white font-bricolage'>Select</span> Luxury Car
            </h1>
          </div>
        </div>
      {/* Cars Listing and Sidebar */}
        <div className='flex flex-col md:flex-row gap-8 px-4 sm:px-6 md:px-8 lg:px-[12%] xl:px-[12%] py-12'>
          <div className='w-full sticky top-0 md:w-[300px] bg-[#1a1a1a] rounded-2xl p-6 shadow-lg animate-side-left h-full'>
            <div className='bg-[#f5b754] rounded-xl p-1 mb-6 flex items-center'>
              <input type="text" placeholder='Type here...' className='bg-gray-900 text-white w-full px-3 py-2 rounded-xl focus:outline-none'/>
              <span className='ml-2 text-black text-lg'>
                <i className='ri-search-line'></i>
              </span>
            </div>

            <div className='mb-6'>
              <h4 className='font-semibold mb-2'>Categories</h4>
              <ul className='text-sm space-y-1 text-gray-400'>
                <li>Sport Car</li>
                <li>SUVs</li>
                <li>Convertible</li>
                <li>Luxury Cars</li>
                <li>Sedan</li>
                <li>Small Cars</li>
              </ul>
            </div>

            <div className='mb-6'>
              <h4 className='font-semibold mb-2'>Pick up Location</h4>
              <ul className='text-sm space-y-1 text-gray-400'>
                <li>Abu Dhabi</li>
                <li>Alain</li>
                <li>Dubai</li>
                <li>Sharjah</li>
              </ul>
            </div>

            <div className='mb-6'>
              <h4 className='font-semibold mb-2'>Drop off Location</h4>
              <ul className='text-sm space-y-1 text-gray-400'>
                <li>Abu Dhabi</li>
                <li>Alain</li>
                <li>Dubai</li>
                <li>Sharjah</li>
              </ul>
            </div>
          </div>

          <div className='flex-1 animate-fade-in'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {CarData.slice(0, visible).map((car) => (
                <div key={car.id} className='bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-md hover:shadow-[#f5b754]/30 transition-shadow duration-300'>
                  <img src={car.image} alt={car.name} className='w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300'/>
                  <div className='p-5'>
                    <h3 className='text-xl font-bold mb-3'>{car.name}</h3>
                    <ul className='text-sm text-gray-400 space-y-1 mb-4'>
                      <li><i className='ri-door-line mr-2 text-[#f5b754]'></i>Doors: {car.doors}</li>
                      <li><i className='ri-user-line mr-2 text-[#f5b754]'></i>Passengers: {car.passengers}</li>
                      <li><i className='ri-timer-line mr-2 text-[#f5b754]'></i>Transmission: {car.transmission}</li>
                      <li><i className='ri-briefcase-line mr-2 text-[#f5b754]'></i>Bags: {car.bags}</li>
                    </ul>

                    <div className='flex justify-between items-center'>
                      <span className='text-[#f5b754] font-semibold text-lg'>
                        ${car.price}/day
                      </span>
                      <Link to={`/car/${car.id}`}>
                        <button className='bg-[#f5b754] text-black px-4 py-1 rounded-full text-sm hover:bg-[#f5b754]/90 transition'>
                        Details
                        </button>
                      </Link>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {visible < CarData.length && (
              <div className='text-center mt-10'>
                <button onClick={handleLoadMore} className='bg-[#f5b754] text-black px-6 py-2 rounded-full hover:bg-[#f5b754]/90 font-semiboldtransition'>
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cars;


