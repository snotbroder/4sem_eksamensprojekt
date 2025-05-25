import Link from "next/link";
import IconComponent from "../ui/IconComponent";
import { UserButton } from "@clerk/nextjs";
import RoutingButton from "../ui/buttons/RoutingButton";
export default function Burgermenu({ showMenu, setShowMenu }) {
  // Ændr state gennem propdrilling
  function handleClose() {
    setShowMenu(!showMenu);
  }
  return (
    <nav className="w-full h-screen relative top-[50px] overflow-hidden border-t-1 py-sm px-s border-darkbrown bg-white">
      <header className="slideIn flex gap-xs place-content-end mb-xs">
        <RoutingButton target="_blank" variant="forms" href="/">
          See website
        </RoutingButton>
        <div className="border-darkbrown border-1 py-[2px] px-[16px]">
          <UserButton showName />
        </div>
      </header>

      <ul className="flex flex-col gap-s">
        <li className="text-2xl italic font-bold uppercase burgerSlideIn1 opacity-0 border-b-1 border-darkbrown pb-xs">
          <Link className="flex gap-xs" onClick={handleClose} href="/dashboard/">
            home <IconComponent size="1.5rem" icon="home" />
          </Link>
        </li>
        <li className="text-2xl italic font-bold uppercase burgerSlideIn2 opacity-0 border-b-1 border-darkbrown pb-xs">
          <Link className="flex gap-xs" onClick={handleClose} href="/dashboard/menus">
            menus <IconComponent size="1.5rem" icon="restaurant" />
          </Link>
        </li>
        <li className="text-2xl italic font-bold uppercase burgerSlideIn3 opacity-0 border-b-1 border-darkbrown pb-xs">
          <Link className="flex gap-xs" onClick={handleClose} href="/dashboard/bookings">
            bookings <IconComponent size="1.5rem" icon="event" />
          </Link>
        </li>
        <li className="text-2xl italic font-bold uppercase burgerSlideIn4 opacity-0 border-b-1 border-darkbrown pb-xs">
          <Link className="flex gap-xs" onClick={handleClose} href="/dashboard/newsletter">
            newsletter <IconComponent size="1.5rem" icon="mail" />
          </Link>
        </li>
      </ul>
      <footer className="text-right pt-xs slideIn">
        <div className="flex flex-col gap-xs">
          <h4>Contact: webmaster@voorde.dk</h4>
        </div>
      </footer>
    </nav>
  );
}
