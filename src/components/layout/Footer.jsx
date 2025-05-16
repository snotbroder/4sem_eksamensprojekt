import Image from "next/image";
import { CiInstagram } from "react-icons/ci";
import { PiSmileyLight } from "react-icons/pi";

export default function Footer({}) {
  return (
    <footer className="bg-primary-500 grid grid-cols-2 z-10 relative">
      <article className="ml-s lg:ml-6xl py-s  grid gap-xs ">
        <div>
          <div className="flex gap-xxs">
            <a href="https://www.instagram.com/restaurant_lamar/">
              <CiInstagram className="w-s h-s md:w-sm md:h-sm fill-darkbrown hover:fill-beige" />
            </a>
            <a href="https://www.findsmiley.dk/1220927">
              <PiSmileyLight className="w-s h-s   md:w-sm md:h-sm fill-darkbrown hover:fill-beige" />
            </a>
          </div>
          <div>
            <h4>Adresse</h4>
            <span>
              Gl. Kongevej 27 <br></br> 1610 København V
            </span>
          </div>
        </div>
        <div className="grid lg:flex gap-xs lg:gap-m">
          <div>
            <h4>Åbningstider</h4>
            <div className="w-fit ">
              <div className="flex justify-between gap-xs">
                <span>Mandag til torsdag</span>
                <span>17-24</span>
              </div>
              <div className="flex justify-between">
                <span>Fredag & lørdag</span>
                <span>17.30-24</span>
              </div>
            </div>
          </div>
          <div>
            <h4>Kontakt</h4>
            <a href="mailto:hej@restaurantlamar.com">hej@restaurantlamar</a>
            <br></br> <a href="tel:+4526362727">+45 26 36 27 27</a>
          </div>
        </div>
      </article>
      <article className=" bg-[url('/Image_bank/logo/logo-dark-90deg.svg')] transition-all duration-300 ease-in-out bg-contain bg-no-repeat bg-bottom-right md:bg-[url('/Image_bank/logo/logo-dark.svg')] ">
        <div></div>
      </article>
    </footer>
  );
}
