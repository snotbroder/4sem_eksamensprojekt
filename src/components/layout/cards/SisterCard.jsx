function SisterCard({ heading1_stroke, heading2_stroke, heading3_stroke }) {
  return (
    <section className="relative">
      <article className="bg-secondary-200 m-xs p-xs w-2/3 lg:w-1/4">
        <h2 className="sistercardheading text-center">safari</h2>

        <h4 className="text-secondary-600">
          Frederiksborgvej 2 <br></br>
          2400 København NV
        </h4>

        <p>
          Kima is our locally rooted, buzzing and cheeky little sister. It's
          colorful and high-spirited here – both physically and spiritually. We
          cook food from all corners of the world and serve wine with and
          without added sulfur and love to guide and talk about wine. Beers on
          tap, drinks and frothy non-alcoholic alternatives too..
        </p>
        <p className="place-self-end">Read more</p>
      </article>
      <article className="place-content-center bg-[url('/Image_bank/bg-images/heroimage_index_desktop.webp')] bg-cover m-xs  w-2/3 lg:w-1/4 text-secondary-500 absolute z-10 h-full flex bottom-0 hover:opacity-0 transition-all cursor-pointer ">
        <div className="self-center ">
          <h2
            className={`sistercardheading ${
              heading1_stroke ? "stroke-text" : ""
            }`}
          >
            safari
          </h2>
          <h2
            className={`sistercardheading ${
              heading2_stroke ? "stroke-text" : ""
            }`}
          >
            safari
          </h2>
          <h2
            className={`sistercardheading ${
              heading3_stroke ? "stroke-text" : ""
            }`}
          >
            safari
          </h2>
        </div>
      </article>
    </section>
  );
}
export default SisterCard;
