import React from "react";

function OtherCategories() {
  return (
    <div>
      {/* Other Categores */}
      <div className="flex flex-col self-start whitespace-nowrap">
        <div className="flex z-10 gap-2">
          <div className="my-auto">Home</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd5b7a5ac3c1cbdf8bcb4a1077891019695c8e41ee0ff22870b4b00cbbee7141?"
            className="shrink-0 w-2.5 aspect-[0.21]"
          />
        </div>
      </div>
      <div className="flex gap-2.5 self-start whitespace-nowrap">
        <div className="my-auto">Shop</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/90ba23c7bf05921254e026dbea8ff9087804850ea3b9185c1912eeb25ed200be?"
          className="shrink-0 aspect-[0.19] w-[9px]"
        />
      </div>
    </div>
  );
}

export default OtherCategories;
