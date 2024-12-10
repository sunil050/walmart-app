import React from "react";
import Gift from "../../assets/Heroimage/gifts.jpg";
import Stove from "../../assets/Heroimage/stovetop.jpg";
import Cooker from "../../assets/Heroimage/ricecooker.jpg";
import Coffe from "../../assets/Heroimage/coffemaker.jpg";
import Off from "../../assets/Heroimage/offer50.jpg";
import Girls from "../../assets/Heroimage/girlscris.jpg";
import Chicken from "../../assets/Heroimage/chicken.jpg";
import Firetree from "../../assets/Heroimage/firetree.jpg";
import Vacum from "../../assets/Heroimage/vacum.png";
import Off49 from "../../assets/Heroimage/off49.png";

function Hero() {
  return (
    <div className="w-full h-full m-0 mb-4 ">
      <div className="my-4 ">
        <div className="corner grid grid-cols-[95%] sm:grid-cols-[95%] lg:grid-cols-[22%_50%_22%] gap-4 justify-center">
          {/* Left-grid */}
          <div className="left grid gap-y-4">
            <div className="bg-blue-200 h-[200px] ">
              <img
                className="object-cover w-full h-full z-0 absolute"
                src={Off}
              ></img>

              {/* //peragraph section */}
              <div className="w-[200px] z-10 absolute m-4 text-black">
                <p className=" font-bold text-lg">Save on a year of Walmart+</p>
                <a className=" hover:no-underline text-sm text-black">
                  Join now
                </a>
              </div>
            </div>
            <div className="bg-blue-500 h-[450px]">
              <img
                className="object-cover w-full h-full z-0 absolute"
                src={Girls}
              ></img>

              {/* //peragraph section */}
              <div className="w-[270px] z-10 absolute m-4 text-white">
                <p className=" font-bold text-[26px]">
                  Joi-filled jammies for all
                </p>
                <a className=" hover:no-underline text-sm text-white">
                  Shop now
                </a>
              </div>
            </div>
            <div className="bg-blue-900 h-[180px]">
              <img
                className="object-cover w-full h-full absolute z-0"
                src={Stove}
              ></img>

              {/* //peragraph section */}
              <div className="w-[300px] z-10 absolute m-4 text-black">
                <p className=" font-bold text-2xl">Pantry basics for less</p>
                <a className=" hover:no-underline text-sm text-black">
                  Shop groceries
                </a>
              </div>
            </div>
          </div>
          {/* Center-grid */}
          <div className="center left grid gap-y-4">
            <div className="bg-blue-200 h-[330px]">
              <img
                className="object-cover w-full h-full z-0 absolute"
                src={Chicken}
              ></img>

              {/* //peragraph section */}
              <div className="w-[500px] z-10 absolute m-4 text-black">
                <p className=" text-lg font-normal">Food, decor & more</p>
                <p className=" font-medium text-4xl">Thanksgiving feast</p>
                <a className=" hover:no-underline text-sm text-black">
                  Join now
                </a>
              </div>
            </div>
            <div className="centerTwo h-[320px] grid grid-cols-2 w-full gap-4">
              <div className="bg-blue-900 h-full w-full">
                <img
                  className="object-cover w-full h-full z-0 absolute"
                  src={Firetree}
                ></img>

                {/* //peragraph section */}
                <div className="w-[200px] z-10 absolute m-4 text-black">
                  <p className=" font-bold text-lg">
                    Save on a year of Walmart+
                  </p>
                  <a className=" hover:no-underline text-sm text-black">
                    Join now
                  </a>
                </div>
              </div>
              <div className="bg-blue-200 h-full w-full">
                <img
                  className="object-cover w-full h-full z-0 absolute"
                  src={Vacum}
                ></img>

                {/* //peragraph section */}
                <div className="w-[200px] z-10 absolute m-4 text-black">
                  <p className=" font-bold text-lg">
                    Save on a year of Walmart+
                  </p>
                  <a className=" hover:no-underline text-sm text-black">
                    Join now
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-blue-900 h-[180px]">
              <img
                className="object-cover w-full h-full z-0 absolute"
                src={Off49}
              ></img>

              {/* //peragraph section */}
              <div className="w-[500px] z-10 absolute m-4 text-black">
                <p className=" text-lg font-normal">Food, decor & more</p>
                <p className=" font-medium text-4xl">Thanksgiving feast</p>
                <a className=" hover:no-underline text-sm text-black">
                  Join now
                </a>
              </div>
            </div>
          </div>
          {/* Right-grid */}
          <div className="right grid gap-y-4">
            <div className="bg-blue-200 h-[180px]">
              <img
                className="object-cover w-full h-full z-0 absolute"
                src={Coffe}
              ></img>

              {/* //peragraph section */}
              <div className="w-[200px] z-10 absolute m-4 text-black">
                <p className=" font-bold text-lg">Save on a year of Walmart+</p>
                <a className=" hover:no-underline text-sm text-black">
                  Join now
                </a>
              </div>
            </div>
            <div className="bg-blue-900 h-[200px]">
              <img
                className="object-cover w-full h-full z-0 absolute"
                src={Cooker}
              ></img>

              {/* //peragraph section */}
              <div className="w-[300px] z-10 absolute m-4 text-black">
                <p className=" font-bold text-2xl">Pantry basics for less</p>
                <a className=" hover:no-underline text-sm text-black">
                  Shop groceries
                </a>
              </div>
            </div>
            <div className="bg-blue-500 h-[450px]">
              <img
                className="object-cover w-full h-full z-0 absolute"
                src={Gift}
              ></img>

              {/* //peragraph section */}
              <div className="w-[270px] z-10 absolute m-4 text-white">
                <p className=" font-bold text-[26px]">
                  Joi-filled jammies for all
                </p>
                <a className=" hover:no-underline text-sm text-white">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
