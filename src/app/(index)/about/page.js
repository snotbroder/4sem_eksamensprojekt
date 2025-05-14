import Image from "next/image";

export default function About() {
  return (
    <div>
      <div>
        <div className=" mt-[10vh]  px-s lg:px-6xl grid gap-xs lg:gap-xl  lg:grid-cols-2 lg:items-start">
          <div className=" lg:order-2 ">
            <article className=" relative h-[50vh] lg:h-[150vh] transition-all ease-in-out ">
              <Image
                src="/Image_bank/aboutus/fire.png"
                alt="making food and it spews"
                width={162}
                height={250}
                className="absolute -top-1 right-0 lg:w-[200px] lg:h-[290px] lg:object-cover"
              />
              <Image
                src="/Image_bank/aboutus/interior2.png"
                alt="discolight"
                width={120}
                height={200}
                className="absolute top-1/4 left-1/4 translate-[-50%]"
              />
              <Image
                src="/Image_bank/aboutus/food1.png"
                alt="plates of food"
                width={162}
                height={200}
                className="absolute bottom-0 lg:left-xl"
              />

              <Image
                src="/Image_bank/aboutus/team1.png"
                alt="bunch of polaroids of the workteam on a fridge"
                width={152}
                height={207}
                className="absolute bottom-xs lg:bottom-1/6 right-1/4 translate-x-[50%]"
              />
              <Image
                src="/Image_bank/aboutus/interior1.png"
                alt="red interior"
                width={152}
                height={207}
                className="absolute top-2/6 collapse lg:visible   right-3/9 translate-x-[50%]"
              />
              <Image
                src="/Image_bank/aboutus/interior3.png"
                alt="poster of a basketbal player"
                width={172}
                height={237}
                className="absolute bottom-1/4 collapse lg:visible right-0 translate-x-[50%]"
              />
              <Image
                src="/Image_bank/aboutus/lamarrules.svg"
                alt="lamar rules"
                width={209}
                height={246}
                className=" absolute left-1/2 top-1/2 translate-[-50%] lg:w-[250px] lg:left-0 lg:translate-x-0"
              />
            </article>
          </div>
          <div className="grid gap-xxs lg:order-1 lg:sticky lg:top-[15%] lg:self-start  ">
            <h1>
              About <br></br>lamar
            </h1>
            <hr></hr>
            <h2>Hiphop, party, and city vibe</h2>
            <hr></hr>
            <p className="mb-sm">
              Lamar is the third in our family of restaurants, celebrating city
              life and vibrant nightlife. The chaotic, raw and imperfect
              interior is a way to make Vesterbro less polished.
              <br></br> Our food is unpretentious and guided by taste, not rules
              or origin. Ingredients and inspiration shape the menu. We serve
              plenty of wine, shots, cheeky cocktails, and cold beers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
