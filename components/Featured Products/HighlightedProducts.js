import React from "react";

const HProducts = [
  {
    id: 1,
    title: "100 Percent Apple Juice – 64 Bottle",
    price: "0.50",
    currentprice: "1.99",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig årrtorpa.",
    image: "/product/p1.png",
  },
  {
    id: 2,
    title: "Great Value Rising Crust Frozen Pizza, Supreme",
    price: "0.50",
    currentprice: "1.99",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig årrtorpa.",
    image: "/product/p2.png",
  },
  // Add more products as needed
];

function HighlightedProducts() {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {HProducts.map((product, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 flex flex-col justify-between"
        >
          <div className="flex justify-center">
            <img
              loading="lazy"
              src={product.image}
              alt={product.title}
              className="max-w-fit h-auto max-h-48 mx-auto"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold text-red-600">
                ${product.price}
              </div>
              <div className="text-sm text-gray-600 line-through">
                ${product.currentprice}
              </div>
            </div>
            <button className="mt-4 w-full bg-[#634C9F] hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HighlightedProducts;
