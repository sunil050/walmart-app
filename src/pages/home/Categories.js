import React, { useState } from "react";
import { categories } from "../../data/data-categories";

function Categories() {
  const [Categories, setCategories] = useState(categories);
  return (
    <div>
      <div className="flex justify-between px-3">
        <div className="text-black m-0">
          <h1 className="text-[22px] font-bold">Get it all right here</h1>
        </div>
        <a className="text-sm text-black">View all</a>
      </div>
      {/* For smaler screen */}
      <div className="lg:hidden grid grid-cols-4 grid-rows-2 gap-4 m-3 items-center">
        {categories.slice(0, 8).map((item, index) => (
          <div key={index} className="">
            <div className="p-1">
              <img
                src={item?.image}
                alt={item.name}
                className="w-[80px] h-auto object-contain mb-4 flex"
              />
            </div>
          </div>
        ))}
      </div>
      {/* For larger screen */}
      <div className="hidden lg:grid gap-4 m-3 overflow-x-scroll scrollbar-hide snap-x snap-start items-center grid-flow-col grid-rows-1">
        {categories.map((item, index) => (
          <div key={index} className=" ">
            <div className="p-1">
              <img
                src={item?.image}
                alt={item.name}
                className="w-auto h-auto object-contain mb-4 flex"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
