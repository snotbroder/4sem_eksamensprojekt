import Image from "next/image";
import Section_breakup_w_component from "@/components/layout/Section_breakup_w_component copy";
import accordionContentJoin from "@/copy_content/accordionJoin";
import AccordionParent from "@/components/ui/accordion/AccordionParent";
import RoutingButton from "@/components/ui/buttons/RoutingButton";
import Section_text_and_image from "@/components/layout/Section_text_and_image";
import ClipboardCard from "@/components/utility/ClipboardCard";
export default function About() {
  return (
    <section>
      <section className="grid lg:grid-cols-2 ">
        <article className="grid mx-sm lg:mx-6xl pt-[15vh]">
          <h1>Book table</h1>
          <hr></hr>
          <h2>Restaurant-, outside- and bar seating</h2>
          <hr></hr>
          <p className="mb-sm">
            We make sure that we all are equal – and have a party when you
            visit. We dream of working in a safe space. And we create this space
            together.
          </p>
        </article>
        <article className="flex place-content-center pt-[19vh]  bg-[url('/Image_bank/aboutus/interior1.png')] bg-cover p-sm py-m">
          <ClipboardCard className="self-center ">
            <Image
              src="/Image_bank/booking.png"
              width={551}
              height={587}
              alt="booking billede"
              className="w-full h-full object-cover"
            ></Image>
          </ClipboardCard>
        </article>
      </section>
      <Section_breakup_w_component motive={"join"}>
        <ClipboardCard>
          <article className="bg-secondary-500 p-sm py-xl grid gap-xs">
            <div>
              <h2 className="border-y-darkbrown border-y">Join our team</h2>
              <p>Apply for positions or send us an unsolicited email!</p>
            </div>

            <AccordionParent
              contentSource={accordionContentJoin}
            ></AccordionParent>
            <div className="place-self-end">
              <RoutingButton variant="forms">Apply here</RoutingButton>
            </div>
          </article>
        </ClipboardCard>
      </Section_breakup_w_component>

      <Section_text_and_image
        h2={"More than 9 people?"}
        p={"Please fill in this form below"}
        btn_txt={"Request"}
        btn_href={"#forms"}
        img={"/Image_bank/aboutus/food1.png"}
        alt={"plate of food"}
        reversedOrder={true}
        aspectsquare={true}
        addPaddingtoText={true}
      ></Section_text_and_image>
      <section id="forms">
        <Section_breakup_w_component></Section_breakup_w_component>
      </section>
    </section>
  );
}
