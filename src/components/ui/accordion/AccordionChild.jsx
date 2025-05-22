"use client";
import { IoAddSharp } from "react-icons/io5";
import { useState } from "react";
import IconComponent from "@/components/ui/IconComponent";

function AccordionChild({ head, copy }) {
  const [openAccordion, setOpenAccordion] = useState(false);

  function handleClick() {
    setOpenAccordion((prev) => !prev);
    console.log("hi", openAccordion);
  }
  return (
    <li
      className="px-xxs border-t-1 border-darkbrown cursor-pointer p-xs"
      onClick={handleClick}
    >
      <span className="flex justify-between items-center">
        <h4>{head}</h4>
        <span
          className={`transition-all duration-200 ease-in-out ${
            openAccordion && "rotate-135 "
          }`}
        >
          <IconComponent
            className={`text-darkbrown transition-all duration-200 ease-in-out ${
              openAccordion && "rotate-90 "
            }`}
            icon="add"
          />
        </span>
      </span>
      {openAccordion && (
        <p className="slideDown transition-all duration-200 ease-in-out">
          {copy}
        </p>
      )}
    </li>
  );
}

export default AccordionChild;
