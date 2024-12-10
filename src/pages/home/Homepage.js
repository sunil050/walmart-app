import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import Hero2 from "./Hero2";
import Products from "./Products";
import Productsscroll from "./Productsscroll";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Hero2 />
      <Products />
      <Productsscroll />
    </>
  );
};

export default Homepage;
