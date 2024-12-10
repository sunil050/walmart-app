import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Walmart-Logo-PNG-Image.png";

const Sign = () => {
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
    <div className="w-full h-screen flex flex-col text-center items-center">
      <div className="w-[330px] signin-container items-center justify-center flex flex-col">
        <Link to="/home" className="mt-4">
          <img className="w-[58px] h-[58px]" src={logo} alt="logo"></img>
        </Link>

        <main className="signin-main mt-4">
          <h1 className="text-xl font-bold text-black">
            Sign in or create your account
          </h1>
          <div className="mt-4 text-sm">
            <p className="pb-0 m-0">Not sure if you have an account?</p>
            <p className="pt-0 m-0">
              Enter your email and we’ll check for you.
            </p>
          </div>

          <div className="signin-form flex flex-col">
            <label
              htmlFor="email"
              className="mt-4 mb-1 text-left font-bold text-sm"
            >
              Email Address
            </label>
            <input
              className="w-full h-[50px] border-[1.5px] border-gray-500 rounded"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder=""
              required
            />
            <button
              className="signin-button bg-[#0071DC] mt-3 w-full h-[45px] rounded-full text-white font-semibold"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>

          <p className="signin-privacy text-sm mt-4 mb-0">
            Securing your personal information is our priority.
          </p>
          <Link
            to="/privacy-policy"
            className="m-0 text-left text-sm text-black"
          >
            <p className="">See our privacy measures.</p>
          </Link>
        </main>
      </div>

      <div className="mt-[130px]">
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

export default Sign;
