import React from "react";

function Navigation() {
  return (
    <div className="border-b hidden md:block ">
      <div className="flex justify-between container mx-auto py-2">
        <div className="flex justify-between gap-2">
          <div className="flex gap-2 border-r-2 px-4">
            <ul className="flex gap-2">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
            </ul>
          </div>

          <div className="flex gap-2 font-semibold ">
            <h1>We deliver to you every day from</h1>
            <h1 className="text-red-700">7:00 to 23:00</h1>
          </div>
        </div>

        <ul className="flex gap-2">
          <li>
            <a href="#">English</a>
          </li>
          <li>
            <a href="#">USD</a>
          </li>
          <li>
            <a href="#">Order Tracking</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
