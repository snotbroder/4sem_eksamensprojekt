"use client";
import { UserButton } from "@clerk/nextjs";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Dashboard_burgermenu from "@/components/dashboard/Dashboard_burgermenu";
import RoutingButton from "../ui/buttons/RoutingButton";

function Dashboard_header() {
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
    <div>
      <header className="fixed bg-white w-full h-xl md:h-[90px] flex justify-between border-b-2 border-darkbrown py-xs md:px-lg z-100">
        <Link href="/dashboard" className="flex md:gap-xxs">
          <Image priority src="/Image_bank/logo/logo-red.svg" width={160} height={55} alt="Lamar logo"></Image> <span className="text-[20px] md:leading-[96px] mt-auto uppercase">Dashboard</span>
        </Link>
        <ul className="hidden md:flex gap-xxs my-auto">
          <li className="mt-auto">
            <RoutingButton target="_blank" variant="forms" href="/">
              See website
            </RoutingButton>
          </li>
          <li className="border-darkbrown border-1 py-[2px] px-[16px]">
            <UserButton showName />
          </li>
        </ul>
        {/* Burger Icon (Mobile) */}
        <div className="self-center md:hidden p-2 cursor-pointer z-[1100] mr-s" onClick={() => setShowMenu(!showMenu)}>
          <div className="relative w-10 h-8">
            {/* Top */}
            <span className={`absolute left-0 w-10 h-0.5 bg-primary-500 transition-transform duration-300 ${showMenu ? "rotate-45 top-3.5" : "top-0"}`} />
            {/* Middle */}
            <span className={`absolute left-0 w-10 h-0.5 bg-primary-500 transition-opacity duration-300 ${showMenu ? "opacity-0" : "opacity-100 top-3.5"}`} />
            {/* Bottom */}
            <span className={`absolute left-0 w-10 h-0.5 bg-primary-500 transition-transform duration-300 ${showMenu ? "-rotate-45 top-3.5" : "top-7"}`} />
          </div>
        </div>
      </header>
      {showMenu && <Dashboard_burgermenu showMenu={showMenu} setShowMenu={setShowMenu} />}
    </div>
  );
}

export default Dashboard_header;
