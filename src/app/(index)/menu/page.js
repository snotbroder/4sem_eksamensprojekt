"use client";
import MenuCard from "@/components/utility/MenuCard";
import Button from "../../../components/ui/buttons/Button";
import { useEffect, useState } from "react";
import { getAllItems } from "@/app/api";
import Dashboard_menucard from "@/components/dashboard/Dashboard_menucard";

export default function Menu() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    //Kør funktion når kompomenten lades
    //Fetcher databasens data, og sætter det i lokalt state
    async function fetchMenus() {
      const fetchedMenus = await getAllItems("menu-database");
      setMenus(fetchedMenus);
    }

    fetchMenus();
  }, []);

  return (
    <>
      <article className="overflow-hidden">
        <div className="grid gap-xs lg:gap-xl  lg:grid-cols-3 lg:items-start">
          <div className="grid gap-xxs place-items-center  lg:sticky lg:top-[15%] lg:self-start col-span-1 ">
            <div className="">
              <h1 className="border-b-2 border-darkbrown">Menu</h1>

              {/* <h2 className="border-y-2 border-darkbrown">Sharing- & winemenu, a la carte or theatermenu</h2> */}

              <p>The menus has to be ordered for the whole table, and sharedfamily-style. Your food will be served at a fresh pace.</p>
            </div>
            <div className="grid gap-xxs">
              <Button variant="secondary">Theatermenu</Button>
              <Button variant="secondary">Weekendmenu</Button>
              <Button variant="secondary">Weekdaymenu</Button>
              <Button variant="secondary">A la carte</Button>
              <Button variant="secondary">Drinks & snacks</Button>
              <Button variant="secondary">Winemenu</Button>
            </div>
          </div>

          <div className="col-span-2 overflow-hidden -mx-s ">
            <article className="place-items-center lg:pt-[90px] flex gap-sm   bg-[url('/Image_bank/wall_of_photos.jpg')] bg-cover h-[100vh] overflow-x-scroll pl-5xl pr-5xl">
              {menus.length > 0 ? (
                menus.map((menu) => (
                  <li className="flex flex-col gap-xxs " key={menu.uuid} onClick={() => clickHandler(menu.uuid)}>
                    {/* <Dashboard_menucard menuData={menu} /> */}
                    <MenuCard menuData={menu}></MenuCard>
                  </li>
                ))
              ) : (
                <p className="animate-pulse">Loading menu...</p>
              )}
            </article>
          </div>
        </div>
      </article>
    </>
  );
}
