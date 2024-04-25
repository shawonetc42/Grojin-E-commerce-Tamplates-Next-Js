import React from "react";

const HProducts = [
  {
    title: "Cupcakes",
    price: "0.50",
    currentprice: "1.99",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig årrtorpa.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },
  {
    title: "Cupcakes",
    price: "0.50",
    currentprice: "1.99",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig årrtorpa.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },
  {
    title: "Cupcakes",
    price: "0.50",
    currentprice: "1.99",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig årrtorpa.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },
  {
    title: "Cupcakes",
    price: "0.50",
    currentprice: "1.99",
    description:
      "Tasigförsamhet beteendedesign. Mobile checkout. Ylig årrtorpa.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3bc64fef2deee36e71f98b34b00c31d2ce5e9eee43a901b83f142003ff00a697?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },
  // Add more products as needed
];

function HighlightedProducts() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   border border-t border-r border-l border-solid ">
      {HProducts.map((product, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden shadow-md"
        >
          <img
            loading="lazy"
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold text-red-600">
                {product.price}
              </div>
              <div className="text-sm text-gray-600 line-through">
                {product.currentprice}
              </div>
            </div>
            <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HighlightedProducts;
