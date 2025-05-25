import IconComponent from "../ui/IconComponent";
import Dashboard_tag from "./Dashboard_tag";
function Dashboard_menucard({ menuData }) {
  const courseKeys = Object.keys(menuData).filter((key) => key.startsWith("course") && menuData[key]); //Filter gemmem menuData og fin objektkeys med "course"

  return (
    <article className="slideIn bg-gray-100 w-[300px] md:w-[360px] h-auto p-sm rounded-md shadow-lg group transition-all duration-100 hover:-mt-xxs hover:mb-xxs hover:cursor-pointer border-2 border-transparent  hover:border-configure">
      <ul className="flex flex-col gap-s">
        <li className="flex justify-between items-baseline">
          <h2>{menuData.menuTitle}</h2>
          <span className="transition-all duration-100 opacity-70 group-hover:opacity-100 mt-[6px]">
            <IconComponent className="group-hover:text-configure" size="2rem" icon="edit" />
          </span>
        </li>
      </ul>
      <ul className="flex flex-col gap-xxs my-xs">
        {/* Loop gennem courseKeys */}
        {courseKeys.length > 0 ? (
          courseKeys.map((key, index) => (
            <li className="capitalize even:bg-gray-200 rounded-sm" key={key}>
              <strong>{++index}.</strong> {menuData[key]}
            </li>
          ))
        ) : (
          <p>Fejl: Ingen items på menuen</p>
        )}
        <li className="flex gap-xs flex-wrap mt-xs">
          <Dashboard_tag content={`Price: ${menuData.price},-`}></Dashboard_tag>
          <Dashboard_tag content={`${courseKeys.length} ${courseKeys.length == 1 ? "course" : "courses"}`}></Dashboard_tag>
          <Dashboard_tag bgColor={menuData.bgColor} content={menuData.bgColor}></Dashboard_tag>
        </li>
        {menuData.menuNote ? (
          <li>
            <p>
              <strong>Menu note</strong>
            </p>
            <p>{menuData.menuNote}</p>
          </li>
        ) : (
          <li>
            <p>
              <strong>No menu note</strong>
            </p>
          </li>
        )}
      </ul>
    </article>
  );
}

export default Dashboard_menucard;
