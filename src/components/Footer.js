import React from "react";

function Footer() {
  return (
    <div className="m-0 p-0">
      {/* footer-top */}
      <div className=" bg-[#E6F1FC] max-lg:bg-white flex items-center justify-center w-full h-auto max-lg:border-b-2">
        <div className="m-[30px]">
          <p className="">We'd love to hear what youu think!</p>
          <div className="flex items-center justify-center">
            <button className="bg-white font-bold rounded-full p-2 px-2 border-1 border-black">
              Give feedback
            </button>
          </div>
        </div>
      </div>
      {/* footer-bottom */}
      <div className="bg-[#004F9A] max-lg:bg-white flex items-center justify-center w-full h-auto">
        <div className="overflow-hidden">
          <ul className="lg:flex lg:flex-wrap justify-center max-lg:mx-4 max-lg:leading-10 p-0 py-4 w-[1210px] leading-5 gap-x-6 text-sm lg:text-white">
            <li>All Departments</li>
            <li>Store Directory</li>
            <li>Careers</li>
            <li>Our Company</li>
            <li>Sell on Walmart.com</li>
            <li>Help</li>
            <li>Product Recalls</li>
            <li>Accessibility</li>
            <li>Tax Exempt Program</li>
            <li>Get the Walmart App</li>
            <li>Sign-up for Email</li>
            <li>Safety Data Sheet</li>
            <li>Terms of Use</li>
            <li>Privacy Notice</li>
            <li>California Supply Chain Act</li>
            <li>Privacy Choices</li>
            <li>Your Privacy Choices</li>
            <li>Notice at Collection</li>
            <li>AdChoices</li>
            <li>NV Consumer Health Data Privacy Notice</li>
            <li>WA Consumer Health Data Privacy Notice</li>
            <li>Request My Personal Information</li>
            <li>Brand Shop Directory</li>
            <li>Pharmacy</li>
            <li>Walmart Business</li>
            <li>#IYWYK</li>
            <li>Delete Account</li>
          </ul>

          <div className="flex items-center justify-center">
            <div className="text-[11px] pb-2 lg:!text-white">
              &copy; 2023 Walmart All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
