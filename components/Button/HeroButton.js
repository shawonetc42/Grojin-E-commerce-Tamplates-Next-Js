import React from "react";

function HeroButton({ title, discriptions, button, link, icon }) {
  return (
    <div className="flex justify-between container mx-auto py-4 items-center">
      <div className="flex gap-2 items-center">
        <h1 className="font-bold">{title}</h1>
        <h1>{discriptions}</h1>
      </div>
      <div>
        <a
          href={link}
          className="flex items-center border rounded-full px-3 py-2"
        >
          <span className="mr-2">{button}</span>
          {icon && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M15 5a1 1 0 00-1-1H6a1 1 0 100 2h8a1 1 0 001-1zM5 8a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zM7 13a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </a>
      </div>
    </div>
  );
}

export default HeroButton;
