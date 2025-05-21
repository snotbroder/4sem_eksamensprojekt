import SisterCard from "../utility/SisterCard";
import sisterRestaurantData from "@/copy_content/sisterRestaurants";

function Section_sister_restaurants() {
  return (
    <section className="mx-s lg:mx-6xl grid gap-sm my-6xl mb-9xl">
      <header className="grid">
        <hr></hr>
        <h2>Check out our other restaurants</h2>
        <hr></hr>
      </header>

      <article className="flex flex-col  md:flex-row flex-wrap gap-sm xl:justify-between">
        {sisterRestaurantData.map((data, i) => (
          <SisterCard key={i} {...data} />
        ))}
      </article>
    </section>
  );
}
export default Section_sister_restaurants;
