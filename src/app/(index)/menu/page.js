"use client";
import MenuCard from "@/components/utility/MenuCard";
import Button from "../../../components/ui/buttons/Button";
import { useEffect, useState, useRef } from "react";
import { getAllItems } from "@/app/api";

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

  // Scroll system
  const cardRefs = useRef({}); //Lav et tomt object

  function scrollToCard(uuid) {
    const card = cardRefs.current[uuid];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  }

  return (
    <>
      <article className="overflow-hidden min-h-screen">
        {/* Parent container */}
        <div className="grid gap-xs lg:gap-xl lg:grid-cols-2 xl:grid-cols-3 lg:items-start">
          {/* Menu buttons and info */}
          <section className=" grid gap-xxs place-items-center sm-wh lg:sticky  lg:top-[15%] lg:self-start col-span-full lg:col-span-1">
            <div className="mx-xl ">
              <h1 className="border-b-2 border-darkbrown">Menu</h1>
              {/* <h2 className="border-y-2 border-darkbrown">Sharing- & winemenu, a la carte or theatermenu</h2> */}
              <p>The menus has to be ordered for the whole table, and sharedfamily-style. Your food will be served at a fresh pace.</p>
            </div>
            <div className="grid gap-xxs">
              {menus.length > 0 ? (
                menus.map((menu) => (
                  <li className="flex flex-col gap-xxs" key={menu.uuid}>
                    <Button onClick={() => scrollToCard(menu.uuid)} variant="secondary">
                      {menu.menuTitle}
                    </Button>
                  </li>
                ))
              ) : (
                <p className="animate-pulse">Loading buttons</p>
              )}
              {/* <Button variant="secondary">Theatermenu</Button>
              <Button variant="secondary">Weekendmenu</Button>
              <Button variant="secondary">Weekdaymenu</Button> */}
              <Button variant="secondary">A la carte</Button>
              <Button variant="secondary">Drinks & snacks</Button>
              <Button variant="secondary">Winemenu</Button>
            </div>
          </section>

          {/* Menu cards container */}
          <div className="col-span-full lg:col-span-1 xl:col-span-2 overflow-hidden">
            <section className="pl-xl pr-xl md:pr-3xl h-[100vh] pt-[60px] lg:pt-[120px] bg-[url('/Image_bank/wall_of_photos.jpg')] bg-cover">
              <ul className="snap-x snap-mandatory overflow-x-auto flex gap-xl scroll-smooth scrollbar-none ">
                {menus.length > 0 ? (
                  menus.map((menu) => (
                    <li ref={(el) => (cardRefs.current[menu.uuid] = el)} className="snap-start flex-shrink-0 min-w-[90%] sm:min-w-[70%] md:min-w-[50%] xl:min-w-[33%] flex flex-col gap-xxs" key={menu.uuid} onClick={() => clickHandler(menu.uuid)}>
                      {/* <Dashboard_menucard menuData={menu} /> */}
                      <MenuCard menuData={menu}></MenuCard>
                    </li>
                  ))
                ) : (
                  <p className="animate-pulse">Loading menu...</p>
                )}
              </ul>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
