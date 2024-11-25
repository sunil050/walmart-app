import React, { useState, useRef } from "react";
import { products } from "../data/data";

function Productsscroll() {
  const [Products, setProducts] = useState(products);
  const scrollContainerRef3 = useRef(null);

  const scrollLeft3 = () => {
    if (scrollContainerRef3.current) {
      scrollContainerRef3.current.scrollBy({
        left: -1400, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const scrollRight3 = () => {
    if (scrollContainerRef3.current) {
      scrollContainerRef3.current.scrollBy({
        left: 1400, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="">
      {/* Top bar view all */}
      <div className="flex justify-between px-3 pb-5">
        <div className="text-black m-0">
          <h1 className="text-[22px] font-bold">
            Bestselling in sports & outdoors
          </h1>
        </div>
      </div>

      {/* Cards */}
      <div className="relative mb-4 mx-3">
        {/* Scroll Buttons */}

        <button
          onClick={scrollLeft3}
          className="absolute flex justify-center items-center  w-[50px] h-[50px] text-3xl left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full"
        >
          &lt;
        </button>

        <div
          ref={scrollContainerRef3}
          className="grid grid-flow-col overflow-x-scroll scrollbar-hide snap-x snap-start scroll-m-0 gap-4 px-10"
        >
          {Products.map((item, index) => (
            <div key={index} className="w-full h-full">
              <div className=" object-contain py-0 flex items-center justify-center flex-col">
                <img
                  src={item?.image}
                  alt={item.name}
                  className="w-auto h-[180px] object-contain mb-4"
                />
                <div className=" w-[200px]">
                  <p className="text-green-900 font-bold text-lg p-0 m-0">
                    Now <span className="">${item.priceCurrent}</span>{" "}
                    <span className=" text-gray-500 line-through font-light ">
                      ${item.priceOriginal}
                    </span>
                  </p>
                  <p className="font-normal text-sm">
                    {item.priceRange ? (
                      <div className="">
                        <p class="price-range m-0">
                          Options from <span>${item.priceRange[0]}</span> -
                          <span>${item.priceRange[1]}</span>
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </p>
                  <div className="">
                    <p className="product-description p-0 text-[15px]">
                      {`${item.description.slice(0, 50)}...`}
                    </p>
                  </div>

                  <button className="py-1 my-1 px-2 border border-black text-black rounded-full text-sm">
                    Options
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight3}
          className="absolute flex justify-center items-center w-[50px] h-[50px] text-3xl right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full"
        >
          &gt;
        </button>
      </div>
      <p className="border-b-[1px] border-gray-200 mx-3 pt-4"></p>
    </div>
  );
}

export default Productsscroll;
