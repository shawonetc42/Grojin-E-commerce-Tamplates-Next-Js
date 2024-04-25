import React from "react";
import AllCategories from "../AllCategories";
import OtherCategories from "../OtherCategories";

function NavCategory() {
  return (
    <div className="hidden md:flex justify-center items-center tracking-tight bg-white max-md:px-5 border-b">
      <div className="flex gap-5 justify-between items-start w-full container mx-auto max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-48">
          <div className="">
            {/* AllCategories */}
            <AllCategories />
          </div>
          <div className="flex gap-5  self-start">
            <div className="flex gap-2.5 items-center">
              <nav className="ml-8 flex gap-6">
                <a
                  href="#"
                  className="text-base font-semibold leading-10 text-gray-600 hover:text-gray-700 transition-colors duration-300 hover:underline"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-base font-semibold leading-10 text-gray-600 hover:text-gray-700 transition-colors duration-300 hover:underline"
                >
                  Shop
                </a>
                <a
                  href="#"
                  className="text-base font-semibold leading-10 text-gray-600 hover:text-gray-700 transition-colors duration-300 hover:underline"
                >
                  Fruits & Vegetables
                </a>
                <a
                  href="#"
                  className="text-base font-semibold leading-10 text-gray-600 hover:text-gray-700 transition-colors duration-300 hover:underline"
                >
                  Beverages
                </a>
                <a
                  href="#"
                  className="text-base font-semibold leading-10 text-gray-600 hover:text-gray-700 transition-colors duration-300 hover:underline"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-base font-semibold leading-10 text-gray-600 hover:text-gray-700 transition-colors duration-300 hover:underline"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="flex gap-5 justify-between self-start">
          <div className="flex gap-3 text-base font-semibold text-gray-950">
            <div className="grow my-auto">Trending Products</div>
          </div>
          <div className="flex gap-2.5 items-center">
            <div className="grow self-stretch my-auto text-base font-semibold leading-10 text-red-600">
              Almost Finished
            </div>
            <div className="justify-center self-stretch px-2 py-1.5 my-auto text-xs font-bold leading-3 text-center text-white whitespace-nowrap rounded bg-red-600">
              SALE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavCategory;
