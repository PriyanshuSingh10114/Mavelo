import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

export default function PaymentModal({ bookingId, onClose }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1️⃣ Create payment intent
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/payments/create-intent`,
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId }),
      }
    );
            
        const cardStyle = {
        style: {
            base: {
            color: "#ffffff",              // 👈 text color
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            "::placeholder": {
                color: "#a0a0a0",            // placeholder color
            },
            },
            invalid: {
            color: "#ff6b6b",              // error color
            },
        },
        };
    const { clientSecret } = await res.json();

    // 2️⃣ Confirm card payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      alert(result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      alert("Payment successful!");
      window.location.reload();
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1a1a1a] p-6 rounded-xl w-[400px]"
      >
        <h2 className="text-xl font-bold mb-4 text-white">Card Payment</h2>

        <div className="p-3 bg-black rounded-md mb-4">
          <CardElement />
        </div>

        <button
          disabled={!stripe || loading}
          className="w-full py-2 bg-[#f5b754] text-black rounded-full"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>

        <button
          type="button"
          onClick={onClose}
          className="w-full mt-3 text-gray-400"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
