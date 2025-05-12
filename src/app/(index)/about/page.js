import Image from "next/image";

export default function About() {
  return (
    <div>
      <div>
        <div className=" mt-[10vh]  px-s lg:px-6xl grid gap-xs  lg:grid-cols-2 lg:items-start">
          <div className=" lg:order-2 ">
            <article className=" relative h-[50vh] lg:h-[150vh]">
              <Image
                src="/Image_bank/aboutus/fire.png"
                alt="making food and it spews"
                width={162}
                height={250}
                className="absolute -top-1 right-0"
              />
              <Image
                src="/Image_bank/aboutus/interior2.png"
                alt="discolight"
                width={100}
                height={200}
                className="absolute top-1/4 left-1/4 translate-[-50%]"
              />
              <Image
                src="/Image_bank/aboutus/food1.png"
                alt="discolight"
                width={132}
                height={200}
                className="absolute bottom-0"
              />

              <Image
                src="/Image_bank/aboutus/team1.png"
                alt="discolight"
                width={122}
                height={207}
                className="absolute bottom-xs right-1/4 translate-x-[50%]"
              />
              <Image
                src="/Image_bank/aboutus/lamarrules.svg"
                alt="lamar rules"
                width={209}
                height={246}
                className=" absolute left-1/2 top-1/2 translate-[-50%]"
              />
            </article>
          </div>
          <div className=" lg:order-1 lg:sticky lg:top-[15%] lg:self-start">
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
