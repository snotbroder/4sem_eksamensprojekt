import React from "react";
import Link from "next/link";

const Button = ({ variant = "primary", children, href = "/" }) => {
  // //definer den styling (Tailwind classes, der gør sig gældende for alle knapper)
  const buttonStyling =
    " px-[30px] py-xxs flex items-center justify-center transition-all duration-300 uppercase";
  // //definer den styling (Tailwind classes), der gør sig gældende for de forskellige varianter
  const variantClasses = {
    primary:
      "bg-secondary-500 hover:stroke hover:stroke-secondary-500 hover:bg-transparent",
    secondary: "stroke stroke-darkbrown",
    cta: "bg-primary-500 text-[20px] hover:bg-yellow hover:inner-border hover:inner-border-primary-500",
    form: "",
  };

  return (
    <Link href={href}>
      <button className={`${buttonStyling} ${variantClasses[variant]}`}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
