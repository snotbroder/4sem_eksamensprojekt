"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "../ui/buttons/Button";
import RoutingButton from "../ui/buttons/RoutingButton";
import Link from "next/link";
import Burgermenu from "./Burgermenu";

export default function Footer() {
  const [showMenu, setShowMenu] = useState(false);

  // Denne snippet gør at når burgermenuen renderes, vil man ikke kunne scroll det bagvedliggende content.
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden"); // cleanup
  }, [showMenu]);

  return (
    <div className="border-b border-darkbrown backdrop-blur-md fixed w-full top-0 z-[1000] bg-[url('/Image_bank/illustrations/layerblur.png')] bg-cover bg-center">
      <nav className="flex flex-row justify-between px-s lg:px-6xl self-center py-xs">
        {/* Logo */}
        <Link onClick={() => setShowMenu(false)} href="/">
          <Image src="/Image_bank/logo/logo-red.svg" alt="logo in red" width={157} height={55} />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-row gap-8 self-center">
          <li className="self-center">
            <Link href="/menu" className="navlink  hover:underline decoration-1 underline-offset-4  transition-all duration-200">
              Menu
            </Link>
          </li>
          <li className="self-center">
            <Link href="/about" className="navlink  hover:underline decoration-1 underline-offset-4  transition-all duration-200">
              About
            </Link>
          </li>
          <li className="self-center">
            <Link href="/faq" className="navlink  hover:underline decoration-1 underline-offset-4  transition-all duration-200">
              F.A.Q.
            </Link>
          </li>
          <RoutingButton variant="cta" href="book">
            Book
          </RoutingButton>
        </ul>

        {/* Burger Icon (Mobile) */}
        <div className="self-center lg:hidden p-2 cursor-pointer z-[1100]" onClick={() => setShowMenu(!showMenu)}>
          <div className="relative w-10 h-8">
            {/* Top */}
            <span className={`absolute left-0 w-10 h-0.5 bg-primary-500 transition-transform duration-300 ${showMenu ? "rotate-45 top-3.5" : "top-0"}`} />
            {/* Middle */}
            <span className={`absolute left-0 w-10 h-0.5 bg-primary-500 transition-opacity duration-300 ${showMenu ? "opacity-0" : "opacity-100 top-3.5"}`} />
            {/* Bottom */}
            <span className={`absolute left-0 w-10 h-0.5 bg-primary-500 transition-transform duration-300 ${showMenu ? "-rotate-45 top-3.5" : "top-7"}`} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu, kommunikér state til Burgermenu komponent */}
      {showMenu && <Burgermenu showMenu={showMenu} setShowMenu={setShowMenu} />}
    </div>
  );
}
