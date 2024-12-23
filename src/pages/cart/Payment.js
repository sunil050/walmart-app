import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Payment = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const {
    items = [],
    savings = 0,
    shipping = 0,
  } = useSelector((state) => state.cart);

  // Calculate subtotal and total
  const subtotal = items.reduce(
    (total, item) => total + (item.Price || 0) * (item.quantity || 1),
    0
  );
  const total = subtotal - savings + shipping;

  // Form state
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolder: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = () => {
    const { cardNumber, expiryDate, cvv, cardHolder } = paymentDetails;

    // Basic validation
    if (!cardNumber || !expiryDate || !cvv || !cardHolder) {
      toast.error("Please fill in all payment details!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    }

    // Simulated success notification
    toast.success("Payment successful!", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });

    // Optionally handle further logic here (e.g., API calls for payment)
  };

  return (
    <div className="w-full h-auto flex flex-col items-center p-6 bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
        <div className="flex justify-between mb-4">
          <span>Subtotal:</span>
          <span className="font-bold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Savings:</span>
          <span className="font-bold text-green-600">
            -${savings.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Shipping:</span>
          <span className="font-bold text-green-600">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="border-t pt-4 flex justify-between mb-6">
          <span className="font-bold text-lg">Total:</span>
          <span className="font-bold text-lg">${total.toFixed(2)}</span>
        </div>

        {/* Payment Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Card Holder Name
            </label>
            <input
              type="text"
              name="cardHolder"
              value={paymentDetails.cardHolder}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="1234 5678 9012 3456"
              maxLength="16"
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="MM/YY"
                maxLength="5"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-2">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="123"
                maxLength="3"
                required
              />
            </div>
          </div>
        </form>

        <button
          onClick={handlePayment}
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded"
        >
          Pay Now
        </button>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="w-full mt-4 bg-gray-400 text-white py-2 rounded"
        >
          Back
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Payment;
