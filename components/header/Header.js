import React, { useState, useEffect } from "react";

function Header() {
  // State for timer values
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Function to update timer values
  const updateTimer = () => {
    // Set the end date and time of the sale
    const endDate = new Date("2024-05-31T00:00:00Z");
    const now = new Date();

    // Calculate the difference between current time and end time
    const difference = endDate - now;

    // Calculate days, hours, minutes, and seconds from the difference
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the state with new timer values
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  // Run the timer update function every second
  useEffect(() => {
    const timer = setInterval(updateTimer, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#634C9F] ">
      <div className="md:flex justify-between container mx-auto py-2 ">
        <h className="text-white px-2 text-sm">
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.
        </h>
        {/* Time */}
        <div className="flex  gap-4 px-5 tracking-tight text-white">
          <div className="grow my-auto text-xs font-medium">
            Until the end of the sale:
          </div>
          <div className="flex items-center gap-1.5 text-lg font-bold whitespace-nowrap">
            <div className="grow">{days}</div>
            <div className="text-xs">days</div>
            <div>{hours}</div>
            <div className="my-auto text-xs">hours</div>
            <div>{minutes}</div>
            <div className="my-auto text-xs">minutes</div>
            <div>{seconds}</div>
            <div className="my-auto text-xs">sec.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
