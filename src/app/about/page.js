import Image from "next/image";
import Section_breakup_w_component from "../admin_components/Section_breakup_w_component";

export default function About() {
  return (
    <div>
      <article className="md:grid-cols-2">
        <h1>About Lamar</h1>
        <section>
          <Image
            src="../Image_bank/atmosphere/Image_2.jpg "
            width={100}
            height={100}
          ></Image>
        </section>
      </article>
    </div>
  );
}
