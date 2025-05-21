// Images
import Image from "next/image";

// Sections
import Section_breakup_w_component_request from "@/components/layout/Section_breakup_w_component_request";
import Section_sister_restaurants from "@/components/layout/Section_sister_restaurants";
import Section_text_and_image from "@/components/layout/Section_text_and_image";

// utilities
import AddBooking from "@/components/utility/AddBooking";
import ClipboardCard from "@/components/utility/ClipboardCard";

// Animation
import Animation from "@/components/aos/Animation";

export default function About() {
  return (
    <section>
      <Animation>
        <section className="grid lg:grid-cols-2 ">
          <article
            data-aos="fade-right"
            className="grid mx-sm lg:mx-6xl mt-[15vh] pb-m lg:py-0"
          >
            <h1>Book table</h1>
            <hr></hr>
            <h2>Restaurant-, outside- and bar seating</h2>
            <hr></hr>
            <p className="mb-sm">
              We make sure that we all are equal – and have a party when you
              visit. We dream of working in a safe space. And we create this
              space together.
            </p>
          </article>
          <article className="flex place-content-center pt-xl lg:pt-[19vh]  bg-[url('/Image_bank/aboutus/interior1.png')] bg-cover p-sm py-m">
            <ClipboardCard noPadding={true}>
              <Image
                src="/Image_bank/booking.png"
                width={551}
                height={587}
                alt="booking billede"
                className="w-full h-full  object-cover "
              ></Image>
            </ClipboardCard>
          </article>
        </section>

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
        <Section_breakup_w_component_request>
          <ClipboardCard bgcolor="secondary-500">
            <AddBooking></AddBooking>
          </ClipboardCard>
        </Section_breakup_w_component_request>
        <Section_sister_restaurants></Section_sister_restaurants>
      </Animation>
    </section>
  );
}
