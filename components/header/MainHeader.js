import React from "react";

function MainHeader() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-3.5 px-8 max-md:flex-wrap max-md:px-5">
        {/* Logo */}
        <img
          loading="lazy"
          srcSet="/logo.png"
          className="rounded-full w-16 md:w-20"
          alt="Logo"
        />

        {/* Search Bar */}
        <div className="flex-grow px-2">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-2 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-5  text-white rounded-r-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-y-0 left-0 top-1/2 transform -translate-y-1/2 ml-3 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3a6 6 0 014.172 10.172l5.185 5.186-1.415 1.415-5.186-5.185A6 6 0 119 3zm0 2a4 4 0 100 8 4 4 0 000-8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Account Icons */}
        <div className="flex items-center space-x-4">
          {/* Sign In Button */}

          {/* Register Button */}
          <button className="hidden md:block px-4 py-2 text-sm font-medium leading-4 text-white bg-[#634C9F] rounded-md hover:bg-[#634C9F]0 focus:outline-none focus:bg-indigo-700">
            Register
          </button>

          {/* Account Bar */}
          <div className="flex items-center space-x-1">
            <span className="text-sm font-medium text-gray-700">Account</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/43028b5a537d89751388e6195f9b39c4d4bb763e35304eb4a71cd86d28824d81?"
              className="w-5 h-5"
              alt="Account Icon"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainHeader;
