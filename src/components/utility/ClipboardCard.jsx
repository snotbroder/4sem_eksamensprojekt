import Image from "next/image";
function ClipboardCard({ children, noPadding, bgcolor }) {
  return (
    <section
      data-aos="fade-up"
      className={`border-darkbrown border-8 outline-beige outline relative  bg-${bgcolor} 
        ${noPadding ? "p-0 py-0 bg-none" : "p-sm py-xl "} `}
    >
      <Image
        src={"Image_bank/illustrations/clipboard_darkbrown.svg"}
        width={233}
        height={72}
        className="absolute -top-12 left-1/2 -translate-x-1/2"
        alt="illustration of a clippingboard clip"
      ></Image>
      {children}
    </section>
  );
}
export default ClipboardCard;
