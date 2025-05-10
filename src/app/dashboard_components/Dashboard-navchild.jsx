import IconComponent from "../admin_components/IconComponent";

function Dashboard_navchild({ head, icon, destination }) {
  return (
    <li className="flex gap-xxs hover:bg-gray-200 rounded-md p-xxs transition-opacity duration-200">
      <IconComponent size="3rem" icon={icon} />
      <a href={destination}>
        <h4 className="hidden group-hover:inline transition-opacity duration-200 opacity-0 group-hover:opacity-100">{head}</h4>
      </a>
    </li>
  );
}

export default Dashboard_navchild;
