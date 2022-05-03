import { atom } from "recoil";

export const centerState = atom({
  key: "centerState",
  default: [
    {
      id: 1,
      rating: 10,
      text: "This is the 1st text: Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
    {
      id: 2,
      rating: 9,
      text: "This is the second text: Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
    {
      id: 3,
      rating: 7,
      text: "This is the third text: Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
  ],
});

export const editState = atom({
  key: "editState",
  default: {
    item: {},
    edit: false,
  },
});
