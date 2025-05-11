import Image from "next/image";

export default function Footer({}) {
  return (
    <footer className="bg-primary-500 grid grid-cols-2 ">
      <article className="ml-s md:ml-6xl py-s  grid gap-xs ">
        <div>
          <div className="flex gap-xs">
            <i></i>
            <i></i>
          </div>
          <div>
            <h4>Adresse</h4>
            <p>
              Gl. Kongevej 27 <br></br> 1610 København V
            </p>
          </div>
        </div>
        <div className="grid lg:flex gap-xs lg:gap-m">
          <div>
            <h4>Åbningstider</h4>
            <div className="w-fit ">
              <div className="flex justify-between gap-xs">
                <p>Mandag til torsdag</p>
                <p className="">17-24</p>
              </div>
              <div className="flex justify-between">
                <p>Fredag & lørdag</p>
                <p>17.30-24</p>
              </div>
            </div>
          </div>
          <div>
            <h4>Kontakt</h4>
            <p>
              <a href="mailto:hej@restaurantlamar.com">hej@restaurantlamar</a>
              <br></br> <a href="tel:+4526362727">+45 26 36 27 27</a>
            </p>
          </div>
        </div>
      </article>
      <article className=" bg-[url('/Image_bank/logo/logo-dark-90deg.svg')] transition-all duration-300 ease-in-out bg-contain bg-no-repeat bg-bottom-right md:bg-[url('/Image_bank/logo/logo-dark.svg')] ">
        <div></div>
      </article>
    </footer>
  );
}
