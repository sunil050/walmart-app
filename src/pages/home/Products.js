import React, { useState, useRef } from "react";
import { products } from "../../data/data";
import Jacket from "../../assets/Heroimage/jacket.jpg";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { addItemToCart } from "../../slices/cartSlice";

function Products() {
  const [Products, setProducts] = useState(products);
  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);
  const dispatch = useDispatch();

  const addOncart = (product) => {
    const Cartlist = {
      id: product.id,
      Image: product.image,
      name: product.name,
      description: product.description,
      Price: product.priceCurrent,
      brand: product.brand,
      originalPrice: product.priceOriginal,
      Quantity: 1,
    };
    dispatch(addItemToCart(Cartlist));
  };

  const scroll = (ref, direction, distance) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -distance : distance,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="">
      {/* Top bar - View All */}
      <div className="flex justify-between px-3">
        <div className="text-black">
          <h1 className="text-[22px] font-bold">Flash Deals</h1>
          <p className="font-light">Up to 65% off</p>
        </div>
        <a href="#" className="text-sm text-black">
          View all
        </a>
      </div>

      {/* First Section - Horizontal Scrolling Products */}
      <div className="relative mb-4 mx-3">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll(scrollContainerRef1, "left", 1400)}
          className="absolute flex justify-center items-center w-[50px] h-[50px] text-3xl left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full"
        >
          &lt;
        </button>

        <div
          ref={scrollContainerRef1}
          className="grid grid-flow-col overflow-x-scroll scrollbar-hide snap-x snap-start gap-4 px-10"
        >
          {Products.map((item) => (
            <div
              key={item.id}
              className="w-full h-full flex flex-col items-center"
            >
              <div className="flex-grow flex flex-col items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-auto h-[120px] lg:h-[180px] object-contain mb-4"
                />
                <div className="w-[90px] lg:w-[200px]">
                  <p className="lg:hidden block font-bold m-0">
                    ${Number(item.priceCurrent).toFixed(2)}
                  </p>
                  <p className="hidden lg:block text-green-900 font-bold text-lg p-0 m-0">
                    Now <span>${Number(item.priceCurrent).toFixed(2)}</span>{" "}
                    <span className="hidden lg:block text-gray-500 line-through font-light">
                      ${Number(item.priceOriginal).toFixed(2)}
                    </span>
                  </p>
                  {item.priceRange && Array.isArray(item.priceRange) && (
                    <div className="lg:block hidden">
                      <p className="price-range m-0">
                        Options from{" "}
                        <span>${Number(item.priceRange[0]).toFixed(2)}</span> -{" "}
                        <span>${Number(item.priceRange[1]).toFixed(2)}</span>
                      </p>
                    </div>
                  )}
                  <p className="product-description p-0 text-[12px] lg:text-[15px]">
                    {item.description
                      ? `${item.description.slice(0, 50)}...`
                      : "No description available"}
                  </p>
                </div>
              </div>
              {/* Add button positioned at the bottom */}
              <button
                onClick={() => addOncart(item)}
                className="bg-primary hover:opacity-75 text-white font-semibold py-1 px-5 rounded-full text-xl mt-4"
              >
                Add
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(scrollContainerRef1, "right", 1400)}
          className="absolute flex justify-center items-center w-[50px] h-[50px] text-3xl right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full"
        >
          &gt;
        </button>
        <ToastContainer />
      </div>

      <hr className="border-gray-200 mx-3" />

      {/* Second Section - Flash Deals with Big Image */}
      <div className="flex mb-4 mx-3 pt-4">
        <div className="hidden lg:block lg:w-[50%]">
          <div className="flex justify-between px-3">
            <div className="text-black">
              <h1 className="text-[22px] font-bold">Flash Deals</h1>
              <p className="font-light">Up to 65% off</p>
            </div>
            <a href="#" className="text-sm text-black">
              View all
            </a>
          </div>

          {/* Cards */}
          <div className="relative mb-4 mx-3">
            <button
              onClick={() => scroll(scrollContainerRef2, "left", 400)}
              className="absolute flex justify-center items-center w-[50px] h-[50px] text-3xl left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full"
            >
              &lt;
            </button>

            <div
              ref={scrollContainerRef2}
              className="grid grid-flow-col overflow-x-scroll scrollbar-hide snap-x snap-start gap-4 px-10"
            >
              {Products.map((item) => (
                <div
                  key={item.id}
                  className="w-full h-full flex flex-col items-center"
                >
                  <div className="flex-grow flex items-center justify-center flex-col">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-auto h-[180px] object-contain mb-4"
                    />
                    <div className="w-[200px]">
                      <p className="text-green-900 font-bold text-lg p-0 m-0">
                        Now <span>${item.priceCurrent}</span>{" "}
                        <span className="text-gray-500 line-through font-light">
                          ${item.priceOriginal}
                        </span>
                      </p>
                      {item.priceRange && (
                        <p className="price-range m-0">
                          Options from <span>${item.priceRange[0]}</span> -{" "}
                          <span>${item.priceRange[1]}</span>
                        </p>
                      )}
                      <p className="product-description text-[15px]">
                        {`${item.description.slice(0, 50)}...`}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => addOncart(item)}
                    className="bg-primary hover:opacity-75 text-white font-semibold py-1 px-5 rounded-full text-xl mt-4"
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll(scrollContainerRef2, "right", 400)}
              className="absolute flex justify-center items-center w-[50px] h-[50px] text-3xl right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Right Side Big Card */}
        <div className="bg-blue-200 w-full h-[250px] lg:w-[50%] lg:h-[350px] relative overflow-hidden rounded-xl">
          <img
            className="object-cover w-full h-full z-0 absolute"
            src={Jacket}
            alt="Jacket"
          />
          <div className="w-[500px] z-10 absolute m-4 text-black">
            <p className="text-lg font-normal">Food, decor & more</p>
            <p className="font-medium text-4xl">Thanksgiving feast</p>
            <a href="#" className="hover:no-underline text-sm text-black">
              Join now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
