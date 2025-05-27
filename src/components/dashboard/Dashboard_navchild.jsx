import IconComponent from "@/components/ui/IconComponent";
import Link from "next/link";

function Dashboard_navchild({ head, icon, destination, selected }) {
  return (
    <Link href={destination} className={`group-hover:w-full gap-sm flex hover:bg-gray-200 rounded-md p-xxs transition-opacity duration-200 ${selected == head ? "bg-gray-200" : ""} `}>
      <IconComponent size="2.8rem" icon={icon} />
      <p className="text-xl capitalize hidden group-hover:inline transition-opacity duration-200 opacity-0 group-hover:opacity-100 my-auto">{head}</p>
    </Link>
  );
}

export default Dashboard_navchild;
