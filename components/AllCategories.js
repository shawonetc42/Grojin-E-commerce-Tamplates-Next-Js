import React from "react";
const data = [
  {
    id: 1,
    title: "All Categories",
    image: "/icons/i.klb-icon-layout-grid.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Fruits & Vegetables",
    image: "/icons/apple.svg fill.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Meats & Seafood",
    image: "/icons/meat.svg.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "Breaksfast & Dairy",
    image: "/icons/boiled-egg.svg.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    title: "Breads & Bakery",
    image: "/icons/toast-bread.svg.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    title: "Beverages",
    image: "/icons/cup.svg.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    title: "Frozen Foods",
    image: "/icons/snowflake.svg.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    title: "Biscuits & Snacks",
    image: "/icons/bar.svg.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 9,
    title: "Grocery & Staples",
    image: "/icons/wheat.svg.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 10,
    title: "Household Needs",
    image: "/icons/scoop.svg.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
function AllCategories() {
  return (
    <div className="absolute flex flex-col justify-center text-base font-semibold tracking-tight leading-10 bg-white  border border-t border-r border-l border-solid rounded-lg max-w-[300px] text-gray-950">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex gap-5 justify-between items-center px-5 py-px w-full rounded-lg border-b"
        >
          <div className="flex items-center gap-3.5 my-auto">
            <img
              src={item.image}
              alt="icons"
              className="w-5 h-5 items-center"
            />
            <div>{item.title}</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/02faea6c017b1504331b25c4a25712e12d6b1bda78afe0b01f77c0f248568d72?"
            className="shrink-0 self-start w-2.5 aspect-[0.21]"
          />
        </div>
      ))}
    </div>
  );
}

export default AllCategories;
