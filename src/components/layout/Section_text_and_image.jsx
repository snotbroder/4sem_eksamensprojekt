import Image from "next/image";
import RoutingButton from "../ui/buttons/RoutingButton";
function Section_text_and_image({
  h1,
  h2,
  p,
  btn_txt,
  btn_href,
  img,
  reversedOrder,
  reversedOrderMobile,
}) {
  return (
    <section
      className={`flex flex-col md:grid md:grid-cols-2 my-3xl md:gap-6xl  ${
        reversedOrder ? "md:[direction:rtl]" : ""
      }`}
    >
      <article
        className={`flex flex-col w-auto ${
          reversedOrderMobile ? "order-2 md:order-none]" : ""
        }`}
      >
        <div
          className={`my-auto flex flex-col ${
            reversedOrder ? "md:[direction:ltr]" : ""
          }`}
        >
          <h1>{h1}</h1>
          <h2 className="border-y border-darkbrown ">{h2}</h2>
          <p>{p}</p>
          <div className=" place-self-end">
            <RoutingButton href={btn_href}>{btn_txt}</RoutingButton>
          </div>
        </div>
      </article>
      <article className="w-fill h-fill self-center">
        <div className="self-center ">
          <Image src={img} width={600} height={600} alt="Building"></Image>
        </div>
      </article>
    </section>
  );
}

export default Section_text_and_image;
