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
  selfend,
}) {
  return (
    <section
      className={`relative w-2/3 lg:w-[30%] h-[443px] ${
        selfend ? "self-end" : ""
      }`}
    >
      <article
        className={`bg-${bgcolor} h-full  p-xs flex flex-col justify-between`}
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
        <article
          className={`size-full place-content-center bg-[url('/Image_bank/bg-images/sisterrestaurants/${restaurant}.webp')] bg-cover text-secondary-500 absolute z-10  flex top-0 left-0 hover:opacity-0 transition-all ease-in-out cursor-pointer`}
        >
          <div className="self-center ">
            <h2
              className={`sistercardheading ${
                heading1_stroke ? "stroke-text-secondary" : ""
              }`}
            >
              {restaurant}
            </h2>
            <h2
              className={`sistercardheading ${
                heading2_stroke ? "stroke-text-secondary" : ""
              }`}
            >
              {restaurant}
            </h2>
            <h2
              className={`sistercardheading ${
                heading3_stroke ? "stroke-text-secondary" : ""
              }`}
            >
              {restaurant}
            </h2>
          </div>
        </article>
      </article>
    </section>
  );
}
export default SisterCard;
