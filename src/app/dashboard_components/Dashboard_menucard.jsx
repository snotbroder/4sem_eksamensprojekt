import Dashboard_tag from "./Dashboard_tag";
function Dashboard_menucard() {
  var items = ["item1", "item2", "item3", "item4"];

  return (
    <article className="bg-[#F9F9F9] w-[360px] h-auto p-sm rounded-md shadow-lg">
      <ul className="flex flex-col gap-s">
        <li className="flex gap-s items-center">
          {/* Husk at fjerne text-size tailwindcss fra h1 element */}
          <h1 className="text-3xl">Menu card</h1>
          <h1>icon</h1>
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
          <p>Ingen menuer at vise(</p>
        )}
        <li className="flex gap-xs">
          <Dashboard_tag content=""></Dashboard_tag>
          <Dashboard_tag content=""></Dashboard_tag>
        </li>
        <li>
          <article>
            <p className="font-bold">Menu note</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, culpa.</p>
          </article>
        </li>
      </ul>
    </article>
  );
}

export default Dashboard_menucard;
