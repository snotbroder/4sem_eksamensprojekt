import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section className="h-[100vh] lg:bg-[url('/Image_bank/repeatingtext/lamar_repeating_secondary500_herodesktop.svg'),_url('/Image_bank/bg-images/heroimage_index_desktop.png')] bg-[url('/Image_bank/repeatingtext/lamar_repeating_secondary500_heromobile.svg'),_url('/Image_bank/bg-images/heroimage_index_mobile.png')] bg-center   lg:bg-left-bottom bg-cover pt-[12vh] relative grid">
        <div className="h-full flex flex-col justify-between  lg:justify-end">
          <div className=" px-s lg:px-6xl lg:flex-row gap-xxs  ">
            <h4 className="text-right">
              Gl. Kongevej 27 <br /> 1610 København V
            </h4>
            <hr className="collapse lg:visible rotate-90 w-ml self-center " />
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
        </div>
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
