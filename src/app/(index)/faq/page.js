import Image from "next/image";
import AccordionParent from "../admin_components/AccordionParent";
import accordionContentFAQ from "/src/copy_content/accordionFAQ.js";

export default function About() {
  return (
    <div className="grid md:grid-cols-5">
      <div className="px-s md:px-6xl md:col-span-3">
        <h1>F.A.Q.</h1>
        <AccordionParent contentSource={accordionContentFAQ}></AccordionParent>
      </div>
      <div className="md:col-span-2  bg-[url('/Image_bank/lamar_repeatingtext_secondary500.svg'),_url('/Image_bank/aboutus/food2.png')]  bg-center bg-auto bg-fixed "></div>
    </div>
  );
}
