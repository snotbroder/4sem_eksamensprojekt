"use client";
import MenuCard from "@/components/layout/MenuCard";
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
  }, []); //Jeg bruger useEffect fordi ellers renderer komponenten hele tiden. Jeg får den kun til at køre én gang når siden lades

  return (
    <div className="">
      <article className="">
        <div className="   px-s lg:pl-6xl  lg:px-0 grid gap-xs lg:gap-xl  lg:grid-cols-5 lg:items-start">
          <div className="grid gap-xxs  lg:sticky lg:top-[15%] lg:self-start col-span-2 ">
            <div>
              <h1>Menu</h1>
              <hr></hr>
              <h2>Sharing- & winemenu, a la carte or theatermenu</h2>
              <hr className="bg-darkbrown"></hr>
              <p className="">The menus has to be ordered for the whole table, and sharedfamily-style. Your food will be served at a fresh pace.</p>
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

          <div className="col-span-3">
            {menus.length > 0 ? (
              menus.map((menu) => (
                <li className="flex flex-col gap-xxs" key={menu.uuid} onClick={() => clickHandler(menu.uuid)}>
                  <Dashboard_menucard menuData={menu} />
                </li>
              ))
            ) : (
              <p className="animate-pulse">Loading menu...</p>
            )}
            <article className=" lg:pt-[90px] flex place-content-center  bg-[url('/Image_bank/aboutus/interior1.png')] bg-cover h-[100vh] ">
              <MenuCard className="self-center "></MenuCard>
            </article>
            <article className=" lg:pt-[90px] flex place-content-center  bg-[url('/Image_bank/aboutus/interior1.png')] bg-cover h-[100vh] ">
              <MenuCard className="self-center "></MenuCard>
            </article>
            <article className=" lg:pt-[90px] flex place-content-center  bg-[url('/Image_bank/aboutus/interior1.png')] bg-cover h-[100vh] ">
              <MenuCard className="self-center "></MenuCard>
            </article>
          </div>
        </div>
      </article>
      <article>
        <MenuCard></MenuCard>
      </article>
    </div>
  );
}
