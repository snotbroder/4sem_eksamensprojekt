function Section_breakup_w_component({ children, motive }) {
  return (
    <section className="w-full h-[40rem]  ">
      <article
        className={`h-full bg-[url(/Image_bank/repeatingtext/desktop/${motive}_secondary500.svg),_url('/Image_bank/aboutus/team1.png')] bg-cover  bg-center flex flex-col items-center justify-center md:grid md:grid-cols-2 md:gap-xl`}
      >
        <article>{children}</article>
        <article></article>
      </article>
    </section>
  );
}

export default Section_breakup_w_component;
