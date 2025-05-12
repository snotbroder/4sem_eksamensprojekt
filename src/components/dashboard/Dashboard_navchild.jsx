import IconComponent from "@/components/ui/IconComponent";

function Dashboard_navchild({ head, icon, destination, selected }) {
  return (
    // <li className={` group-hover:w-full flex hover:gap-xxs hover:bg-gray-200 rounded-md p-xxs transition-opacity duration-200 ${selected == head ? "bg-gray-200" : ""} `}>
    <a href={destination} className={`group-hover:w-full gap-sm flex hover:bg-gray-200 rounded-md p-xxs transition-opacity duration-200 ${selected == head ? "bg-gray-200" : ""} `}>
      <IconComponent size="2.8rem" icon={icon} />
      <p className="text-xl capitalize hidden group-hover:inline transition-opacity duration-200 opacity-0 group-hover:opacity-100 my-auto">{head}</p>
    </a>
    // </li>
  );
}

export default Dashboard_navchild;
