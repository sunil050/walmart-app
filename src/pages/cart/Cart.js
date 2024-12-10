import React, { useState } from "react";
import { Link } from "react-router-dom";
import emptyCart from "../../assets/Heroimage/empty-cart.svg";

const Cart = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContinue = () => {
    // Add functionality to check email and direct to the appropriate flow
    console.log("Email submitted:", email);
    alert("Functionality to check account not implemented yet!");
  };

  return (
    <div className="w-full h-screen flex flex-col text-center items-center overflow-hidden">
      <div className="w-[330px] signin-container items-center justify-center flex flex-col">
        <Link to="/home" className="mt-4">
          <img className="w-[230px] h-[230px]" src={emptyCart} alt="cart"></img>
        </Link>

        <main className="signin-main mt-4 text-black">
          <h1 className="text-xl font-bold ">
            Sign in to see your saved items.
          </h1>

          <div className="signin-form flex flex-col justify-center items-center">
            <button
              className="signin-button bg-[#0071DC] mt-3 w-[180px] h-[45px] rounded-full text-white font-semibold"
              onClick={handleContinue}
            >
              Sign in
            </button>
          </div>
          <hr className="flex w-[500px] text-gray-500 mt-[20px] mb-[2px]" />

          <p className="signin-privacy text-lg font-bold mt-3 mb-1">
            Time to start shopping!.
          </p>
          <p className="text-gray-500">
            Fill it up with savings from this popular departments
          </p>
          <div className="flex w-[500px] h-[100px] justify-center ">
            <ul className="flex flex-wrap text-base text-gray-800 justify-center items-center gap-4">
              <li>
                <button className="w-autos border-gray-500 border-[1.6px] hover:border-2 rounded-full px-3 h-8 text-sm font-bold">
                  Shop Grocery
                </button>
              </li>
              <li>
                <button className="w-autos border-gray-500 border-[1.6px] hover:border-2 rounded-full px-3 h-8 text-sm font-bold">
                  Shop Electronics
                </button>
              </li>
              <li>
                <button className="w-autos border-gray-500 border-[1.6px] hover:border-2 rounded-full px-3 h-8 text-sm font-bold">
                  Shop Toys
                </button>
              </li>
              <li>
                <button className="w-autos border-gray-500 border-[1.6px] hover:border-2 rounded-full px-3 h-8 text-sm font-bold">
                  Shop Home
                </button>
              </li>
            </ul>
          </div>
        </main>
      </div>

      <div className="mt-[13px]">
        <hr className="flex w-full text-gray-500 mt-[10px] mb-[18px]" />
        <div className="w-[1350px] h-auto  flex justify-between text-gray-600 text-sm">
          <div className="text-xs w-[300px]">
            <p>© 2024 Walmart. All Rights Reserved.</p>
          </div>
          <div className="flex w-auto h-auto justify-center ">
            <ul className="flex flex-wrap gap-[26px] justify-end mr-8">
              <li className="items-center">Give feedback</li>
              <li className="items-center">CA Privacy Rights</li>
              <li className="items-center">Your Privacy Choices</li>
              <li className="items-center">Notice at Collection</li>
              <li className="items-center">Request My Personal Information</li>
              <li className="items-center">Delete Account</li>
              <li className="items-center">California Supply Chains Act</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
