import React from "react";

const shop1cardDataArray = [
  {
    id: 1,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4eddcd223d00ab59a1d7221bc182795e5546d716553111b5effd39954a5401e7?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
    promotion: "Only This Week",
    title1: "Provides you experienced",
    title2: "quality products",
    description: "Feed your family the best",
    shopNowImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7f0707714d935eb5c676bf953535e44b731368d8d2650b0a8b683824c94118c2?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4eddcd223d00ab59a1d7221bc182795e5546d716553111b5effd39954a5401e7?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
    promotion: "Only This Week",
    title1: "Provides you experienced",
    title2: "quality products",
    description: "Feed your family the best",
    shopNowImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7f0707714d935eb5c676bf953535e44b731368d8d2650b0a8b683824c94118c2?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4eddcd223d00ab59a1d7221bc182795e5546d716553111b5effd39954a5401e7?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
    promotion: "Only This Week",
    title1: "Provides you experienced",
    title2: "quality products",
    description: "Feed your family the best",
    shopNowImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7f0707714d935eb5c676bf953535e44b731368d8d2650b0a8b683824c94118c2?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4eddcd223d00ab59a1d7221bc182795e5546d716553111b5effd39954a5401e7?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
    promotion: "Only This Week",
    title1: "Provides you experienced",
    title2: "quality products",
    description: "Feed your family the best",
    shopNowImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7f0707714d935eb5c676bf953535e44b731368d8d2650b0a8b683824c94118c2?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&",
  },
];

function Shop1card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto mt-2">
      {shop1cardDataArray.map((data, index) => (
        <div
          key={index}
          className="flex overflow-hidden relative flex-col items-start pt-6 pr-16 pb-20 pl-5 text-xs font-bold tracking-tight aspect-[0.8]"
        >
          <img
            loading="lazy"
            src={data.imageUrl}
            className="object-cover absolute inset-0 size-full"
            alt="Shop1card"
          />
          <div className="relative font-medium text-orange-600">
            {data.promotion}
          </div>
          <div className="relative mt-3.5 text-xl tracking-tighter text-gray-900">
            {data.title1}
          </div>
          <div className="relative mt-1 text-xl tracking-tighter text-gray-900">
            {data.title2}
          </div>
          <div className="relative mt-3.5 text-sm tracking-tight leading-5 text-gray-500">
            {data.description}
          </div>
          <div className="flex relative gap-1.5 justify-center px-2 py-2 mt-5 text-center bg-white  border border-solid leading-[350%] rounded-2xl text-neutral-800">
            <div className="flex-auto">Shop Now</div>
            <img
              loading="lazy"
              src={data.shopNowImage}
              className="shrink-0 w-5 aspect-[1.43]"
              alt="Shop Now"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop1card;
