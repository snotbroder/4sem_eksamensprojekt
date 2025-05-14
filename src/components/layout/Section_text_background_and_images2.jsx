"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

function Section_text_background_and_images2() {
  // Idé fra codepen: https://codepen.io/intotheprogram/pen/JwWKoP
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageList = ["Image_1", "Image_2", "Image_3", "Image_4", "Image_5"];
    const newImages = imageList.map((name, index) => {
      const y = Math.floor(Math.random() * 100);
      const x = Math.floor(Math.random() * 80);
      return {
        id: index,
        src: `/Image_bank/atmosphere/${name}.jpg`,
        x,
        y,
      };
    });
    setImages(newImages);
  }, []);

  return (
    <section className=" py-xl ">
      <article id="box" className="relative   ">
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt="Atmospheric image"
            style={{ top: `${image.y}%`, left: `${image.x}%` }}
            width={150}
            height={150}
            className="absolute "
          ></Image>
        ))}
        <Image
          src="/Image_bank/aboutus/lamarrules.svg"
          alt="lamar rules"
          width={209}
          height={246}
          className=" absolute left-1/2 top-1/2 translate-[-50%] lg:w-[300px] "
        />
        <Image
          src="/Image_bank/repeatingtext/lamar_repeating_primary500.svg"
          alt="lamar rules"
          width={1280}
          height={694}
          className=" relative -z-10  w-full  "
        />
      </article>
    </section>
  );
}

export default Section_text_background_and_images2;
