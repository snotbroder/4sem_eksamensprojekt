import Link from "next/link";
import IconComponent from "../ui/IconComponent";
import { UserButton } from "@clerk/nextjs";
export default function Burgermenu({ showMenu, setShowMenu }) {
  // Ændr state gennem propdrilling
  function handleClose() {
    setShowMenu(!showMenu);
  }
  return (
    <div className="w-full h-screen relative top-[50px] overflow-hidden border-t-1 py-sm px-s border-darkbrown bg-white">
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
      <div className="text-2xl italic font-bold uppercase slideIn my-s place-self-end">
        <UserButton showName />
      </div>
      <footer className="text-right pt-xs slideIn">
        <div className="flex flex-col gap-xs">
          <Link onClick={handleClose} href="/">
            <h4>see website</h4>
          </Link>
          <hr className="text-darkbrown w-1/3 ml-auto" />
          <h4>Contact: webmaster@voorde.dk</h4>
        </div>
      </footer>
    </div>
  );
}
