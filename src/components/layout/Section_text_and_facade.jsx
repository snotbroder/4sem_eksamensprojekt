import Image from "next/image";
function Section_text_and_facade({}) {
  return (
    <section className="relative  ">
      <Image data-aos="fade-up" src="/Image_bank/illustrations/facade1_darkbrown.svg" width={604} height={532} alt="illustration of restaurants facade" className="absolute left-1/2 top-1/2 translate-[-50%]"></Image>
      <Image src="/Image_bank/repeatingtext/mobile/lamar_secondary500.svg" width={393} height={490} alt="Repeating text that says lamar in yellow" className="md:hidden w-full"></Image>
      <Image src="/Image_bank/repeatingtext/desktop/lamar_secondary500.svg" width={1280} height={735} className="hidden md:block w-full" alt="Repeating text that says lamar in yellow"></Image>
    </section>
  );
}

export default Section_text_and_facade;
