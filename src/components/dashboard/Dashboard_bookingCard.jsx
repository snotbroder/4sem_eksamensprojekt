import IconComponent from "../ui/IconComponent";
import RoutingButton from "../ui/buttons/RoutingButton";

function BookingCard({ head, copy, icon }) {
  return (
    <article className="boder-2 border-darkbrown">
      <main>
        <span className="flex gap-xs items-center mb-xs">
          <IconComponent icon={icon} size="1.8rem"></IconComponent>
          <h2>{head}</h2>
        </span>
        <p>{copy}</p>
      </main>
    </article>
  );
}

export default BookingCard;
