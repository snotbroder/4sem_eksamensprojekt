// Images
import Image from "next/image";
import FoodAndWine_Gif from "/public/Image_bank/gifs/illustration-foodandwine.gif";
// Sections
import Section_text_and_image from "@/components/layout/Section_text_and_image";
import Section_breakup_w_component from "@/components/layout/Section_breakup_w_component copy";
import Section_text_and_facade from "@/components/layout/Section_text_and_facade";
import Section_sister_restaurants from "@/components/layout/Section_sister_restaurants";
import ClipboardCard from "@/components/utility/ClipboardCard";
// UI
import accordionContentJoin from "@/copy_content/accordionJoin";
import AccordionParent from "@/components/ui/accordion/AccordionParent";
import RoutingButton from "@/components/ui/buttons/RoutingButton";
import Section_breakup_w_component_request from "@/components/layout/Section_breakup_w_component_request";
import AddBooking from "@/components/utility/AddBooking";

export default function About() {
  return (
    <div>
      <section className=" mt-[10vh]  px-s lg:px-6xl grid gap-xs lg:gap-xl  lg:grid-cols-2 lg:items-start mb-3xl lg:mb-6xl">
        <div className=" lg:order-2 ">
          <article className=" relative h-[50vh] lg:h-[185vh] transition-all ease-in-out ">
            <Image src="/Image_bank/aboutus/fire.png" alt="making food and it spews" width={162} height={250} className="absolute -top-1 right-0 lg:w-[200px] lg:h-[290px] lg:object-cover" />
            <Image src="/Image_bank/aboutus/interior2.png" alt="discolight" width={120} height={200} className="absolute top-1/4 left-1/4 translate-[-50%]" />
            <Image src="/Image_bank/aboutus/food1.png" alt="plates of food" width={162} height={200} className="absolute bottom-0 lg:left-xl" />

            <Image src="/Image_bank/aboutus/team1.png" alt="bunch of polaroids of the workteam on a fridge" width={152} height={207} className="absolute bottom-xs lg:bottom-1/6 right-1/4 translate-x-[50%]" />
            <Image src="/Image_bank/aboutus/interior1.png" alt="red interior" width={152} height={207} className="absolute top-2/6 hidden lg:block   right-3/9 translate-x-[50%]" />
            <Image src="/Image_bank/aboutus/interior3.png" alt="poster of a basketbal player" width={172} height={237} className="absolute bottom-1/4 hidden lg:block right-0 " />
            <Image src="/Image_bank/aboutus/lamarrules.svg" alt="lamar rules" width={209} height={246} className=" absolute left-1/2 top-1/2 translate-[-50%] lg:w-[250px] lg:left-0 lg:translate-x-0" />
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
            Lamar is the third in our family of restaurants, celebrating city life and vibrant nightlife. The chaotic, raw and imperfect interior is a way to make Vesterbro less polished.
            <br></br> Our food is unpretentious and guided by taste, not rules or origin. Ingredients and inspiration shape the menu. We serve plenty of wine, shots, cheeky cocktails, and cold beers.
          </p>
        </div>
      </section>
      <Section_text_and_facade></Section_text_and_facade>
      <section className="mx-s lg:mx-6xl my-3xl">
        <Section_text_and_image h2="From us to you" p="At Lamar the kitchen puts together the menu and it is served at a fresh pace. We care that the food tastes good, that’s our dishes change depending on the season. The menus has to be ordered for the whole table, and shared family-style." img={FoodAndWine_Gif} reversedOrder={true} noButton={true}></Section_text_and_image>
      </section>
      <Section_breakup_w_component>
        <ClipboardCard>
          <article className="grid gap-xs">
            <div>
              <h2 className="border-y-darkbrown border-y">Join our team</h2>
              <p>Apply for positions or send us an unsolicited email!</p>
            </div>

            <AccordionParent contentSource={accordionContentJoin}></AccordionParent>
            <div className="place-self-end">
              <RoutingButton variant="forms">Apply here</RoutingButton>
            </div>
          </article>
        </ClipboardCard>
      </Section_breakup_w_component>
      <Section_breakup_w_component_request>
        <ClipboardCard>
          <AddBooking></AddBooking>
        </ClipboardCard>
      </Section_breakup_w_component_request>
      <Section_sister_restaurants></Section_sister_restaurants>
    </div>
  );
}
