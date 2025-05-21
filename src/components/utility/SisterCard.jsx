import Link from "next/link";
import Image from "next/image";
function SisterCard({
  restaurant,
  address,
  description,
  bgcolor,
  addresscolor,
  href,
  selfend,
  heading1_stroke,
  heading2_stroke,
  heading3_stroke,
}) {
  return (
    <article className={`grid  ${selfend ? "self-end" : ""}`}>
      <article
        className={`relative group bg-${bgcolor} min-h-[500px] max-w-[350px] h-full w-full p-xs overflow-hidden flex flex-col`}
      >
        {/* default */}
        <div className="absolute inset-0 grid place-items-center z-10 transition-opacity duration-200 ease-in-out group-hover:opacity-0">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={`/Image_bank/bg-images/sisterrestaurants/${restaurant}.webp`}
            alt="Restaurant facade"
            width={400}
            height={400}
          />
          <div className="z-20 text-secondary-500 text-center">
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
        </div>

        {/* hover */}
        <div className="relative z-0 flex flex-col justify-between h-full text-secondary-500">
          <div>
            <h2 className="sistercardheading text-center">{restaurant}</h2>
            <h4 className={`text-${addresscolor}`}>{address}</h4>
            <p>{description}</p>
          </div>
          <Link
            className="place-self-end underline decoration-1 underline-offset-4"
            href={href}
          >
            Read more
          </Link>
        </div>
      </article>
    </article>
  );
}
export default SisterCard;
