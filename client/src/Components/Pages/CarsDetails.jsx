import React from 'react'
import { useParams } from 'react-router-dom'
import carData from '../../../Cars.json'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
function CarsDetails() {
  const { id } = useParams();
  const car = carData.find((c)=> c.id === id);
  const [openIndex, setOpenIndex] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  const rentalConditions=[
    {
        title:'Contract and Annexes',
        description:'The rental contract and its annexes outline the terms and conditions of the car rental agreement, including responsibilities of both parties, payment details, and duration of the rental period.'
    },
    {
        title:'Insurance Coverage',
        description:'Details about the insurance coverage provided during the rental period, including liability, collision, and comprehensive coverage, as well as any deductibles or exclusions that may apply.'
    },
    {
        title:'Fuel Policy',
        description:'Information regarding the fuel policy, such as whether the car should be returned with a full tank, if there are any refueling charges, and how fuel levels will be assessed at the end of the rental period.'
    },
    {
        title:'Mileage Limitations',
        description:'Any restrictions on the number of miles that can be driven during the rental period, including potential charges for exceeding the mileage limit.'
    },
    {
        title:'Additional Drivers',
        description:'Policies regarding additional drivers, including any fees, age restrictions, and requirements for adding extra drivers to the rental agreement.'
    },
    {
        title:'Cancellation and Modification',
        description:'Terms related to the cancellation or modification of the rental reservation, including any associated fees or penalties.'
    },
  ]

  if(!car){
    return <div className='text-white text-center mt-20'>Car not found</div>
  }

    const [pickUpDate, setPickUpDate] = React.useState(null);
    const datePickerRef = React.useRef(null);

    const openCalender=()=>{
        if(datePickerRef.current){
            datePickerRef.current.setFocus();
        }

    };

    const [returnDate, setReturnDate] = React.useState(null);
    const returnPickerRef = React.useRef(null);

    const openreturnCalender=()=>{
        if(returnPickerRef.current){
            returnPickerRef.current.setFocus();
        }

    };

  return (
    
    <>
      <div className='bg-[#121212] text-white font-sans'>
        <div className='relative h-[70vh] bg-cover bg-center flex items-end px-[12%] py-20' style={{backgroundImage:`url(${car.image})`}}>
                <div className='absolute insert-0 cars-det-section'></div>
                <div className="relative z-10 text-white">
                    <h6 className='uppercase text-1xl font-bold tracking-widest text-[#f5b754]'>Luxury Cars</h6>
                    <h1 className='text-4xl font-bold font-bricolage'>{car.name}</h1>
                </div> 
        </div>
      </div>

      {/*contact*/}

      <div className='flex flex-col text-white lg:flex-row gap-10 px-[12%] py-14'>
        <div className='flex-1 space-y-12'>
            <section>
                <h2 className='text-xl font-bold mb-4'>General Information</h2>
                <p className='text-gray-400 text-sm mb-4'>
                    Enjoy a seamless car rental experience with our user-friendly platform. Browse our extensive selection of vehicles, choose your desired rental dates, and book your car in just a few clicks. Our transparent pricing and flexible rental options ensure you get the best deal for your needs. Whether you're planning a weekend getaway or a business trip, our reliable service and well-maintained cars guarantee a smooth and enjoyable ride.
                </p>

                <ul className='space-y-2 text-sm text-[#f5b754]'>
                    <li className='flex items-center hover:text-[#f5b754] transition'>
                        <i className="ri-check-line text-[$f5b754] mr-2">
                            24/7 RoadSide Assistance
                        </i>
                    </li>

                    <li className='flex items-center hover:text-[#f5b754] transition'>
                        <i className="ri-check-line text-[$f5b754] mr-2">
                            Free Cancellation and Return
                        </i>
                    </li>

                    <li className='flex items-center hover:text-[#f5b754] transition'>
                        <i className="ri-check-line text-[$f5b754] mr-2">
                            Pay at Arrival
                        </i>
                    </li>

                </ul>
            </section>

            <section>
                <h2 className='text-xl font-bold mb-4'>Rental Conditions</h2>
                <div className="space-y-4">
                    {rentalConditions.map((item,index)=>(
                        <div key={index} className='bg-[#1a1a1a] rounded-xl overflow-hidden'>
                            <div onClick={()=>toggleAccordion(index)}
                            className='cursor-pointer px-6 py-4 flex justify-between items-center hover:bg-[#2a2a2a] transition duration-300' >
                            <span className='font-medium text-sm'>{index+1}.{item.title}</span>
                            <i className={`ri-arrow-${openIndex===index ? 'up':'down'}-s-line text-[#f5b754]`}></i>
                            </div>
                            <div className={`px-6 text-sm text-gray-400 overflow-hidden transition-all duration-500 ease in out ${openIndex=== index?'max-h-[300px] pb-4':'max-h-0'}`}>
                                {openIndex === index && <div>{item.description}</div>}

                            </div>
                        </div>

                    ))}
                </div>
            </section>
        </div>
        
        <div className='w-full lg:w-[320px] space-y-6 bg-[#1a1a1a] rounded-2xl p-6 shadow-md h-full'>
            <div className="text-center">
                <p className='text-xl font-bold text-[#f5b754]'>
                    ${car.price}<span className='text-sm text-white'>/Rent Per Day</span>
                </p>
            </div>
            <ul className='space-y-3 text-sm text-gray-300'>

                <li className='flex justify-between'>
                    <span>
                        <i className='ri-door-line text-[#f5b754] mr-2'/>
                            Doors<span className="ml-1 text-white">{car.door}</span>
                    </span>
                </li>

                <li className='flex justify-between'>
                    <span>
                        <i className='ri-door-line text-[#f5b754] mr-2'/>
                            Passengers<span className="ml-1 text-white">{car.passengers}</span>
                    </span>
                </li>

                <li className='flex justify-between'>
                    <span>
                        <i className='ri-door-line text-[#f5b754] mr-2'/>
                            Transmission<span className="ml-1 text-white">{car.transmission}</span>
                    </span>
                </li>

                <li className='flex justify-between'>
                    <span>
                        <i className='ri-door-line text-[#f5b754] mr-2'/>
                            Luggage<span className="ml-1 text-white">{car.Bages}</span>
                    </span>
                </li>

                <li className='flex justify-between'>
                    <span>
                        <i className='ri-door-line text-[#f5b754] mr-2'/>
                            Air Condition<span className="ml-1 text-white">Yes</span>
                    </span>
                </li>

                <li className='flex justify-between'>
                    <span>
                        <i className='ri-door-line text-[#f5b754] mr-2'/>
                            Age<span className="ml-1 text-white">25</span>
                    </span>
                </li>
            </ul>

            <div className="flex gap-3">
                <button onClick={()=>setShowModal(true)} className='flex-1 bg-[#f5b754] text-black text-[20px] rounded-xl py-2 hover:bg-[#f5b754]/90 transition font-bricolage'>Rent Now</button>
            </div>
        </div>
      </div>

      {showModal && (
        <div className='fixed inset-0 z059 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4'>
            <div className='bg-[#0d0d0d]/90 border border-[#f5b754]/30 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden'>
                <div className='bg-[#f5b754] px-6 py-4 flex items-center justify-between'>
                    <h2 className='text-xl font-bold text-black font-bricolage'>
                        Book Your Dream Car
                    </h2>
                    <button onClick={()=>setShowModal(false)} className='text-black text-2xl hover:scale-110 transition'>
                        X
                    </button>
                </div>

                <form className='p-6 space-y-6 my-2'
                    onSubmit={(e)=>{
                        e.preventDefault();
                        setShowModal(false);
                        setShowSuccessModal(true);
                    }}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className="relative">
                                <input type="text" required placeholder='' className='w-full px-4 pb-2 bg-[#121212] text-white rounded-md border border-[#f5b754]/20 outline-none focus:ring-2 focus:ring-[#f5b754] transition-duration-200' />
                                <label className='absolute left-4 top-2 text-sm text-gray-400 pointer-events-none transition-all'>
                                    Full Name*
                                </label>
                            </div>

                            <div className="relative">
                                <input type="email" required placeholder='' className='w-full px-4 pt-6 pb-2 bg-[#121212] text-white rounded-md border border-[#f5b754]/20 outline-none focus:ring-2 focus:ring-[#f5b754] transition-duration-200' />
                                <label className='absolute left-4 top-2 text-sm text-gray-400 pointer-events-none transition-all'>
                                    Email*
                                </label>
                            </div>

                            <div className="relative">
                                <input type="tel" required placeholder='' className='w-full px-4 pt-6 pb-2 bg-[#121212] text-white rounded-md border border-[#f5b754]/20 outline-none focus:ring-2 focus:ring-[#f5b754] transition-duration-200' />
                                <label className='absolute left-4 top-2 text-sm text-gray-400 pointer-events-none transition-all'>
                                    Phone*
                                </label>
                            </div>

                            <div className="relative">

                                <select required className='w-full px-4 pt-6 pb-2 pr-10 bg-[#121212] text-white rounded-md border border-[#f5b754]/20 outline-none focus:ring-2 focus:ring-[#f5b754] transition-duration-200'></select>
                                <option hidden>Choose your Car</option>
                                <option hidden>Lamborghini</option>
                                <option hidden>Rolls Royce</option>
                                <option hidden>Bentley</option>

                                <label className='absolute left-4 top-2 text-sm text-gray-400 pointer-events-none transition-all'>
                                    Car Type*
                                </label>
                            </div>


                            
                            <div className="relative">

                                <select required className='w-full px-4 pt-6 pb-2 pr-10 bg-[#121212] text-white rounded-md border border-[#f5b754]/20 outline-none focus:ring-2 focus:ring-[#f5b754] transition-duration-200'></select>
                                <option hidden>Pick Up Location</option>
                                <option hidden>Dubai</option>
                                <option hidden>Abu Dhabi</option>

                                <label className='absolute left-4 top-2 text-sm text-gray-400 pointer-events-none transition-all'>
                                    Pick-Up Location*
                                </label>
                            </div>

                            
                            <div className="relative pick-date">

                                <input type="date" className='w-full px-4 pt-6 pb-2 pr-10 bg-[#121212] text-white rounded-md border border-[#f5b754]/20 outline-none focus:ring-2 focus:ring-[#f5b754] transition-duration-200'/>

                                <label className='absolute left-4 top-2 text-sm text-gray-400 pointer-events-none transition-all'>
                                    Pick-Up Date*
                                </label>
                            </div>

                            
                            <div className="relative">

                                <select required className='w-full px-4 pt-6 pb-2 pr-10 bg-[#121212] text-white rounded-md border border-[#f5b754]/20 outline-none focus:ring-2 focus:ring-[#f5b754] transition-duration-200'></select>
                                <option hidden>Drop off Location</option>
                                <option hidden>Sharjah</option>
                                <option hidden>Alain</option>

                                <label className='absolute left-4 top-2 text-sm text-gray-400 pointer-events-none transition-all'>
                                    Drop off Location*
                                </label>
                            </div>

                        </div>

                        <div className="relative">

                            <textarea rows="3" placeholder=''></textarea>
                            <input type="date" className='w-full px-4 pt-6 pb-2 pr-10 bg-[#121212] text-white rounded-md border border-[#f5b754]/20 outline-none focus:ring-2 focus:ring-[#f5b754] transition-duration-200'/>

                            <label className='absolute left-4 top-2 text-sm text-gray-400 pointer-events-none transition-all'>
                                Additional Notes
                            </label>
                        </div>

                        <button type="submit" className='w-full py-3 text-lg font-bold rounded-full bg-[#f5b754] text-black hover:bg-[#e5a944]'>Rent Now
                        </button>  
                </form>
            </div>
        </div>
      )}

      {/*success Modal */}

      {showSuccessModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 '>
            <div className='bg-[#0d0d0d]/90 border border-green-500/30 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden'>
                <div className='bg-green-500 px-6 py-4 flex items-center justify-between'>
                    <h2 className='text-2xl font-bold text-black font-bricolage'>Success!</h2>
                    <button onClick={()=>setShowSuccessModal(false)}
                        className='text-black text-2xl hover:scale-110 transition'>
                            X
                    </button>
                </div>
                <div className='p-6 text-center text-white space-y-4'>
                    <p className='text-lg font-semibold'>Your Car booking was Successful</p>
                    <p className='text-sm text-gray-300'>We will contact you shortly with confirmation details</p>
                    <button onClick={()=>setShowSuccessModal(false)}
                        className='mt-4 px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-black font-bold'>
                            Close
                        </button>
                </div>
            </div>
        </div>
      )}
    </>
  )
}

export default CarsDetails
