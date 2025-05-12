import Link from "next/link";

const Button = ({ variant = "primary", children, href = "/" }) => {
  // //definer den styling (Tailwind classes, der gør sig gældende for alle knapper)
  const buttonStyling =
    " px-[30px] py-xxs flex items-center justify-center transition-all duration-300 uppercase hover:rounded-xs";
  // //definer den styling (Tailwind classes), der gør sig gældende for de forskellige varianter
  const variantClasses = {
    primary:
      "bg-secondary-500  border border-secondary-500 hover:bg-transparent ",
    secondary:
      "border border-darkbrown hover:bg-primary-500 hover:border-primary-500",
    cta: " border border-primary-500 bg-primary-500 text-[20px] hover:bg-transparent",
    forms: "border border-darkbrown hover:bg-darkbrown hover:text-beige",
  };

  return (
    <button onClick={clickHandle}>
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
