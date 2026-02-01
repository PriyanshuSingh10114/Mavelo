import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {stripePromise} from '../../main.jsx';
import PaymentModal from "./paymentModel.jsx";
function MyBookings() {
  const [selectedBooking, setSelectedBooking] = useState(null);

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch bookings
  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/bookings/my-bookings`,
          { credentials: "include" }
        );

        if (res.status === 401) {
          navigate("/");
          return;
        }

        const data = await res.json();
        setBookings(data.bookings);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, [navigate]);

  // Cancel booking
  const cancelBooking = async (id) => {
    if (!confirm("Cancel this booking?")) return;

    try {
        const stripe=await stripePromise;
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/bookings/${id}/cancel`,
        {
          method: "PUT",
          credentials: "include",
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      // Update UI
      setBookings((prev) =>
        prev.map((b) =>
          b._id === id ? { ...b, status: "cancelled" } : b
        )
      );
    } catch (err) {
      alert(err.message);
    }
  };
  const handlePayment=async(bookingId)=>{
    
    try {
        const stripe=await stripePromise;
        const res=await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/payments/create-intent`,{
            method:'POST',
            credentials:'include',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({bookingId}),
        })
        const data=await res.json();
        if(!res.ok) throw new Error(data.message);
        const result=await stripe.confirmCardPayment(data.clientSecret);
        if(result.error){
            alert(result.error.message);
            return;
        }
        if(result.paymentIntent.status==='succeeded'){
            alert('Payment successful!');
            // Optionally, refresh bookings or update UI
            window.location.reload();
        }
    } catch (error) {
        alert(error.message);
    }
  };
  if (loading) {
    return <p className="text-center mt-20 text-white">Loading bookings...</p>;
  }

  if (bookings.length === 0) {
    return (
      <p className="text-center mt-20 text-gray-400">
        You have no bookings yet.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 py-24">
      <h1 className="text-3xl font-bold mb-10 text-center">
        My Bookings
      </h1>

      <div className="max-w-5xl mx-auto space-y-6">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="flex flex-col md:flex-row gap-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5"
          >
            <img
              src={booking.car.image?.[0]}
              alt={booking.car.name}
              className="w-full md:w-64 h-40 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">
                {booking.car.name}
              </h3>

              <p className="text-gray-400 text-sm mb-1">
                {new Date(booking.startDate).toDateString()} →{" "}
                {new Date(booking.endDate).toDateString()}
              </p>

              <p className="text-gray-400 text-sm mb-1">
                Total Days: {booking.totalDays}
              </p>

              <p className="text-[#f5b754] font-semibold text-lg">
                ${booking.totalAmount}
              </p>

              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-sm
                  ${
                    booking.status === "confirmed"
                      ? "bg-green-600"
                      : booking.status === "pending"
                      ? "bg-yellow-600"
                      : "bg-red-600"
                  }
                `}
              >
                {booking.status}
              </span>
            </div>

            <div className="flex items-center gap-4">
                {booking.status?.toLowerCase() !== "cancelled" && (
                    <button
                    onClick={() => cancelBooking(booking._id)}
                    className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 transition"
                    >
                    Cancel
                    </button>
                )}

                {booking.status?.toLowerCase() === "pending" && (
                    <button
                      onClick={() => setSelectedBooking(booking._id)}
                      className="px-5 py-2 rounded-full bg-[#f5b754] text-black"
                    >
                      Pay Now
                    </button>
                )}

            </div>

          </div>
        ))}
          {selectedBooking && (
              <PaymentModal
              bookingId={selectedBooking}
              onClose={() => setSelectedBooking(null)}
              />
          )}
      </div>
    </div>
  );
}

export default MyBookings;
