import Image from "next/image";

export default function About() {
  return (
    <div>
      <div>
        <div className=" px-s md:px-6xl grid gap-xs  md:grid-cols-2 md:items-start">
          <div className=" md:order-2 ">
            <article className=" relative h-[50vh] md:h-[150vh]">
              <Image
                src="/Image_bank/aboutus/fire.png"
                alt="making food and it spews"
                width={162}
                height={250}
                className="absolute -top-1 right-1/12"
              />
              <Image
                src="/Image_bank/aboutus/interior2.png"
                alt="discolight"
                width={100}
                height={200}
                className="absolute top-1/12"
              />
              <Image
                src="/Image_bank/aboutus/food1.png"
                alt="discolight"
                width={162}
                height={227}
                className="absolute bottom-0"
              />

              <Image
                src="/Image_bank/aboutus/team2.png"
                alt="discolight"
                width={162}
                height={227}
                className="absolute bottom-0 right-0"
              />
              <Image
                src="/Image_bank/aboutus/lamarrules.svg"
                alt="lamar rules"
                width={209}
                height={246}
                className="w-2/4 absolute left-1/2 top-1/2 translate-[-50%]"
              />
            </article>
          </div>
          <div className=" md:order-1 md:sticky md:top-[15%] md:self-start">
            <h1>
              About <br></br>lamar
            </h1>
            <hr></hr>
            <h2>Hiphop, party, and city vibe</h2>
            <hr></hr>
            <p className="mb-sm">
              Lamar is the third of our sister restaurants, where we focus on
              city life and partying. The decor is a tribute to the chaotic, raw
              and imperfect and a way to make Vesterbro less polished.
              <br></br> Our food is unpretentious and there are no rules in the
              kitchen. For us, it doesn't matter where the food comes from, as
              long as it tastes good. Therefore, it is the ingredients and
              inspiration that dictate the menu. We serve a whole lot of wine,
              shots, cheeky cocktails and cold beers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
