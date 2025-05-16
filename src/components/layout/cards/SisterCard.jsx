import Link from "next/link";
function SisterCard({
  restaurant,
  address,
  description,
  bgcolor,
  addresscolor,
  href,
  heading1_stroke,
  heading2_stroke,
  heading3_stroke,
}) {
  return (
    <section className=" m-xs  relative w-2/3 lg:w-1/4">
      <article
        className={`bg-${bgcolor} w-full h-full p-xs flex flex-col justify-between`}
      >
        <div>
          <h2 className="sistercardheading text-center">{restaurant}</h2>
          <h4 className={`text-${addresscolor}`}>{address}</h4>
          <p>{description}</p>
        </div>
        <Link
          className="place-self-end underline decoration-1 underline-offset-4 "
          href={href}
        >
          Read more
        </Link>
      </article>
      <article
        className={`w-full h-full place-content-center bg-[url('/Image_bank/bg-images/sisterrestaurants/${restaurant}.webp')] bg-cover text-secondary-500 absolute z-10  flex top-0 left-0 hover:opacity-0 transition-all ease-in-out cursor-pointer`}
      >
        <div className="self-center ">
          <h2
            className={`sistercardheading ${
              heading1_stroke ? "stroke-text" : ""
            }`}
          >
            {restaurant}
          </h2>
          <h2
            className={`sistercardheading ${
              heading2_stroke ? "stroke-text" : ""
            }`}
          >
            {restaurant}
          </h2>
          <h2
            className={`sistercardheading ${
              heading3_stroke ? "stroke-text" : ""
            }`}
          >
            {restaurant}
          </h2>
        </div>
      </article>
    </section>
  );
}
export default SisterCard;
