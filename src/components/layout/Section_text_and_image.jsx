import Image from "next/image";
import RoutingButton from "../ui/buttons/RoutingButton";
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
}) {
  return (
    <section
      className={`flex flex-col md:grid md:grid-cols-2  gap-sm md:gap-6xl  ${
        reversedOrder ? "md:[direction:rtl]" : ""
      }`}
    >
      <article className="flex flex-col w-auto">
        <div
          className={`my-auto flex flex-col ${
            addPaddingtoText ? "pr-sm md:pr-6xl" : ""
          }
          ${reversedOrder ? "md:[direction:ltr]" : ""}`}
        >
          <h1>{h1}</h1>
          <h2 className="border-y border-darkbrown ">{h2}</h2>
          <p>{p}</p>
          <div className=" place-self-end">
            <RoutingButton href={btn_href}>{btn_txt}</RoutingButton>
          </div>
        </div>
      </article>

      <Image
        src={img}
        width={600}
        height={600}
        alt={alt}
        className={`w-full self-center ${
          aspectsquare ? "aspect-square object-cover" : ""
        }${reversedOrderMobile ? "order-first md:order-last" : ""}`}
      ></Image>
    </section>
  );
}

export default Section_text_and_image;
