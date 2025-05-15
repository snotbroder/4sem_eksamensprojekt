"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

function Section_text_background_and_images() {
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
    <section className="h-[30rem] bg-[url(/Image_bank/Lamar_repeating_backdrop_primary500.svg)] bg-bottom-left  p-lg">
      <article id="box" className="relative w-full p-xl h-full ">
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt="Atmospheric image"
            style={{ top: `${image.y}%`, left: `${image.x}%` }}
            width={150}
            height={150}
            className="absolute animate-[slow-wiggle_50s_ease_infinite] delay-150"
          ></Image>
        ))}
      </article>
    </section>
  );
}

export default Section_text_background_and_images;
