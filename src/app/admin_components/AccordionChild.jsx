"use client";
import { IoAddSharp } from "react-icons/io5";
import { useState } from "react";

function AccordionChild({ head, copy }) {
  const [openAccordion, setOpenAccordion] = useState(false);

  function handleClick() {
    setOpenAccordion((prev) => !prev);
    console.log("hi", openAccordion);
  }
  return (
    <li className="px-xxs border-t-2 border-darkbrown cursor-pointer p-xs" onClick={handleClick}>
      <div className="flex flex-between items-center ">
        <h3>{head}</h3> <IoAddSharp className={`text-darkbrown transition-all duration-200 ease-in-out ${openAccordion && "rotate-135 "}`} />
      </div>
      <p className={`transition-all duration-200 ease-in-out overflow-hidden ${openAccordion ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>{copy}</p>
    </li>
  );
}

export default AccordionChild;
