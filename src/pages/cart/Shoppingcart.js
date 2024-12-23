import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../slices/cartSlice";
import Payment from "./Payment";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const [showPayment, setShowPayment] = useState(false);

  const {
    items = [],
    savings = 0,
    shipping = 0,
  } = useSelector((state) => state.cart);

  // Calculate subtotal
  const subtotal = items.reduce(
    (total, item) => total + (item.Price || 0) * (item.quantity || 1),
    0
  );

  // Calculate total
  const total = subtotal - savings + shipping;

  // Render the Payment component if showPayment is true
  if (showPayment) {
    return <Payment />;
  }

  return (
    <div className="flex w-full h-auto justify-between p-6 bg-gray-100">
      {/* Left Section - Items */}
      <div className="w-full lg:w-2/3 bg-white p-4 rounded shadow-md overflow-y-auto max-h-[calc(100vh-12px)]">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="border-b pb-4 mb-4 flex items-start">
              <img
                src={item.Image || "/placeholder-image.png"} // Placeholder for missing images
                alt={item.name || "Product Image"}
                className="w-24 h-24 rounded mr-4"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name || "Unnamed Item"}</h3>
                <p className="text-gray-600 mt-1">
                  {item.description || "No description available"}
                </p>
                <p className="text-green-600 font-bold mt-1">
                  ${item?.Price?.toFixed(2) || "0.00"}
                </p>
                {item.originalPrice && (
                  <p className="text-gray-500 line-through">
                    ${item.originalPrice.toFixed(2)}
                  </p>
                )}
                <div className="flex items-center mt-2">
                  <button
                    className="text-blue-600 cursor-pointer mr-4"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
              {/* Quantity Control */}
              <div className="flex items-center">
                <button
                  className="px-2 py-1 border bg-gray-100"
                  onClick={() =>
                    item.quantity > 1 && dispatch(decrementQuantity(item.id))
                  }
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="px-4">{item.quantity || 1}</span>
                <button
                  className="px-2 py-1 border bg-gray-100"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  disabled={item.quantity >= 5}
                >
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Add some items to your cart!</p>
        )}
      </div>

      {/* Right Section - Summary */}
      <div className="sw-full lg:w-1/3 lg:ml-6 bg-white p-4 rounded shadow-md sticky top-6 h-max">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span className="font-bold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Savings</span>
          <span className="font-bold text-green-600">
            - ${savings.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span className="font-bold text-green-600">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="border-t pt-4 flex justify-between">
          <span className="font-bold text-lg">Estimated Total</span>
          <span className="font-bold text-lg">${total.toFixed(2)}</span>
        </div>
        {items.length > 0 && (
          <button
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded"
            onClick={() => setShowPayment(true)}
          >
            Continue to Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
