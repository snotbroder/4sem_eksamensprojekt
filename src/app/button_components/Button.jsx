import React from "react";
import Link from "next/link";

const Button = ({ variant = "primary", children, href = "/" }) => {
  // //definer den styling (Tailwind classes, der gør sig gældende for alle knapper)
  const buttonStyling =
    " px-[30px] py-xxs flex items-center justify-center transition-all duration-300 uppercase hover:rounded-xs";
  // //definer den styling (Tailwind classes), der gør sig gældende for de forskellige varianter
  const variantClasses = {
    primary: "bg-secondary-500 hover:stroke hover:stroke-secondary-500 ",
    secondary: "stroke-1 hover:bg-primary-500",
    cta: "bg-primary-500 text-[20px] hover:bg-transparent hover:inner-border hover:inner-border-primary-500",
    form: "",
  };

  return (
    <button>
      <Link
        className={`${buttonStyling} ${variantClasses[variant]}`}
        href={href}
      >
        {children}
      </Link>
    </button>
  );
};

export default Button;
