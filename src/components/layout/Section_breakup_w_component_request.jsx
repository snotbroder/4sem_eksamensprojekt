function Section_breakup_w_component_request({ children, motive }) {
  return (
    <section className="w-full h-full">
      <article className={`h-full bg-top py-[180px] bg-[url(/Image_bank/repeatingtext/mobile/request_secondary500_mobile.svg),_url('/Image_bank/aboutus/team3.webp')] md:bg-[url(/Image_bank/repeatingtext/desktop/request_secondary500_desktop.svg),_url('/Image_bank/aboutus/team3.webp')] bg-cover  md:bg-center flex flex-col items-center justify-center md:grid md:grid-cols-2 md:gap-xl px-sm lg:px-6xl md:py-3xl bg-fixed md:bg-fixed`}>
        <article data-aos="fade-up">{children}</article>
        <article></article>
      </article>
    </section>
  );
}

export default Section_breakup_w_component_request;
