import Dashboard_tag from "./Dashboard_tag";
function Dashboard_menucard({ menuTitle, uuid }) {
  var items = ["item1", "item2", "item3", "item4"];

  return (
    <article className="bg-gray-100 w-[360px] h-auto p-sm rounded-md shadow-lg ">
      <ul className="flex flex-col gap-s">
        <li className="flex gap-s items-center">
          <h4>{menuTitle}</h4>
        </li>
        <li className="w-full border-2 border-configure bg-configure">
          <button className="text-center p-xxs">Button text</button>
        </li>

        {items.length > 0 ? (
          items.map((item) => (
            <li className="" key={item}>
              {item}
            </li>
          ))
        ) : (
          <p>Ingen menuer at vise</p>
        )}
        <li className="flex gap-xs flex-wrap">
          <Dashboard_tag content=""></Dashboard_tag>
          <Dashboard_tag content=""></Dashboard_tag>
          <Dashboard_tag content={uuid}></Dashboard_tag>
        </li>
        <li>
          <article>
            <p>
              <strong>Menu note</strong>
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, culpa.</p>
          </article>
        </li>
      </ul>
    </article>
  );
}

export default Dashboard_menucard;
