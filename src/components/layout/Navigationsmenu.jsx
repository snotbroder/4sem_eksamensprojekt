// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Button from "../button_components/Button";

// export default function Footer() {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div className="border-b border-darkbrown backdrop-blur-2xl sticky top-0 z-[1000] bg-[url('/Image_bank/illustrations/layerblur.png')] bg-cover  bg-center">
//       <nav className="flex flex-row justify-between px-s md:px-6xl self-center py-xs">
//         {/* Logo */}
//         <a href="/">
//           <Image
//             src="/Image_bank/logo/logo-red.svg"
//             alt="logo in red"
//             width={157}
//             height={55}
//           />
//         </a>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex flex-row gap-8 self-center ">
//           <li className="self-center">
//             <a
//               href="/menu"
//               className="navlink hover:border-b border-solid hover:border-darkbrown transition-all duration-200"
//             >
//               Menu
//             </a>
//           </li>
//           <li className="self-center">
//             <a
//               href="/about"
//               className="navlink hover:border-b border-solid hover:border-darkbrown transition-all duration-200"
//             >
//               About
//             </a>
//           </li>
//           <li className="self-center ">
//             <a
//               href="/faq"
//               className="navlink hover:border-b  border-solid hover:border-darkbrown transition-all duration-200"
//             >
//               F.A.Q.
//             </a>
//           </li>
//           <Button variant="cta">Book</Button>
//         </ul>

//         {/* Burger Icon (Mobile) */}
//         <div
//           className="self-center lg:hidden p-2 cursor-pointer"
//           onClick={() => setShowMenu(!showMenu)}
//         >
//           <div className="relative w-10 h-8">
//             {/* Top bar */}
//             <span
//               className={`absolute left-0 w-10 h-0.5 bg-primary-500 transform transition-all duration-300 ease-in-out ${
//                 showMenu ? "rotate-45 top-3.5" : "top-0"
//               }`}
//             />
//             {/* Middle bar */}
//             <span
//               className={`absolute left-0 w-10 h-0.5 bg-primary-500 transition-opacity duration-300 ease-in-out ${
//                 showMenu ? "opacity-0" : "opacity-100 top-3.5"
//               }`}
//             />
//             {/* Bottom bar */}
//             <span
//               className={`absolute left-0 w-10 h-0.5 bg-primary-500 transform transition-all duration-300 ease-in-out ${
//                 showMenu ? "-rotate-45 top-3.5" : "top-7"
//               }`}
//             />
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {showMenu && (
//         <div className="lg:hidden grid gap-ml backdrop-blur-lg bg-[url('/Image_bank/illustrations/lamarbuilding-burgermenu.svg')] bg-fill  bg-center ">
//           <ul className=" flex flex-col text-center pt-sm gap-xxs   border-t border-darkbrown">
//             <li className="mx-auto">
//               <Button variant="cta">Book</Button>
//             </li>
//             <li className="">
//               <a href="/menu" className="block navlink">
//                 Menu
//               </a>
//             </li>
//             <li>
//               <a href="/about" className="block navlink">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="/faq" className="block navlink">
//                 F.A.Q.
//               </a>
//             </li>
//           </ul>
//           <div className="text-center grid gap-xxs pb-sm">
//             <p>
//               Gl. Kongevej 27 <br></br> 1610 København V
//             </p>
//             <hr className="w-m mx-auto"></hr>
//             <div className="w-fit mx-auto ">
//               <div className="flex justify-between gap-xs">
//                 <p>Mandag til torsdag</p>
//                 <p className="">17-24</p>
//               </div>
//               <div className="flex justify-between">
//                 <p>Fredag & lørdag</p>
//                 <p>17.30-24</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "../ui/buttons/Button";

export default function Footer() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="border-b border-darkbrown backdrop-blur-2xl sticky top-0 z-[1000] bg-[url('/Image_bank/illustrations/layerblur.png')] bg-cover bg-center">
      <nav className="flex flex-row justify-between px-s lg:px-6xl self-center py-xs">
        {/* Logo */}
        <a href="/">
          <Image
            src="/Image_bank/logo/logo-red.svg"
            alt="logo in red"
            width={157}
            height={55}
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-row gap-8 self-center">
          <li className="self-center">
            <a
              href="/menu"
              className="navlink  hover:underline decoration-1 underline-offset-4  transition-all duration-200"
            >
              Menu
            </a>
          </li>
          <li className="self-center">
            <a
              href="/about"
              className="navlink  hover:underline decoration-1 underline-offset-4  transition-all duration-200"
            >
              About
            </a>
          </li>
          <li className="self-center">
            <a
              href="/faq"
              className="navlink  hover:underline decoration-1 underline-offset-4  transition-all duration-200"
            >
              F.A.Q.
            </a>
          </li>
          <Button variant="cta">Book</Button>
        </ul>

        {/* Burger Icon (Mobile) */}
        <div
          ref={burgerRef}
          className="self-center lg:hidden p-2 cursor-pointer z-[1100]"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="relative w-10 h-8">
            {/* Top */}
            <span
              className={`absolute left-0 w-10 h-0.5 bg-primary-500 transition-transform duration-300 ${
                showMenu ? "rotate-45 top-3.5" : "top-0"
              }`}
            />
            {/* Middle */}
            <span
              className={`absolute left-0 w-10 h-0.5 bg-primary-500 transition-opacity duration-300 ${
                showMenu ? "opacity-0" : "opacity-100 top-3.5"
              }`}
            />
            {/* Bottom */}
            <span
              className={`absolute left-0 w-10 h-0.5 bg-primary-500 transition-transform duration-300 ${
                showMenu ? "-rotate-45 top-3.5" : "top-7"
              }`}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {showMenu && (
        <div
          ref={menuRef}
          className="  backdrop-blur-3xl fixed top-[88px] left-0 w-full lg:hidden grid gap-ml bg-[url('/Image_bank/illustrations/lamarbuilding-burgermenu.svg')] bg-cover bg-center z-[1000] border-b border-darkbrown "
        >
          <ul className="flex flex-col text-center pt-sm gap-xxs ">
            <li className="mx-auto">
              <Button variant="cta">Book</Button>
            </li>
            <li>
              <a href="/menu" className="block navlink">
                Menu
              </a>
            </li>
            <li>
              <a href="/about" className="block navlink">
                About
              </a>
            </li>
            <li>
              <a href="/faq" className="block navlink">
                F.A.Q.
              </a>
            </li>
          </ul>
          <div className="text-center grid gap-xxs pb-sm">
            <p>
              Gl. Kongevej 27 <br /> 1610 København V
            </p>
            <hr className="w-m mx-auto" />
            <div className="w-fit mx-auto">
              <div className="flex justify-between gap-xs">
                <p>Mandag til torsdag</p>
                <p>17-24</p>
              </div>
              <div className="flex justify-between">
                <p>Fredag & lørdag</p>
                <p>17.30-24</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
