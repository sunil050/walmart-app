import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/Walmart-Logo-PNG-Image.png";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { SlBasket } from "react-icons/sl";
import { PiSquaresFour, PiCirclesFour } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import Bluelogo from "../assets/wplus-icon-blue.svg";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsBoxArrowInDown } from "react-icons/bs";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { CiGift } from "react-icons/ci";
import { BsChat } from "react-icons/bs";

function CustomNavbar() {
  const [nav, setNav] = useState(false);
  // dropdown for items
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // dropdown for sign in
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  // Set up the placeholder text state
  const [placeholder, setPlaceholder] = useState("Search everything...");

  const dropdownRef1 = useRef(null); // Ref for the first dropdown
  const dropdownRef2 = useRef(null); // Ref for the second dropdown

  // for dropdown closing -----
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click was outside dropdown1
      if (
        dropdownRef1.current &&
        !dropdownRef1.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
      // Check if the click was outside dropdown2
      if (
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target)
      ) {
        setDropdownOpen2(false);
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // --------------------- closing /

  useEffect(() => {
    // Define a function to check the width and update placeholder
    const handleResize = () => {
      if (window.innerWidth < 1025) {
        setPlaceholder("Search...");
      } else {
        setPlaceholder("Search everything at Walmart online and in-store");
      }
    };

    // Initial check on load
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOverlayClick = () => {
    setNav(false); // Close the mobile nav if open
    setDropdownOpen(false); // Close the "My Items" dropdown
    setDropdownOpen2(false); // Close the "Sign In" dropdown
  };

  return (
    <div className="w-[100%] font-Bogle sticky top-0 overflow-hidden z-50 ">
      <div className="flex items-center w-full h-[85px] px-1 lg:px-4 bg-[#0071DC]">
        {/* Mobile menu */}
        <div className="">
          {/* List */}
          <button
            onClick={() => setNav(!nav)}
            className="flex items-center px-2 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list w-[30px] h-[30px] text-white "
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>

        {/* Logo */}

        <div className="flex w-auto items-center rounded-full p-2 hover:bg-[#002D58]">
          <img className="w-[32px] h-[32px]" src={logo} alt="logo"></img>
        </div>

        {/* Addres */}

        <div className="addres hidden lg:flex items-center h-12 w-[310px] mx-4 rounded-full p-2 bg-[#002D58]">
          <div className="flex">
            <img
              className="w-[30px] h-[30px]"
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"
              alt="hand"
            ></img>
          </div>
          <div className="h-10 w-[230px]">
            <p className=" text-white text-sm m-0 pl-4 font-bold">
              How do you want your items?
            </p>
            <p className=" text-white text-sm m-0 pl-4">
              Sacramento,95829.Sacramento s..
            </p>
          </div>
          <MdKeyboardArrowUp className="h-6  w-6 text-white" />
        </div>

        {/* search */}

        <div className="search w-full flex items-center justify-center mx-2 relative">
          <input
            className=" w-full h-12 pl-4 text-blue-900 font-normal rounded-full flex justify-between items-center"
            type="serch"
            placeholder={placeholder}
          ></input>
          <div className="bg-[#0071DC] hover:bg-[#002D58] absolute rounded-full w-8 h-8 right-4 justify-center flex items-center">
            <IoSearchOutline className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Items */}

        {/* Dropdown Trigger */}
        <div className="relative" ref={dropdownRef1}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`addres hidden lg:flex items-center justify-normal h-12 px-[14px] w-[120px] rounded-full ${
              dropdownOpen
                ? "bg-[#002D58]"
                : "hover:bg-[#002D58] active:bg-[#002D58]"
            }`}
          >
            <div className="flex pr-2">
              <AiOutlineHeart className="text-white" />
            </div>

            <div className="h-10 w-[62px] ">
              <p className=" text-white text-sm m-0 font-normal">Recorder</p>
              <p className=" text-white text-sm m-0 font-bold">My Items</p>
            </div>
          </button>
          <div className="fixed">
            {/* dropdown bg black */}
            {dropdownOpen && (
              <div
                // top-136
                className="bg-black/50 fixed w-full h-screen z-20 top-[136px] left-0 overflow-hidden"
                onClick={handleOverlayClick}
              ></div>
            )}
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                className="absolute left-0 mt-[18px] w-32 bg-white rounded-b-md shadow-lg border border-gray-200 z-20"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <ul className="text-sm pl-6 mt-2 text-gray-700">
                  <li className="flex items-center py-2 cursor-pointer">
                    <BsBoxArrowInDown className="w-[15px] h-[15px] mr-2" />
                    <a
                      href=""
                      className="text-gray-950 no-underline hover:underline"
                    >
                      Reorder
                    </a>
                  </li>
                  <li className="flex items-center py-2 cursor-pointer">
                    <AiOutlineHeart className="w-[15px] h-[15px] mr-2" />
                    <a
                      href=""
                      className="text-gray-950 no-underline hover:underline"
                    >
                      List
                    </a>
                  </li>
                  <li className="flex items-center py-2 cursor-pointer">
                    <CiGift className="w-[15px] h-[15px] mr-2" />
                    <a
                      href=""
                      className="text-gray-950 no-underline hover:underline"
                    >
                      Registries
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Sign in */}
        {/* Dropdown trigger */}
        <div className="relative" ref={dropdownRef2}>
          <button
            onClick={() => setDropdownOpen2(!dropdownOpen2)}
            className={`addres hidden lg:flex items-center justify-normal mx-1 h-12 px-[14px] w-auto  rounded-full ${
              dropdownOpen2
                ? "bg-[#002D58]"
                : "hover:bg-[#002D58] active:bg-[#002D58]"
            }`}
          >
            <div className="flex pr-1">
              <GoPerson className="text-white" />
            </div>

            <div className="h-10 w-[62px] ">
              <p className=" text-white text-sm m-0 font-normal">Sign In</p>
              <p className=" text-white text-sm m-0 font-bold">Account</p>
            </div>
          </button>
          <div className="fixed">
            {/* dropdown bg black */}
            {dropdownOpen2 && (
              <div
                // top-136
                className="bg-black/50 fixed w-full h-screen z-10 top-[136px] left-0 overflow-hidden"
                onClick={handleOverlayClick}
              ></div>
            )}
            {/* Dropdown Menu */}
            {dropdownOpen2 && (
              <div
                className="flex justify-center absolute -translate-x-[28%] mt-[18px] w-[230px] bg-white rounded-b-md shadow-lg border border-gray-200 z-20"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="mt-2 w-[178px]">
                  <ul className="text-sm p-0 text-gray-700">
                    <li className="flex items-center cursor-pointer mt-3">
                      <button className="bg-[#0071DC] h-8 font-semibold text-white rounded-full w-full">
                        Sign in or create account
                      </button>
                    </li>
                    <hr className="w-full text-gray-500 mt-3" />
                    <li className="flex items-center pb-2 cursor-pointer">
                      <IoNewspaperOutline className="w-[15px] h-[15px] mr-2" />
                      <a
                        href=""
                        className="text-gray-950 no-underline hover:underline"
                      >
                        Purchase History
                      </a>
                    </li>
                    <li className="flex items-center py-2 cursor-pointer">
                      <img
                        src={Bluelogo}
                        alt="logo"
                        className="w-[15px] h-[15px] mr-2"
                      ></img>
                      <a
                        href=""
                        className="text-gray-950 no-underline hover:underline"
                      >
                        Walmart+
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* cart */}

        <div className="addres items-center justify-center mr-1 px-[14px] w-[60px] py-[3px]  rounded-full hover:bg-[#002D58]">
          <div className="">
            <SlBasket className="text-white w-6 h-5" />
            <p className=" text-white text-sm m-0  font-normal">$00.0</p>
          </div>
        </div>
      </div>

      {/* navbottom */}

      {/* Department */}
      <div className="flex items-center bg-[#0071DC] lg:bg-[#F2F8FD] border-t-[1px] w-full h-auto py-2 px-6">
        <div className="hidden max-lg:flex items-center w-full gap-1">
          <div className="flex">
            <img
              className="w-[26px] h-[26px]"
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"
              alt="hand"
            ></img>
          </div>

          <p className=" text-white text-sm m-0 pl-2 font-semibold">
            How do you want your items?
          </p>
          <MdKeyboardArrowUp className="h-6 w-6 text-white pl-1" />
          <p className="hidden sm:block text-white text-smtext-sm m-0 font-thin">
            |
          </p>
          <CiLocationOn className="hidden sm:block h-5 w-5 text-white pl-1" />

          <p className="hidden sm:block text-white text-sm m-0 pl-2">
            Sacramento, 95829.Sacramento Supercenter
          </p>
        </div>
        <div className="hidden lg:flex items-center justify-normal w-full h-full">
          <div className="">
            <button className="flex px-2 py-1 border-1 border-transparent hover:border-blue-900 rounded-full items-center">
              <PiSquaresFour className="w-6 h-5 pr-1" />
              <p className="text-sm m-0  font-bold pr-1">Departments</p>
              <MdKeyboardArrowUp className="h-6 w-6" />
            </button>
          </div>

          {/* Services */}

          <div className="flex ">
            <button className="flex px-2 py-1 border-1 border-transparent hover:border-blue-900 rounded-full items-center">
              <PiCirclesFour className="w-6 h-5 pr-1" />
              <p className="text-sm m-0  font-bold pr-1">Services</p>
              <MdKeyboardArrowUp className="h-6 w-6" />
            </button>
          </div>
          <p className="flex m-0 text-blue-500 px-4 items-center">|</p>
          <ul className="flex items-center px-0 m-0 gap-[22px] text-sm">
            <a className="text-black no-underline hover:underline">Savings</a>
            <a className="text-black no-underline hover:underline">
              Grocery & Essentails
            </a>
            <a className="text-black no-underline hover:underline">
              Holiday Shop
            </a>
            <a className="text-black no-underline hover:underline">
              Gift Ideas
            </a>
            <a className="text-black no-underline hover:underline">
              New & Trending
            </a>
            <a className="text-black no-underline hover:underline">Toy Shop</a>
            <a className="text-black no-underline hover:underline">Home</a>
            <a className="text-black no-underline hover:underline">Fashion</a>
            <a className="text-black no-underline hover:underline">
              Electronics
            </a>
            <a className="text-black no-underline hover:underline">Registry</a>
            <a className="text-black no-underline hover:underline">ONE Cash</a>
          </ul>
        </div>
      </div>
      {nav && (
        <div
          className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
          onClick={handleOverlayClick}
        ></div>
      )}
      {/* Side Draw Menu */}
      <div
        className={`fixed bg-white h-full w-[320px] top-0 z-20 transition-transform duration-300 ${
          nav ? "left-0" : "-left-[320px]"
        }`}
      >
        <IoCloseOutline
          onClick={() => setNav(!nav)}
          size={30}
          className="right-4 top-4 absolute"
        />
        {/* Logo and sign in */}
        <div className="">
          <div className="flex mt-[60px] items-center pl-6 mb-14">
            <img className="w-[30px] h-[30px] mr-3" src={logo} alt="logo"></img>
            <button className="text-[14px] text-white bg-[#0071DC] rounded-full px-3 py-1">
              Sign in or create account
            </button>
          </div>
          <div className="moblist w-[290px] max-h-[60vh] items-center text-sm text-gray-700 overflow-y-scroll scroll-smooth scroll-m-0 scrollbar-hide">
            <ul>
              <li className="flex items-center ">
                <img
                  src={Bluelogo}
                  alt="logo"
                  className="w-[15px] h-[15px] mr-2"
                ></img>
                <span>Walmart+</span>
              </li>
              <hr className="w-full text-gray-500 my-4" />
              <li className="flex items-center">
                <IoNewspaperOutline className="w-[15px] h-[15px] mr-2" />
                <span>Purchase History</span>
              </li>
              <li className="flex items-center">
                <BsBoxArrowInDown className="w-[15px] h-[15px] mr-2" />
                <span>My Items</span>
              </li>
              <li className="flex items-center">
                <GoPerson className="w-[15px] h-[15px] mr-2" />
                <span>Account</span>
              </li>
              <hr className="w-full text-gray-500 my-4" />
              <li className="flex items-center">
                <RxQuestionMarkCircled className="w-[15px] h-[15px] mr-2" />
                <span>Help</span>
              </li>
              <hr className="w-full text-gray-500 my-4" />
              <li className="flex items-center">
                <AiOutlineHeart className="w-[15px] h-[15px] mr-2" />
                <span>List</span>
              </li>

              <li className="flex items-center">
                <CiGift className="w-[15px] h-[15px] mr-2" />
                <span>Registries</span>
              </li>
              <hr className="w-full text-gray-500 my-4" />
              <li className="flex items-center">
                <PiSquaresFour className="w-[15px] h-[15px] mr-2" />
                <span>Departments</span>
              </li>
              <li className="flex items-center">
                <PiCirclesFour className="w-[15px] h-[15px] mr-2" />
                <span>Services</span>
              </li>
              <hr className="w-full text-gray-500 my-4" />
              <li className="flex items-center">
                <BsChat className="w-[15px] h-[15px] mr-2" />
                <span>Give Feedbck</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomNavbar;
