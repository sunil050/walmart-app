import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Hero2 from "./components/Hero2";
import Productsscroll from "./components/Productsscroll";

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Products />
      <Categories />
      <Productsscroll />
      <Hero2 />
      <Footer />
    </div>
  );
}

export default App;
