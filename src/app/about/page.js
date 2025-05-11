import Image from "next/image";

export default function About() {
  return (
    <div>
      <div>
        <div className="md:grid md:grid-cols-2 md:gap-ml md:p-ml md:items-start">
          <div className="mt-ml px-xs md:px-[0px] md:sticky md:top-[20%] md:self-start">
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
              <br></br> <br></br>Here, it is the ingredients and inspiration
              that dictate the menu. Our food is unpretentious and there are no
              rules in the kitchen. The foundation of the kitchen is somewhere
              in Southern Europe in terms of ingredients and methods of worship,
              where we often take inspiration from the Middle East and Asia. For
              us, it doesn't matter where the food comes from, as long as it
              tastes good. Therefore, there is no real framework for what
              cuisine we are. We serve a whole lot of wine, shots, cheeky
              cocktails and cold beers.
            </p>
          </div>
          <div className="flex flex-col md:gap-ml">
            <Image
              src="/Image_bank/aboutus/interior2.png"
              alt="discolight"
              width={162}
              height={227}
            />
            <Image
              src="/Image_bank/aboutus/interior2.png"
              alt="discolight"
              width={162}
              height={227}
            />
            <Image
              src="/Image_bank/aboutus/interior2.png"
              alt="discolight"
              width={162}
              height={227}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
