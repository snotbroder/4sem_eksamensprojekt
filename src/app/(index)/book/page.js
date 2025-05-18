import Image from "next/image";
import Section_breakup_w_component from "@/components/layout/Section_breakup_w_component copy";
import accordionContentJoin from "@/copy_content/accordionJoin";
import AccordionParent from "@/components/ui/accordion/AccordionParent";
import RoutingButton from "@/components/ui/buttons/RoutingButton";
import Section_text_and_image from "@/components/layout/Section_text_and_image";
import ClipboardCard from "@/components/layout/cards/ClipboardCard";
export default function About() {
  return (
    <section>
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
