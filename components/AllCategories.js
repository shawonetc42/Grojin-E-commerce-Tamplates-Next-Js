import React from "react";
const data = [
  {
    id: 1,
    title: "All Categories",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7531c16aee761a9bdd27269cacb61b583900886181994ec99951965f6092a443?width=2000&height=2000&quality=100&format=webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    title: "All Categories",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7531c16aee761a9bdd27269cacb61b583900886181994ec99951965f6092a443?width=2000&height=2000&quality=100&format=webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    title: "All Categories",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7531c16aee761a9bdd27269cacb61b583900886181994ec99951965f6092a443?width=2000&height=2000&quality=100&format=webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    title: "All Categories",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7531c16aee761a9bdd27269cacb61b583900886181994ec99951965f6092a443?width=2000&height=2000&quality=100&format=webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    title: "All Categories",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7531c16aee761a9bdd27269cacb61b583900886181994ec99951965f6092a443?width=2000&height=2000&quality=100&format=webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    title: "All Categories",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7531c16aee761a9bdd27269cacb61b583900886181994ec99951965f6092a443?width=2000&height=2000&quality=100&format=webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    title: "All Categories",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7531c16aee761a9bdd27269cacb61b583900886181994ec99951965f6092a443?width=2000&height=2000&quality=100&format=webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    title: "All Categories",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7531c16aee761a9bdd27269cacb61b583900886181994ec99951965f6092a443?width=2000&height=2000&quality=100&format=webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    title: "All Categories",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F7531c16aee761a9bdd27269cacb61b583900886181994ec99951965f6092a443?width=2000&height=2000&quality=100&format=webp",
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
          className="flex gap-5 justify-between items-start px-5 py-px w-full rounded-lg border-b"
        >
          <div className="flex gap-3.5 my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7531c16aee761a9bdd27269cacb61b583900886181994ec99951965f6092a443?"
              className="shrink-0 aspect-[1.22] w-[22px]"
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
