import Image from "next/image";
import RoutingButton from "../ui/buttons/RoutingButton";
import Animation from "@/components/aos/Animation";
function Section_text_and_image({
  h1,
  h2,
  p,
  btn_txt,
  btn_href,
  img,
  alt,
  reversedOrder,
  reversedOrderMobile,
  aspectsquare,
  addPaddingtoText,
  noButton,
  gap,
}) {
  return (
    <Animation>
      <section
        className={`overflow-x-hidden flex flex-col md:grid md:grid-cols-2   ${
          reversedOrder ? "md:[direction:rtl]" : ""
        } ${gap ? "gap-sm md:gap-6xl" : ""} `}
      >
        <article className="flex flex-col w-auto">
          <div
            data-aos="fade-right"
            className={`my-auto flex flex-col ${
              addPaddingtoText ? "px-sm md:px-6xl py-3xl" : ""
            }
          ${reversedOrder ? "md:[direction:ltr]" : ""}`}
          >
            <h1>{h1}</h1>
            <h2 className="border-y border-darkbrown ">{h2}</h2>
            <p>{p}</p>
            <div className={`place-self-end ${noButton ? "hidden" : ""}`}>
              <RoutingButton href={btn_href}>{btn_txt}</RoutingButton>
            </div>
          </div>
        </article>

        <Image
          src={img}
          width={600}
          height={600}
          alt={alt}
          data-aos="fade-left"
          className={`w-full self-center ${
            aspectsquare ? "aspect-square object-cover" : ""
          }${reversedOrderMobile ? "order-first md:order-last" : ""}`}
        ></Image>
      </section>
    </Animation>
  );
}

export default Section_text_and_image;
