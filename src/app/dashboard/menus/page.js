"use client";
import { useEffect, useState } from "react";

import { storeSelectedNavigation } from "@/stores/storeSelectedNavigation";
import Dashboard_pageName from "@/components/dashboard/Dashboard_pageName";
import Dashboard_addMenuDBItem from "@/components/dashboard/Dashboard_addMenuDBItem";
import Dashboard_menuDBVisualiser from "@/components/dashboard/Dashboard_menuDBVisualiser";
import Button from "@/components/ui/buttons/Button";
import IconComponent from "@/components/ui/IconComponent";

export default function menusPage() {
  const setSelected = storeSelectedNavigation((state) => state.setStoreSelectedNavigation); // always called

  useEffect(() => {
    setSelected("menus");
  }, []); //Sæt navmenu selected state
  // setSelected <<< used to be in useEffect bracket

  const [openAddMenu, setOpenAddMenu] = useState(false);

  function handleOpenAddMenu() {
    setOpenAddMenu((prevState) => !prevState);
  }

  return (
    <>
      <Dashboard_pageName text="menus" />
      <section className="flex justify-between ">
        {openAddMenu ? <p className="max-w-[400px] ">When creating a new menu, you are able to add up to 10 courses. Please take note of the required fields for creating a new menu.</p> : <p className="max-w-[400px] ">Click on an existing menu to configure or delete the selected menu. Or create a new one using the button.</p>}

        <Button variant="secondary" onClick={handleOpenAddMenu}>
          {openAddMenu ? <IconComponent icon="arrowback" /> : <IconComponent icon="add" />}
          {openAddMenu ? "Back" : "Add new menu"}
        </Button>
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
