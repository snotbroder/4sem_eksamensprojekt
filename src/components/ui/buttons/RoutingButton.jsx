import Link from "next/link";

const RoutingButton = ({ variant = "primary", children, href = "/", target = "" }) => {
  //definer den styling (Tailwind classes, der gør sig gældende for alle knapper)
  const buttonStyling = " px-[30px] max-h-[34px] py-xxs flex items-center justify-center transition-all duration-100 uppercase hover:rounded-xs curso-pointer";
  //definer den styling (Tailwind classes), der gør sig gældende for de forskellige varianter
  const variantClasses = {
    primary: "bg-secondary-500  border border-secondary-500 hover:bg-transparent ",
    secondary: "border border-darkbrown hover:bg-primary-500 hover:border-primary-500",
    cta: " border border-primary-500 bg-primary-500 text-[20px] hover:bg-transparent",
    forms: "border border-darkbrown hover:bg-darkbrown hover:text-beige",
    configure: "border bg-configure border-configure hover:bg-transparent hover:border-darkbrown w-full",
    danger: "border bg-danger border-danger hover:bg-transparent hover:border-darkbrown w-full",
    success: "border bg-success border-success hover:bg-transparent hover:border-darkbrown w-full",
  };

  return (
    <Link className={`${buttonStyling} ${variantClasses[variant]}`} target={target} href={href}>
      {children}
    </Link>
  );
};

export default RoutingButton;
