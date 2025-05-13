import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  return (
    <div className="">
      <section className="h-[100vh] lg:bg-[url('/Image_bank/repeatingtext/lamar_repeating_secondary500_herodesktop.svg'),_url('/Image_bank/bg-images/heroimage_index_desktop.png')] bg-[url('/Image_bank/repeatingtext/lamar_repeating_secondary500_heromobile.svg'),_url('/Image_bank/bg-images/heroimage_index_mobile.png')] bg-center   lg:bg-left-bottom bg-cover pt-[13vh] relative grid">
        <div className=" px-s py-xs lg:px-6xl h-full flex flex-col justify-between lg:h-fit  lg:justify-end lg:flex-row gap-xxs  ">
          <h4 className="text-right">
            Gl. Kongevej 27 <br /> 1610 København V
          </h4>
          <hr className="collapse lg:visible rotate-90 w-ml self-center  " />
          <div className="w-fit ">
            <div className="flex justify-between gap-xs">
              <h4>Mandag til torsdag</h4>
              <h4>17-24</h4>
            </div>
            <div className="flex justify-between shadow-beige shadow-6xl">
              <h4>Fredag & lørdag</h4>
              <h4>17.30-24</h4>
            </div>
          </div>
        </div>

        <a
          href="#menu"
          className="size-xl backdrop-blur-md absolute flex place-content-center right-0 bottom-0 border-beige border-r-0 border"
        >
          <FaArrowDown className="self-center fill-beige size-s" />
        </a>
      </section>
      <section id="menu"></section>
      <div className="flex flex-col text-green-400  ">
        <div className="m-auto mt-52 text-4xl">
          <h1 className="">PERIODT!</h1>
        </div>
        <p className="m-auto text-primary-500">Es hora de comer</p>
      </div>
    </div>
  );
}
