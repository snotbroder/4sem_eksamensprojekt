import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import Section_text_and_image from "@/components/layout/Section_text_and_image";
import Section_text_background_and_images2 from "@/components/layout/Section_text_background_and_images2";
import FoodAndWine_Gif from "/public/Image_bank/gifs/illustration-foodandwine.gif";
import Facade_Gif from "/public/Image_bank/gifs/illustration-facade.gif";
import Animation from "@/components/aos/Animation";

export default function Home() {
  return (
    <div className="">
      <section className="h-[100vh] lg:bg-[url('/Image_bank/repeatingtext/lamar_repeating_secondary500_herodesktop.svg'),_url('/Image_bank/bg-images/heroimage_index_desktop.webp')] bg-[url('/Image_bank/repeatingtext/lamar_repeating_secondary500_heromobile.svg'),_url('/Image_bank/bg-images/heroimage_index_mobile.webp')] bg-center   lg:bg-left-bottom bg-cover pt-[90px]  relative grid">
        <div className=" px-s py-xs lg:px-6xl h-full flex flex-col justify-between lg:h-fit  lg:justify-end lg:flex-row gap-xxs  ">
          <div className="self-end text-right w-fit relative  ">
            <h4 className="relative z-10">
              Gl. Kongevej 27 <br /> 1610 København V
            </h4>
            <div className="bg-beige shadow-beige shadow-2xl blur-3xl  absolute w-full h-full top-0 "></div>
          </div>
          <hr className="collapse lg:visible rotate-90 w-ml self-center  " />
          <div className="w-fit relative">
            <div className="w-fit relative z-10">
              <div className="flex justify-between gap-xs">
                <h4>Mandag til torsdag</h4>
                <h4>17-24</h4>
              </div>
              <div className="flex justify-between shadow-beige shadow-6xl">
                <h4>Fredag & lørdag</h4>
                <h4>17.30-24</h4>
              </div>
            </div>
            <div className="bg-beige shadow-beige shadow-2xl blur-3xl  absolute w-full h-full top-0 "></div>
          </div>
        </div>

        <a
          href="#menu"
          className="size-xl backdrop-blur-md absolute flex place-content-center right-0 bottom-0 border-beige border-r-0  border-b-0 border"
        >
          <FaArrowDown className="self-center fill-beige size-s" />
        </a>
      </section>
      <Animation>
        <section
          data-aos="fade-up"
          duration="300"
          id="menu"
          className=" mx-s md:mx-6xl"
        >
          <Section_text_and_image
            h1={"Menu"}
            h2={"At lamar we make the decision for you"}
            p={
              "At Lamar the kitchen puts together the menu and it is served at a fresh pace. We care that the food tastes good, that’s our dishes change depending on the season. The menus has to be ordered for the whole table, and shared family-style."
            }
            btn_txt={"Read more"}
            btn_href={"/menu"}
            img={FoodAndWine_Gif}
            reversedOrderMobile={true}
          ></Section_text_and_image>
        </section>
      </Animation>

      <Section_text_background_and_images2></Section_text_background_and_images2>
      <section className=" mx-s md:mx-6xl">
        <Section_text_and_image
          h1={"About lamar"}
          h2={"Big city vibe and sizzling party atmosphere"}
          p={
            "At Lamar, time stands still when you walk in the door. Take a seat and let us sweep you off your feet with our delicious food and attentive service. Hip hop music, great wines, cheeky drinks and cold beers."
          }
          btn_txt={"Read more"}
          btn_href={"/about"}
          img={Facade_Gif}
          reversedOrder={true}
        ></Section_text_and_image>
      </section>
      <div className="flex flex-col text-green-400  ">
        <div className="m-auto mt-52 text-4xl">
          <h1 className="">PERIODT!</h1>
        </div>
        <p className="m-auto text-primary-500">Es hora de comer</p>
      </div>
    </div>
  );
}
