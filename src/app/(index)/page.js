import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import Section_text_and_image from "@/components/layout/Section_text_and_image";
import Section_text_background_and_images from "@/components/layout/Section_text_background_and_images";
import Section_sister_restaurants from "@/components/layout/Section_sister_restaurants";
import FoodAndWine_Gif from "/public/Image_bank/gifs/illustration-foodandwine.gif";
import Facade_Gif from "/public/Image_bank/gifs/illustration-facade.gif";
import Animation from "@/components/aos/Animation";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Animation>
        <section className="h-[95vh] lg:h-[100vh]  lg:bg-[url('/Image_bank/repeatingtext/desktop/lamar_secondary500_herodesktop.svg'),_url('/Image_bank/bg-images/heroimage_index_desktop.webp')] bg-[url('/Image_bank/repeatingtext/mobile/lamar_secondary500_heromobile.svg'),_url('/Image_bank/bg-images/heroimage_index_mobile.webp')] bg-center   lg:bg-left-bottom bg-cover pt-[90px]  relative grid">
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
                  <h4>Monday to Thursday</h4>
                  <h4>17-24</h4>
                </div>
                <div className="flex justify-between shadow-beige shadow-6xl">
                  <h4>Friday & Saturday</h4>
                  <h4>17.30-24</h4>
                </div>
              </div>
              <div className="bg-beige shadow-beige shadow-2xl blur-3xl  absolute w-full h-full top-0 "></div>
            </div>
          </div>

          <a
            href="#menu"
            alt="arrow to next section"
            className="size-xl backdrop-blur-md absolute flex place-content-center right-0 bottom-0 border-beige border-r-0  border-b-0 border"
          >
            <FaArrowDown className="self-center fill-beige size-s" />
          </a>
        </section>

        <section
          data-aos="fade-up"
          duration="300"
          id="menu"
          className=" mx-s lg:mx-6xl py-3xl"
        >
          <Section_text_and_image
            h1={"Menu"}
            h2={"At lamar we make the decision for you"}
            p={
              "At Lamar the kitchen puts together the menu and it is served at a fresh pace. We care that the food tastes good, that’s our dishes change depending on the season. The menus has to be ordered for the whole table, and shared family-style."
            }
            btn_txt={"See menu"}
            btn_href={"/menu"}
            img={FoodAndWine_Gif}
            alt="Food and wine gif, food getting eaten and pouring winebottle"
            reversedOrderMobile={true}
            gap={true}
          ></Section_text_and_image>
        </section>

        <Section_text_background_and_images></Section_text_background_and_images>
        <section className=" mx-s lg:mx-6xl my-3xl">
          <Section_text_and_image
            h1={"About lamar"}
            h2={"Big city vibe and sizzling party atmosphere"}
            p={
              "At Lamar, time stands still when you walk in the door. Take a seat and let us sweep you off your feet with our delicious food and attentive service. Hip hop music, great wines, cheeky drinks and cold beers."
            }
            btn_txt={"Read more about us"}
            btn_href={"/about"}
            img={Facade_Gif}
            alt="Illustration of the restaurants facade, with the sign getting lit up"
            reversedOrder={true}
            gap={true}
          ></Section_text_and_image>
        </section>
        <Section_sister_restaurants></Section_sister_restaurants>
      </Animation>
    </div>
  );
}
