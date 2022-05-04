import { atom } from "recoil";

export const centerState = atom({
  key: "centerState",
  default: [],
});

export const editState = atom({
  key: "editState",
  default: {
    item: {},
    edit: false,
  },
});
