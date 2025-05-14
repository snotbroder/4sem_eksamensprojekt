import SisterCard from "./cards/SisterCard";
function Section_sister_restaurants() {
  return (
    <section className="">
      <header className="grid">
        <hr></hr>
        <h2>Check out our other restaurants</h2>
        <hr></hr>
      </header>

      <article className="flex  flex-wrap">
        <SisterCard></SisterCard>
        <SisterCard></SisterCard>
        <SisterCard></SisterCard>
      </article>
    </section>
  );
}
export default Section_sister_restaurants;
