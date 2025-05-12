"use client";
import { useEffect, useState } from "react";

import { storeSelectedNavigation } from "@/stores/storeSelectedNavigation";
import Dashboard_pageName from "@/components/dashboard/Dashboard_pageName";
import Dashboard_addMenuDBItem from "@/components/dashboard/Dashboard_addMenuDBItem";
import Dashboard_menuDBVisualiser from "@/components/dashboard/Dashboard_menuDBVisualiser";

export default function menusPage() {
  const setSelected = storeSelectedNavigation((state) => state.setStoreSelectedNavigation); // always called

  useEffect(() => {
    setSelected("menus");
  }, [setSelected]); // safe because this hook always runs now
  const [openAddMenu, setOpenAddMenu] = useState(false);

  function handleOpenAddMenu() {
    setOpenAddMenu((prevState) => !prevState);
  }

  return (
    <>
      <Dashboard_pageName text="menus" />
      <section className="flex justify-between ">
        <p className="max-w-[400px] ">Click on an existing menu to configure or delete the selected menu. Or create a new one using the button.</p>
        <button className="border-gray-200 border-2 p-xxs " onClick={handleOpenAddMenu}>
          {openAddMenu ? "Back" : "Add new menu"}
        </button>
      </section>
      {openAddMenu ? (
        <div className="slideIn">
          <Dashboard_addMenuDBItem />
        </div>
      ) : (
        <Dashboard_menuDBVisualiser />
      )}
    </>
  );
}
