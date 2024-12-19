import React from "react";
import Cart from "./Cart";
import Navbar from "../../components/Navbar";
import ShoppingCart from "./Shoppingcart";
import { ToastContainer } from "react-toastify";

const Cartpage = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <ToastContainer />
    </>
  );
};

export default Cartpage;
