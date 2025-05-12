import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section className="h-[100vh]  bg-[url('/Image_bank/lamar_repeatingtext_secondary500.svg'),_url('/Image_bank/bg-images/heroimage_index.png')]  bg-center bg-cover p-[15vh] relative ">
        <div>
          <div className="text-center flex gap-xxs pb-sm absolute right-s">
            <h4>
              Gl. Kongevej 27 <br /> 1610 København V
            </h4>
            <hr className=" rotate-90 w-m " />
            <div className="w-fit ">
              <div className="flex justify-between gap-xs">
                <h4>Mandag til torsdag</h4>
                <h4>17-24</h4>
              </div>
              <div className="flex justify-between">
                <h4>Fredag & lørdag</h4>
                <h4>17.30-24</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col text-green-400  ">
        <div className="m-auto mt-52 text-4xl">
          <h1 className="">
            PERIODT! Babysteps, but we are about to EAAAATTTT
          </h1>
        </div>
        <p className="m-auto text-primary-500">Es hora de comer</p>
      </div>
    </div>
  );
}
