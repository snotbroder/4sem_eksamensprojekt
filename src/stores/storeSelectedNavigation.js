import { create } from "zustand";

export const storeSelectedNavigation = create((set) => ({
  selectedNavigation: "",
  setStoreSelectedNavigation: (newSelection) => set({ selectedNavigation: newSelection }),
}));
