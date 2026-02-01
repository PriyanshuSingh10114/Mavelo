import React from 'react'
import { useParams } from 'react-router-dom'
<<<<<<< HEAD
import carData from '../../../Cars.json'
=======
>>>>>>> 3e25a73ccc4562a770357e54839940bb2ddb1968
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { set } from 'date-fns';
function CarsDetails() {
  const { id } = useParams();
<<<<<<< HEAD
  const car = carData.find((c)=> c.id === id);
  const carNames = [...new Set(carData.map((c) => c.name))];
=======
>>>>>>> 3e25a73ccc4562a770357e54839940bb2ddb1968
  const [openIndex, setOpenIndex] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [carType, setCarType] = React.useState("");
  const [pickUpLocation, setPickUpLocation] = React.useState("");
  const [dropOffLocation, setDropOffLocation] = React.useState("");
  const [pickUpDate, setPickUpDate] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [returnDate, setReturnDate] = React.useState("");
<<<<<<< HEAD

=======
  const [car,setCar]=React.useState(null);
  const [loading,setLoading]=React.useState(true);
  const returnPickerRef = React.useRef(null);
  const datePickerRef = React.useRef(null);

  React.useEffect(() => {
    async function fetchCar() {
        try {
        const res = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/cars/${id}`
        );
        const data = await res.json();

        setCar(data.car);
        setLoading(false);
        } catch (error) {
        console.error("Failed to fetch car:", error);
        setLoading(false);
        }
    }

    fetchCar();
    }, [id]);
    if (loading) {
        return <div className="text-center mt-32 text-white">Loading car...</div>;
    }

    if (!car) {
        return <div className="text-center mt-32 text-white">Car not found</div>;
    }
>>>>>>> 3e25a73ccc4562a770357e54839940bb2ddb1968

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

<<<<<<< HEAD
  if(!car){
    return <div className='text-white text-center mt-20'>Car not found</div>
  }

    const datePickerRef = React.useRef(null);
=======
>>>>>>> 3e25a73ccc4562a770357e54839940bb2ddb1968

    const openCalender=()=>{
        if(datePickerRef.current){
            datePickerRef.current.setFocus();
        }

    };
<<<<<<< HEAD
    const returnPickerRef = React.useRef(null);
=======

>>>>>>> 3e25a73ccc4562a770357e54839940bb2ddb1968

    const openreturnCalender=()=>{
        if(returnPickerRef.current){
            returnPickerRef.current.setFocus();
        }

    };

    const handleSubmit = async (e) => {
<<<<<<< HEAD
    e.preventDefault();
    setIsSubmitting(true);

    const bookingData = {
        fullName,
        email,
        phone,
        carType,
        pickUpLocation,
        dropOffLocation,

        // Proper ISO format for email backend
        pickUpDate: pickUpDate ? pickUpDate.toISOString() : "",
        returnDate: returnDate ? returnDate.toISOString() : "",

        notes,
        carName: car.name,
        carPrice: car.price,
    };

    console.log("📤 Sending booking data:", bookingData);

    try {
        const res = await fetch("http://localhost:5000/api/email/book-car", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
        });

        const data = await res.json();

        if (data.success) {
        setShowModal(false);
        setShowSuccessModal(true);
        } else {
        alert("Booking email failed: " + data.error);
        }
    } catch (err) {
        alert("Network error: " + err.message);
    }

    setIsSubmitting(false);
    };



=======
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/bookings`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                carId: car._id,
                startDate: pickUpDate,
                endDate: returnDate
                })
            }
            );

            const data = await res.json();

            if (!res.ok) {
            throw new Error(data.message);
            }

            setShowModal(false);
            setShowSuccessModal(true);
        } catch (err) {
            alert(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

>>>>>>> 3e25a73ccc4562a770357e54839940bb2ddb1968
  return (
    
    <>
      <div className='bg-[#121212] text-white font-sans'>
        <div className='relative h-[70vh] bg-cover bg-center flex items-end px-[12%] py-20' style={{backgroundImage:`url(${car.image?.[0]})`}}>
                <div className='absolute inset-0 cars-det-section'></div>
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
                    ${car.pricePerDay}<span className='text-sm text-white'>/Rent Per Day</span>
                </p>
            </div>
            <ul className='space-y-3 text-sm text-gray-300'>

                <li className='flex justify-between'>
                    <span>
                        <i className='ri-door-line text-[#f5b754] mr-2'/>
                            Doors<span className="ml-1 text-white">{4}</span>
                    </span>
                </li>

                <li className='flex justify-between'>
                    <span>
                        <i className='ri-door-line text-[#f5b754] mr-2'/>
                            Passengers<span className="ml-1 text-white">{car.seats}</span>
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
                            Luggage<span className="ml-1 text-white">{3}</span>
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
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9999] flex items-center justify-center px-4">
            <div className="bg-[#0d0d0d]/95 border border-[#f5b754]/30 rounded-2xl shadow-2xl max-w-4xl w-full z-[10000]">
                <div className='bg-[#f5b754] px-6 py-4 flex items-center justify-between'>
                    <h2 className='text-xl font-bold text-black font-bricolage'>
                        Book Your Dream Car
                    </h2>
                    <button onClick={()=>setShowModal(false)} className='text-black text-2xl hover:scale-110 transition'>
                        X
                    </button>
                </div>

                <form className="p-6 space-y-6 my-2" 
                onSubmit={handleSubmit}
                >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Full Name */}
                    <div className="relative">
                    <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 pt-8 pb-2 bg-[#121212] text-white rounded-md border border-[#f5b754]/20 
                        outline-none focus:ring-2 focus:ring-[#f5b754] transition"
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none">
                        Full Name*
                    </label>
                    </div>

                    {/* Email */}
                    <div className="relative">
                    <input
                        type="email"
                        required
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 pt-8 pb-2 bg-[#121212] text-white rounded-md border 
                        border-[#f5b754]/20 outline-none focus:ring-2 focus:ring-[#f5b754] transition"
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none">
                        Email*
                    </label>
                    </div>

                    {/* Phone */}
                    <div className="relative">
                    <input
                        type="tel"
                        required
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 pt-8 pb-2 bg-[#121212] text-white rounded-md border 
                        border-[#f5b754]/20 outline-none focus:ring-2 focus:ring-[#f5b754] transition"
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none">
                        Phone*
                    </label>
                    </div>

                    {/* Car Type */}
                    <div className="relative">
<<<<<<< HEAD
                    <select
                        required
                        value={carType}
                        onChange={(e) => setCarType(e.target.value)}
                        className="w-full px-4 pt-6 pb-2 bg-[#121212] text-white rounded-md border border-[#f5b754]/20"
                    >
                        <option value="" hidden>Choose your Car</option>
                        {carNames.map((carName, index) => (
                        <option key={index} value={carName}>{carName}</option>
                        ))}
                    </select>
                    <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none">
                        Car Type*
                    </label>
                    </div>

                    {/* Pick-Up Location */}
                    <div className="relative">
                    <select
                        required
                        value={pickUpLocation}
                        onChange={(e) => setPickUpLocation(e.target.value)}
                        className="w-full px-4 pt-8 pb-2 bg-[#121212] text-white rounded-md border border-[#f5b754]/20"
                    >
                        <option value="" hidden>Pick Up Location</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                    </select>
                    <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none">
                        Pick-Up Location*
                    </label>
                    </div>

                    {/* Pick-Up Date */}
                    <div className="relative">
                    <DatePicker
                        selected={pickUpDate}
                        onChange={(date) => setPickUpDate(date)}
                        placeholderText="Select Pick-Up Date"
                        dateFormat="dd/MM/yyyy"
                        className="w-full px-4 pt-8 pb-2 bg-[#121212] text-white rounded-md border border-[#f5b754]/20"
                        minDate={new Date()}
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none">
                        Pick-Up Date*
                    </label>
                    </div>

                    {/* Return Date */}
                    <div className="relative">
                    <DatePicker
                        selected={returnDate}
                        onChange={(date) => setReturnDate(date)}
                        placeholderText="Select Return Date"
                        dateFormat="dd/MM/yyyy"
                        className="w-full px-4 pt-8 pb-2 bg-[#121212] text-white rounded-md border border-[#f5b754]/20"
                        minDate={pickUpDate || new Date()}
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none">
                        Return Date*
                    </label>
                    </div>

                    {/* Drop-Off Location */}
                    <div className="relative">
                    <select
                        required
                        value={dropOffLocation}
                        onChange={(e) => setDropOffLocation(e.target.value)}
                        className="w-full px-4 pt-8 pb-2 bg-[#121212] text-white rounded-md border border-[#f5b754]/20"
                    >
                        <option value="" hidden>Drop off Location</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Alain">Alain</option>
                    </select>
                    <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none">
                        Drop-Off Location*
                    </label>
                    </div>

                </div>

                {/* Notes */}
                <textarea
                    rows="3"
                    placeholder="Additional Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 pt-6 pb-2 bg-[#121212] text-white rounded-md border border-[#f5b754]/20"
                />

=======
                        <input
                        type="text"
                        value={car.name}
                        disabled
                        className="w-full px-4 pt-8 pb-2 bg-[#121212] text-white rounded-md border border-[#f5b754]/20"
                        />

                    <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none">
                        Car Type*
                    </label>
                    </div>

                    {/* Pick-Up Location */}
                    <div className="relative">
                    <select
                        required
                        value={pickUpLocation}
                        onChange={(e) => setPickUpLocation(e.target.value)}
                        className="w-full px-4 pt-8 pb-2 bg-[#121212] text-white rounded-md border border-[#f5b754]/20"
                    >
                        <option value="" hidden>Pick Up Location</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                    </select>
                    <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none">
                        Pick-Up Location*
                    </label>
                    </div>

                    {/* Pick-Up Date */}
                    <div className="relative">
                    <DatePicker
                        selected={pickUpDate}
                        onChange={(date) => setPickUpDate(date)}
                        placeholderText="Select Pick-Up Date"
                        dateFormat="dd/MM/yyyy"
                        className="w-full px-4 pt-8 pb-2 bg-[#121212] text-white rounded-md border border-[#f5b754]/20"
                        minDate={new Date()}
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none">
                        Pick-Up Date*
                    </label>
                    </div>

                    {/* Return Date */}
                    <div className="relative">
                    <DatePicker
                        selected={returnDate}
                        onChange={(date) => setReturnDate(date)}
                        placeholderText="Select Return Date"
                        dateFormat="dd/MM/yyyy"
                        className="w-full px-4 pt-8 pb-2 bg-[#121212] text-white rounded-md border border-[#f5b754]/20"
                        minDate={pickUpDate || new Date()}
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none">
                        Return Date*
                    </label>
                    </div>

                    {/* Drop-Off Location */}
                    <div className="relative">
                    <select
                        required
                        value={dropOffLocation}
                        onChange={(e) => setDropOffLocation(e.target.value)}
                        className="w-full px-4 pt-8 pb-2 bg-[#121212] text-white rounded-md border border-[#f5b754]/20"
                    >
                        <option value="" hidden>Drop off Location</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Alain">Alain</option>
                    </select>
                    <label className="absolute left-4 top-2 text-sm text-gray-400 pointer-events-none">
                        Drop-Off Location*
                    </label>
                    </div>

                </div>

                {/* Notes */}
                <textarea
                    rows="3"
                    placeholder="Additional Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 pt-6 pb-2 bg-[#121212] text-white rounded-md border border-[#f5b754]/20"
                />

>>>>>>> 3e25a73ccc4562a770357e54839940bb2ddb1968
                {/* SUBMIT BUTTON - FIXED */}
                <button
                    type="submit"
                    className="w-full py-3 text-lg font-bold rounded-full bg-[#f5b754] text-black hover:bg-[#e5a944]"
                >
                    Submit Booking
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


