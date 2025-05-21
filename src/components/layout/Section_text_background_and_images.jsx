"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

function Section_text_background_and_images() {
  return (
    <section className=" py-xl ">
      <article id="box" className="relative   ">
        <Image
          src="/Image_bank/aboutus/food2.png"
          alt="Picture of people talking and food and wine at the table"
          width={162}
          height={250}
          className="absolute -top-lg right-xs lg:w-1/5  lg:object-cover"
        />
        <Image
          src="/Image_bank/atmosphere/Image_4.jpg"
          alt="Picture of a waiter working"
          width={120}
          height={200}
          className="absolute -bottom-xl left-1/4 md:w-1/5 md:left-4/6 translate-x-[-50%] w-1/4"
        />
        <Image
          src="/Image_bank/aboutus/food1.png"
          alt="plates of food"
          width={162}
          height={200}
          className="absolute top-lg md::-top-lg md:left-1/5 left-sm  w-1/3 md:w-1/5  "
        />

        <Image
          src="/Image_bank/atmosphere/Image_1.jpg"
          alt="Picture of the restaurants facade"
          width={152}
          height={207}
          className="absolute bottom-1/6 md:w-1/6  right-1/4 md:right-5/6 translate-[50%]"
        />
        <Image
          src="/Image_bank/aboutus/lamarrules.svg"
          alt="lamar rules"
          width={209}
          height={246}
          className=" absolute left-1/2 top-1/2 translate-[-50%]  w-1/2 md:w-1/4  "
        />
        <Image
          src="/Image_bank/repeatingtext/desktop/lamar_primary500.svg"
          alt="lamar repeating text desktop"
          width={1280}
          height={694}
          className="hidden md:block relative -z-10 w-full  "
        />
        <Image
          src="/Image_bank/repeatingtext/mobile/lamar_primary500.svg"
          alt="lamar repeating text mobil"
          width={393}
          height={490}
          className="md:hidden relative -z-10  w-full   "
        />
      </article>
    </section>
  );
}

export default Section_text_background_and_images;
