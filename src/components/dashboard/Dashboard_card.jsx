import IconComponent from "../ui/IconComponent";

function Dashboard_card({ head, icon, copy }) {
  return (
    <article className="bg-slate-100 max-w-[350px] h-auto p-sm rounded-md shadow-lg">
      <ul className="flex flex-col gap-s">
        <li className="flex gap-xs items-center">
          <IconComponent icon={icon} size="1.8rem"></IconComponent>
          <h2>{head}</h2>
        </li>
        <li>
          <p>{copy}</p>
        </li>
        <li className="w-full border-2 border-gray-500">
          <button className="text-center p-xxs">Button text</button>
        </li>
      </ul>
    </article>
  );
}

export default Dashboard_card;
