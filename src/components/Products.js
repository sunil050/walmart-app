import React, { useState, useRef } from "react";
import { products } from "../data/data";
import Jacket from "../assets/Heroimage/jacket.jpg";

function Products() {
  const [Products, setProducts] = useState(products);
  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);

  const scrollLeft1 = () => {
    if (scrollContainerRef1.current) {
      scrollContainerRef1.current.scrollBy({
        left: -1400, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const scrollLeft2 = () => {
    if (scrollContainerRef2.current) {
      scrollContainerRef2.current.scrollBy({
        left: -400, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const scrollRight1 = () => {
    if (scrollContainerRef1.current) {
      scrollContainerRef1.current.scrollBy({
        left: 1400, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight2 = () => {
    if (scrollContainerRef2.current) {
      scrollContainerRef2.current.scrollBy({
        left: 400, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="">
      {/* Top bar view all */}
      <div className="flex justify-between px-3">
        <div className="text-black m-0">
          <h1 className="text-[22px] font-bold">Flash Deals</h1>
          <p className="font-light">Up to 65% off</p>
        </div>
        <a className="text-sm text-black">View all</a>
      </div>

      {/* Cards */}
      <div className="relative mb-4 mx-3">
        {/* Scroll Buttons */}

        <button
          onClick={scrollLeft1}
          className="absolute flex justify-center items-center  w-[50px] h-[50px] text-3xl left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full"
        >
          &lt;
        </button>

        <div
          ref={scrollContainerRef1}
          className="grid grid-flow-col overflow-x-scroll scrollbar-hide snap-x snap-start scroll-m-0 gap-4 px-10"
        >
          {Products.map((item, index) => (
            <div key={index} className="w-full h-full">
              <div className=" object-contain py-0 flex items-center justify-center flex-col">
                <img
                  src={item?.image}
                  alt={item.name}
                  className="w-auto h-[120px] lg:h-[180px] object-contain mb-4"
                />
                <div className="w-[90px] lg:w-[200px]">
                  <p className="lg:hidden block font-bold m-0">
                    ${item.priceCurrent}
                  </p>
                  <p className="hidden lg:block text-green-900 font-bold text-lg p-0 m-0">
                    Now <span className="">${item.priceCurrent}</span>{" "}
                    <span className="hidden lg:block text-gray-500 line-through font-light ">
                      ${item.priceOriginal}
                    </span>
                  </p>
                  <p className="font-normal text-sm">
                    {item.priceRange ? (
                      <div className="lg:block hidden">
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
                    <p className="product-description p-0 text-[12px] lg:text-[15px]">
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
          onClick={scrollRight1}
          className="absolute flex justify-center items-center w-[50px] h-[50px] text-3xl right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full"
        >
          &gt;
        </button>
      </div>
      <p className="border-b-[1px] border-gray-200 mx-3 pt-4"></p>

      {/* Second section. Card-2 --------------------------------------------------*/}

      <div className="flex mb-4 mx-3 pt-4">
        <div
          className="hidden lg:block
         lg:w-[50%]"
        >
          <div className="flex justify-between px-3">
            <div className="text-black m-0">
              <h1 className="text-[22px] font-bold">Flash Deals</h1>
              <p className="font-light">Up to 65% off</p>
            </div>
            <a className="text-sm text-black">View all</a>
          </div>

          {/* Cards */}
          <div className="relative mb-4 mx-3">
            {/* Scroll Buttons */}

            <button
              onClick={scrollLeft2}
              className="absolute  justify-center items-center  w-[50px] h-[50px] text-3xl left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full"
            >
              &lt;
            </button>

            <div
              ref={scrollContainerRef2}
              className=" grid grid-flow-col overflow-x-scroll scrollbar-hide snap-x snap-start scroll-m-0 gap-4 px-10"
            >
              {Products.map((item, index) => (
                <div className="w-full h-full">
                  <div
                    key={index}
                    className=" object-contain py-0 flex items-center justify-center flex-col"
                  >
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
              onClick={scrollRight2}
              className="absolute flex justify-center items-center  w-[50px] h-[50px] text-3xl right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10"
            >
              &gt;
            </button>
          </div>
        </div>
        {/* Right side big card */}
        <div className="bg-blue-200 w-full h-[250px] lg:w-[50%] lg:h-[350px] relative overflow-hidden rounded-xl">
          <img
            className="object-cover w-[100%] h-[100%] z-0 absolute "
            src={Jacket}
          ></img>

          {/* //peragraph section */}
          <div className="w-[500px] z-10 absolute m-4 text-black">
            <p className=" text-lg font-normal">Food, decor & more</p>
            <p className=" font-medium text-4xl">Thanksgiving feast</p>
            <a className=" hover:no-underline text-sm text-black">Join now</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
