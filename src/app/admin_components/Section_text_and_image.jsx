import Image from "next/image";
function Section_text_and_image({ h1, h2, p, btn_txt, btn_href, img, reversedOrder }) {
  return (
    <section className={`flex flex-col md:grid md:grid-cols-2 gap-xs my-lg border-2 border-black ${reversedOrder ? "md:[direction:rtl]" : ""}`}>
      <article className={`flex flex-col w-auto aspect-square `}>
        <div className={`my-auto flex flex-col gap-s ${reversedOrder ? "md:[direction:ltr]" : ""}`}>
          <h1>{h1}</h1>
          <h2 className="border-y-2 border-darkbrown w-max py-xxs">{h2}</h2>
          <p>{p}</p>
          <div className="border-2 border-green-400 p-2 place-self-end">
            {btn_txt}, {btn_href}, {reversedOrder}
          </div>
        </div>
      </article>
      <article className=" w-auto h-auto aspect-square">
        <div className="place-self-center mt-xs">
          <Image src={`/Image_bank/${img}.webp`} width={600} height={600} alt="Building"></Image>
        </div>
      </article>
    </section>
  );
}

export default Section_text_and_image;
