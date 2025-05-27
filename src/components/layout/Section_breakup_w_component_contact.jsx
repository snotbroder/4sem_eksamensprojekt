function Section_breakup_w_component_contact({ children }) {
  return (
    <section className="w-full h-full   ">
      <article className={`h-full bg-[url(/Image_bank/repeatingtext/mobile/contact_secondary500.svg),_url('/Image_bank/aboutus/interior3.png')] md:bg-[url(/Image_bank/repeatingtext/desktop/contact_secondary500.svg),_url('/Image_bank/aboutus/interior3.png')] bg-cover  bg-center flex flex-col items-center justify-center md:grid md:grid-cols-2 md:gap-xl px-sm lg:px-6xl py-3xl bg-fixed md:bg-fixed`}>
        <article data-aos="fade-up">{children}</article>
        <article></article>
      </article>
    </section>
  );
}

export default Section_breakup_w_component_contact;
