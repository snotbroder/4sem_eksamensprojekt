import IconComponent from "../ui/IconComponent";
import RoutingButton from "../ui/buttons/RoutingButton";

function Dashboard_card({ head, icon, copy, href, btntxt }) {
  return (
    <article className="bg-slate-100 max-w-[350px] h-[300px] p-sm rounded-md shadow-lg flex flex-col justify-between">
      <header>
        <span className="flex gap-xs items-center mb-xs">
          <IconComponent icon={icon} size="1.8rem"></IconComponent>
          <h2>{head}</h2>
        </span>{" "}
        <p>{copy}</p>
      </header>

      <RoutingButton variant="configure" href={href}>
        {btntxt}
      </RoutingButton>
    </article>
  );
}

export default Dashboard_card;
