"use client";
import IconComponent from "../admin_components/IconComponent";
import { storeSelectedNavigation } from "@/stores/storeSelectedNavigation";
function Dashboard_navchild({ head, icon, destination, selected }) {
  const setStoreSelectedNavigation = storeSelectedNavigation((state) => state.selectedNavigation);
  function handleSelection(head) {
    const newSelection = head;
    console.log("set new selection to:", newSelection);
    setStoreSelectedNavigation(newSelection);
  }
  return (
    <li onClick={() => handleSelection(head)} className={` group-hover:w-full flex hover:gap-xxs hover:bg-gray-200 rounded-md p-xxs transition-opacity duration-200 ${selected == head ? "bg-gray-200" : ""} `}>
      <a href={destination} className="flex ">
        <IconComponent size="2.8rem" icon={icon} />
        <p className="hidden group-hover:inline transition-opacity duration-200 opacity-0 group-hover:opacity-100">{head}</p>
      </a>
    </li>
  );
}

export default Dashboard_navchild;
