const Button = ({ variant = "primary", children, onClick, type = "button", disabled = "" }) => {
  //definer den styling (Tailwind classes, der gør sig gældende for alle knapper)
  const buttonStyling = " px-[30px] py-xxs flex items-center h-fit justify-center transition-all duration-100 uppercase hover:rounded-xs cursor-pointer text-darkbrown";
  //definer den styling (Tailwind classes), der gør sig gældende for de forskellige varianter
  const variantClasses = {
    primary: "bg-secondary-500  border border-secondary-500 hover:bg-transparent ",
    secondary: "border border-darkbrown hover:bg-primary-500 hover:border-primary-500",
    cta: " border border-primary-500 bg-primary-500 text-[20px] hover:bg-transparent",
    forms: "border w-full border-darkbrown hover:bg-darkbrown hover:text-beige",
    configure: "border bg-configure border-configure hover:bg-transparent hover:border-darkbrown w-full",
    danger: "border bg-danger border-danger hover:bg-transparent hover:border-darkbrown w-full",
    success: "border bg-success border-success hover:bg-transparent hover:border-darkbrown w-full",
    disabled: "border bg-gray-300 border-gray-400 cursor-not-allowed opacity-70 w-full",
  };
  const combinedStyles = `${buttonStyling} ${disabled ? variantClasses["disabled"] : variantClasses[variant]}`;

  return (
    <button type={type} className={combinedStyles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
