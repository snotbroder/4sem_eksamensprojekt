import SisterCard from "./cards/SisterCard";

function Section_sister_restaurants() {
  return (
    <section className="mx-s lg:mx-6xl grid gap-xs">
      <header className="grid">
        <hr></hr>
        <h2>Check out our other restaurants</h2>
        <hr></hr>
      </header>

      <article className="flex flex-col lg:flex-row flex-wrap gap-xs lg:justify-between  ">
        <SisterCard
          restaurant={"kima"}
          address={"Frederiksborgvej 2, 2400 København NV"}
          description={
            "Kima is our locally rooted, buzzing and cheeky little sister. It's colorful and high-spirited here. We cook food from all corners of the world and serve wine with and without added sulfur and love to guide and talk about wine. Beers on tap, drinks and frothy non-alcoholic alternatives too.."
          }
          bgcolor={"secondary-300"}
          addresscolor={"secondary-600"}
          href={"/menu"}
          heading1_stroke={true}
          heading3_stroke={true}
        ></SisterCard>

        <SisterCard
          restaurant={"safari"}
          address={"Baggesensgade 9, 2200 København"}
          description={
            "Our cozy modern Italian in Nørrebro. Dive headfirst into pasta, crostini, polenta, risotto and antipasti. The lights are turned down and the sound of the 90s golden age of hip hop and some detours to some of the recent decades are turned up."
          }
          bgcolor={"primary-200"}
          addresscolor={"primary-400"}
          href={"/menu"}
          selfend={true}
          heading2_stroke={true}
          heading3_stroke={true}
        ></SisterCard>

        <SisterCard
          restaurant={"omar"}
          address={"Refsnæsgade 32, 2200 København N"}
          description={
            "Omar is the firstborn, the o-g, where it all started and the playground that has layed the foundation for why we do what we do. We celebrate neighborhood, diversity, laissez-faire, beautiful hosting, good taste and festivitas."
          }
          bgcolor={"secondary-500"}
          addresscolor={"secondary-700"}
          href={"/menu"}
          heading2_stroke={true}
          heading1_stroke={true}
        ></SisterCard>
      </article>
    </section>
  );
}
export default Section_sister_restaurants;
