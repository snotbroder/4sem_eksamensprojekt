import { create } from "zustand";

export const storeSelectedNavigation = create((set) => ({
  // Her initializer vi en tom variable string
  selectedNavigation: "",

  //Her sætter vi variablen selectedNavigation når funktionen kaldes, og modtager en parameter
  setStoreSelectedNavigation: (newSelection) => set({ selectedNavigation: newSelection }),
}));
