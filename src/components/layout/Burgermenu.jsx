import Link from "next/link";
export default function Burgermenu({ showMenu, setShowMenu }) {
  // Ændr state gennem propdrilling
  function handleClose() {
    setShowMenu(!showMenu);
  }
  return (
    <div className="w-full h-screen relative overflow-hidden border-t-1 py-sm px-s border-darkbrown bg-[url('/Image_bank/repeatingtext/mobile/lamar_secondary500.svg')">
      <ul className="flex flex-col gap-s">
        <li className="text-5xl italic font-bold uppercase burgerSlideIn1 opacity-0 border-b-1 border-darkbrown pb-xs">
          <Link onClick={handleClose} href="/menu">
            menu
          </Link>
        </li>
        <li className="text-5xl italic font-bold uppercase burgerSlideIn2 opacity-0 border-b-1 border-darkbrown pb-xs">
          <Link onClick={handleClose} href="/book">
            book
          </Link>
        </li>
        <li className="text-5xl italic font-bold uppercase burgerSlideIn3 opacity-0 border-b-1 border-darkbrown pb-xs">
          <Link onClick={handleClose} href="/about">
            about
          </Link>
        </li>
        <li className="text-5xl italic font-bold uppercase burgerSlideIn4 opacity-0 border-b-1 border-darkbrown pb-xs">
          <Link onClick={handleClose} href="/faq">
            faq
          </Link>
        </li>
      </ul>

      <footer className="text-right pt-xs slideIn">
        <div className="flex flex-col gap-xs">
          <h4>
            Gl. Kongevej 27 <br /> 1610 København NV
          </h4>
          <hr className="text-darkbrown w-1/3 ml-auto" />
          <h4>
            Fredag & lørdag 17.30-24
            <br /> Mandag — torsdag 17-24
          </h4>
          <hr className="text-darkbrown w-1/3 ml-auto" />
          <h4>
            hej@restaurantlamar.com <br /> 0045 26362727
          </h4>
        </div>
      </footer>
    </div>
  );
}
