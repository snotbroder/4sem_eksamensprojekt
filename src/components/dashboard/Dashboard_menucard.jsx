import Dashboard_tag from "./Dashboard_tag";
function Dashboard_menucard({ menuData, uuid }) {
  const courseKeys = Object.keys(menuData).filter((key) => key.startsWith("course") && menuData[key]);
  //var items = ["item1", "item2", "item3", "item4"];

  return (
    <article className="slideIn bg-gray-100 w-[300px] md:w-[360px] h-auto p-sm rounded-md shadow-lg ">
      <ul className="flex flex-col gap-s">
        <li className="flex gap-s items-center">
          <h2>{menuData.menuTitle}</h2>
        </li>
        <li className="w-full border-2 border-configure bg-configure">
          <button className="text-center p-xxs">Button text</button>
        </li>

        {courseKeys.length > 0 ? (
          courseKeys.map((key, index) => (
            <li className="" key={key}>
              {++index}. {menuData[key]}
            </li>
          ))
        ) : (
          <p>Ingen items på menuen</p>
        )}
        <li className="flex gap-xs flex-wrap">
          <Dashboard_tag content={`Price: ${menuData.price},-`}></Dashboard_tag>
          <Dashboard_tag content={`${courseKeys.length} ${courseKeys.length == 1 ? "course" : "courses"}`}></Dashboard_tag>
          {/* <Dashboard_tag content={menuData.uuid}></Dashboard_tag> */}
          <Dashboard_tag bgColor={menuData.bgColor} content={menuData.bgColor}></Dashboard_tag>
        </li>
        {menuData.menuNote && (
          <li>
            <p>
              <strong>Menu note</strong>
            </p>
            <p>{menuData.menuNote}</p>
          </li>
        )}
      </ul>
    </article>
  );
}

export default Dashboard_menucard;
