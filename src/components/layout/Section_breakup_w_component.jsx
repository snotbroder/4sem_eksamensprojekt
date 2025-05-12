function Section_breakup_w_component({ children, motive }) {
  return (
    <section className="w-full border-2 h-[40rem] border-red-500 bg-[url(/Image_bank/facade_image.jpg)] bg-cover bg-center ">
      <article
        className={`h-full bg-[url(/Image_bank/${motive}_repeating_backdrop_secondary500.svg)] bg-contain md:bg-cover bg-bottom-right flex flex-col items-center justify-center md:grid md:grid-cols-2 md:gap-xl`}
      >
        <article>{children}</article>
        <article></article>
      </article>
    </section>
  );
}

export default Section_breakup_w_component;
