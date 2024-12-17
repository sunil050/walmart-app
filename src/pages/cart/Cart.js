import React, { useState } from "react";
import { Link } from "react-router-dom";
import emptyCart from "../../assets/Heroimage/empty-cart.svg";
import ShoppingCart from "./Shoppingcart";
import { selectTotalQuantity } from "../../slices/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const totalQuantity = useSelector(selectTotalQuantity);
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContinue = () => {
    console.log("Email submitted:", email);
    alert("Functionality to check account not implemented yet!");
  };

  return (
    <div className="w-full h-full flex flex-col text-center items-center overflow-hidden">
      {/* Header */}
      <p className="text-lg font-bold justify-center my-2 ">
        Cart (<span>{totalQuantity}</span> Items)
      </p>

      {/* Empty Cart Section */}
      {totalQuantity === 0 ? (
        <div className="w-[330px] signin-container items-center justify-center flex flex-col">
          <Link to="/home">
            <img
              className="w-[230px] h-[230px]"
              src={emptyCart}
              alt="Empty cart"
            />
          </Link>

          <main className="signin-main mt-2 text-black">
            <h1 className="text-xl font-bold">
              Sign in to see your saved items.
            </h1>
            <div className="signin-form flex flex-col justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-3 px-4 py-2 border-1 border-gray-400 rounded-md w-[180px]"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                className="signin-button bg-[#0071DC] mt-3 w-[180px] h-[45px] rounded-full text-white font-semibold"
                onClick={handleContinue}
              >
                Sign in
              </button>
            </div>

            <hr className="flex w-[500px] text-gray-500 mt-[20px] mb-[2px]" />

            <p className="signin-privacy text-lg font-bold mt-3 mb-1">
              Time to start shopping!
            </p>
            <p className="text-gray-500">
              Fill it up with savings from these popular departments:
            </p>

            <div className="flex w-[500px] h-[100px] justify-center">
              <ul className="flex flex-wrap text-base text-gray-800 justify-center items-center gap-4">
                {[
                  "Shop Grocery",
                  "Shop Electronics",
                  "Shop Toys",
                  "Shop Home",
                ].map((item) => (
                  <li key={item}>
                    <button className="w-auto border-gray-500 border-[1.6px] hover:border-2 rounded-full px-3 h-8 text-sm font-bold">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      ) : (
        // Shopping Cart Component
        <ShoppingCart />
      )}

      {/* Footer */}
      <div className="mt-[13px] mb-1">
        <hr className="flex w-full text-gray-500 mt-[10px] mb-[18px]" />
        <div className="w-full flex justify-between text-gray-600 text-sm px-4">
          <div className="text-xs">
            <p>© 2024 Walmart. All Rights Reserved.</p>
          </div>
          <div className="flex justify-end gap-4 flex-wrap">
            {[
              "Give feedback",
              "CA Privacy Rights",
              "Your Privacy Choices",
              "Notice at Collection",
              "Request My Personal Information",
              "Delete Account",
              "California Supply Chains Act",
            ].map((link) => (
              <li key={link} className="list-none">
                {link}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
