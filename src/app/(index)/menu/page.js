"use client";
import Image from "next/image";
import MenuCard from "@/components/utility/MenuCard";
import Button from "../../../components/ui/buttons/Button";
import { useEffect, useState, useRef } from "react";
import { getAllItems } from "@/app/api";
import ClipboardCard from "@/components/utility/ClipboardCard";
import Wineshelf_Gif from "/public/Image_bank/gifs/illustration-wineshelf.gif";

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
      {/* min-h-screen */}
      <article className=" ">
        {/* Parent container */}
        <div className="grid gap-sm lg:grid-cols-2 xl:grid-cols-5 lg:items-start ">
          {/* Menu buttons and info */}
          <section className="mx-sm lg:mx-6xl grid gap-xxs  sm-wh  mt-[18vh] md:self-start col-span-full lg:col-span-1 xl:col-span-2">
            <div className=" justify-self-start ">
              <h1 className="border-b border-darkbrown">Menu</h1>
              {/* <h2 className="border-y-2 border-darkbrown">Sharing- & winemenu, a la carte or theatermenu</h2> */}
              <p>
                The menus has to be ordered for the whole table, and
                sharedfamily-style. Your food will be served at a fresh pace.
              </p>
            </div>
            <div className="grid gap-xxs">
              {menus.length > 0 ? (
                menus.map((menu) => (
                  <li className="flex flex-col gap-xxs" key={menu.uuid}>
                    <Button
                      onClick={() => scrollToCard(menu.uuid)}
                      variant="secondary"
                    >
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
          <div className="col-span-full lg:col-span-1 xl:col-span-3 overflow-hidden bg-[url('/Image_bank/bg-images/wall_of_photos.jpg')] bg-cover pb-2xl">
            <section className="pl-xl pr-xl md:pr-3xl py-[60px] lg:pt-[120px] ">
              <ul className="snap-x snap-mandatory overflow-x-auto flex gap-xl scroll-smooth scrollbar-none ">
                {menus.length > 0 ? (
                  menus.map((menu) => (
                    <li
                      ref={(el) => (cardRefs.current[menu.uuid] = el)}
                      className="snap-start flex-shrink-0 min-w-[90%] sm:min-w-[70%] md:min-w-[50%] xl:min-w-[33%] flex flex-col gap-xxs"
                      key={menu.uuid}
                      onClick={() => clickHandler(menu.uuid)}
                    >
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

        <section className="grid md:grid-cols-2 gap-3xl md:gap-sm px-sm lg:px-6xl py-3xl bg-[url('/Image_bank/aboutus/spoons.png')] bg-cover ">
          <ClipboardCard bgcolor="secondary-200">
            <article className="  flex flex-col gap-sm md:justify-between h-full ">
              <div className="grid gap-sm">
                <header className="   pt-xs ">
                  <h2 className="border-y border-darkbrown">A la carte</h2>
                </header>
                <main className=" ">
                  <article className="flex justify-between">
                    <p>Grilled focaccia & aoli</p>

                    <p className="price">65DKK</p>
                  </article>
                  <article className="flex justify-between">
                    <p>Salted scallop with lime, daikon & coriander</p>

                    <p className="price">125DKK</p>
                  </article>
                  <article className="flex justify-between">
                    <p>Stracciatella, grilled leek & fresh mint</p>

                    <p className="price">115DKK</p>
                  </article>
                  <article className="flex justify-between">
                    <p>Potato croquette, parsley cream & herb salad</p>

                    <p className="price">130DKK</p>
                  </article>
                  <article className="flex justify-between">
                    <p>Fried pollock, kimchi, oyster sauce & spring onion</p>

                    <p className="price">155DKK</p>
                  </article>
                  <article className="flex justify-between">
                    <p>Pork belly, satay, pak choi & teriyaki</p>

                    <p className="price">135DKK</p>
                  </article>
                  <article className="flex justify-between">
                    <p>Deep-fried Camembert with blackcurrant</p>

                    <p className="price">85DKK</p>
                  </article>
                  <article className="flex justify-between">
                    <p>Plum ice cream, almond & double cream</p>

                    <p className="price">85DKK</p>
                  </article>
                  <article className="flex justify-between">
                    <p>
                      Banana ice cream, chocolate, crème anglaise & hazelnut
                    </p>

                    <p className="price">85DKK</p>
                  </article>
                </main>
              </div>

              <footer>
                <Image
                  src="/Image_bank/illustrations/foodandwine1_darkbrown.svg"
                  width={100}
                  height={100}
                  alt="illustration of food and a person pouring wine"
                  className="w-full"
                ></Image>
              </footer>
            </article>
          </ClipboardCard>
          <ClipboardCard bgcolor="primary-200">
            <article className=" grid gap-sm">
              <header className=" grid pt-xs ">
                <h2 className="border-y border-darkbrown ">Drinks & snacks</h2>
              </header>
              <main className=" grid gap-sm">
                <article>
                  <div className="flex justify-between">
                    <div>
                      <p>Gin/tonic</p>
                      <p className="price -mt-xs">Gin, classic tonic & lime</p>
                    </div>
                    <p className="price">85DKK</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p>Paloma</p>
                      <p className="price -mt-xs">Tequila, pink grape & lime</p>
                    </div>
                    <p className="price">85DKK</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p>Dark & stormy</p>
                      <p className="price -mt-xs">
                        Dark rum, ginger ale & lime
                      </p>
                    </div>
                    <p className="price">85DKK</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p>Aperol spritz</p>
                      <p className="price -mt-xs">Aperol, cava & orange</p>
                    </div>
                    <p className="price">85DKK</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p>Espresso martini</p>
                      <p className="price -mt-xs">
                        Vodka, espresso & coffeeliquor
                      </p>
                    </div>
                    <p className="price">100DKK</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p>Whiskey sour</p>
                      <p className="price -mt-xs">
                        Bourbon, citron, angostura bitters, eggwhites & sugar
                      </p>
                    </div>
                    <p className="price">100DKK</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p>Margarita</p>
                      <p className="price -mt-xs">
                        Tequila, triple sec, liquor & lemon
                      </p>
                    </div>
                    <p className="price">100DKK</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p>Negroni</p>
                      <p className="price -mt-xs">
                        Gin, campari, dolin vermouth & orange
                      </p>
                    </div>
                    <p className="price">85DKK</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p>Old fashioned</p>
                      <p className="price -mt-xs">
                        Bourbon, maraschino-liquor, angostura bitters & orange
                      </p>
                    </div>
                    <p className="price">85DKK</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p>Royal grey</p>
                      <p className="price -mt-xs">
                        Ginish, earl grey sirup & lemon (alcoholfree)
                      </p>
                    </div>
                    <p className="price">85DKK</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p>Coffee & avec</p>
                      <p className="price -mt-xs">
                        Gælder americano eller espresso
                      </p>
                    </div>
                    <p className="price">80DKK</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Sparkling/still water pr. person</p>

                    <p className="price">25DKK</p>
                  </div>
                </article>
                <article className="grid-cols-2 grid gap-lg  ">
                  <div className="self-end">
                    <div className="flex justify-between">
                      <p>Olives</p>

                      <p className="price">65DKK</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Roased marcona almonds</p>

                      <p className="price">60DKK</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <p>Cognac</p>

                      <p className="price">65DKK</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Whiskey</p>

                      <p className="price">65DKK</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Rum</p>

                      <p className="price">65DKK</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Brandy</p>

                      <p className="price">65DKK</p>
                    </div>
                  </div>
                </article>
              </main>
            </article>
          </ClipboardCard>
        </section>
        <section className="grid md:grid-cols-2 gap-3xl md:gap-sm px-sm lg:px-6xl py-3xl">
          <ClipboardCard bgcolor="secondary-300">
            <article className="  flex flex-col gap-sm ">
              <header className="  pt-xs ">
                <h2 className="border-y border-darkbrown">Winemenu</h2>
              </header>
              <main className=" ">
                <article className="flex justify-between">
                  <div>
                    <p>Landwein(1 liter) </p>
                    <p className="price -mt-xs">
                      Grüner veltliner, Austria, NV
                    </p>
                  </div>
                  <p className="price">80 / 450DKK</p>
                </article>
                <article className="flex justify-between">
                  <div>
                    <p> Riesling trocken </p>
                    <p className="price -mt-xs">Riesling, Moselle, 2022</p>
                  </div>
                  <p className="price">95 / 425DKK</p>
                </article>
                <article className="flex justify-between">
                  <div>
                    <p> Soave </p>
                    <p className="price -mt-xs">Garganega, Italy, 2022</p>
                  </div>
                  <p className="price">100 / 450DKK</p>
                </article>
                <article className="flex justify-between">
                  <div>
                    <p>Les bruchots </p>
                    <p className="price -mt-xs">Chardonnay, Burgundy, 2023</p>
                  </div>
                  <p className="price">125 / 525DKK</p>
                </article>
                <article className="flex justify-between">
                  <div>
                    <p>Bourgogne pinot noir</p>
                    <p className="price -mt-xs">Pinot noir, Burgundy, 2022</p>
                  </div>
                  <p className="price">125 / 545DKK</p>
                </article>
                <article className="flex justify-between">
                  <div>
                    <p> Get up </p>
                    <p className="price -mt-xs">Gamay, Beaujolais, 2023</p>
                  </div>
                  <p className="price">100 / 450DKK</p>
                </article>
                <article className="flex justify-between">
                  <div>
                    <p> Cuvée anatole rosé </p>
                    <p className="price -mt-xs">Gamay, Burgundy, 2022</p>
                  </div>
                  <p className="price">585DKK</p>
                </article>
              </main>
            </article>
          </ClipboardCard>
          <Image
            src={Wineshelf_Gif}
            width={600}
            height={600}
            alt="shelf with spinning winebottles and a posterframe "
            className="self-center"
          ></Image>
        </section>
        {/* prøver med clipboard, for at gøre den mere responsiv ift højde */}
      </article>
    </>
  );
}
