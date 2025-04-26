import { create } from "zustand";

export const useStoreTest = create((set) => ({
  menuData: [
    {
      menuTitle: "",
      course1: "",
    },
  ],
  setMenus: (newItem) => set({ menuData: newItem }),
}));
