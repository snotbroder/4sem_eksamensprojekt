import { IoAddSharp } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowUp } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";

function IconComponent({ icon, size = "1.25rem", className = "" }) {
  const commonProps = {
    className: `text-darkbrown`,
    size,
  };
  switch (icon) {
    case "add":
      return <IoAddSharp {...commonProps} className={`text-darkbrown ${className}`} />;
    case "user":
      return <FiUser {...commonProps} className={`text-darkbrown ${className}`} />;
    case "mail":
      return <HiOutlineMail {...commonProps} className={`text-darkbrown ${className}`} />;
    case "arrow":
      return <FaArrowUp {...commonProps} className={`text-darkbrown ${className}`} />;
    case "home":
      return <FaHome {...commonProps} className={`text-darkbrown ${className}`} />;
    case "event":
      return <MdEventNote {...commonProps} className={`text-darkbrown ${className}`} />;
    case "restaurant":
      return <IoRestaurant {...commonProps} className={`text-darkbrown ${className}`} />;
    case "arrowback":
      return <MdArrowBackIosNew {...commonProps} className={`text-darkbrown ${className}`} />;
    default:
      return null;
  }
}

export default IconComponent;
