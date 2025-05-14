import MenuCard from "@/components/layout/MenuCard";
import Button from "../../../components/ui/buttons/Button";

export default function Menu() {
  return (
    <div className="">
      <article className="">
        <div className="   px-s lg:pl-6xl  lg:px-0 grid gap-xs lg:gap-xl  lg:grid-cols-2 lg:items-start">
          <div className="grid gap-xxs  lg:sticky lg:top-[15%] lg:self-start  ">
            <div>
              <h1>Menu</h1>
              <hr></hr>
              <h2>Sharing- & winemenu, a la carte or theatermenu</h2>
              <hr className="bg-darkbrown"></hr>
              <p className="">
                The menus has to be ordered for the whole table, and
                sharedfamily-style. Your food will be served at a fresh pace.
              </p>
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

          <div className="  ">
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
