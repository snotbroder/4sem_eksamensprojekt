import Image from "next/image";
function ClipboardCard({ children }) {
  return (
    <section className="border-darkbrown border-8 outline-beige outline relative  bg-secondary-500 p-sm py-xl">
      <Image src={"Image_bank/illustrations/clipboard_darkbrown.svg"} width={233} height={72} className="absolute -top-12 left-1/2 -translate-x-1/2"></Image>
      {children}
    </section>
  );
}
export default ClipboardCard;
