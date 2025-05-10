import { IoAddSharp } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowUp } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
function IconComponent({ icon }) {
  return (
    <i className="text-darkbrown">
      {icon === "add" && <IoAddSharp />}
      {icon === "user" && <FiUser />}
      {icon === "mail" && <HiOutlineMail />}
      {icon === "arrow" && <FaArrowUp />}
      {icon === "home" && <FaHome />}
      {icon === "event" && <MdEventNote />}
      {icon === "restaurant" && <IoRestaurant />}
    </i>
  );
}

export default IconComponent;
