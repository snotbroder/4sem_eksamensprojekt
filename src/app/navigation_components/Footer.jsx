import Heading1 from "../designsystem_components/Heading1";
import Heading2 from "../designsystem_components/Heading2";
import Heading3 from "../designsystem_components/Heading3";
import Heading4 from "../designsystem_components/Heading4";
import Body from "../designsystem_components/Body";
import Image from "next/image";

export default function Footer({}) {
  return (
    <footer className="bg-primary-500 grid grid-cols-2 ">
      <article>
        <div></div>
        <div>
          <Heading4>Adresse</Heading4>
          <Body>
            Gl. Kongevej 27 <br></br> 1610 København V
          </Body>
        </div>
        <div>
          <Heading4>Åbningstider</Heading4>
          <div>
            <div className="flex justify-between">
              <Body>Mandag til torsdag</Body>
              <Body>17-24</Body>
            </div>
            <div className="flex justify-between">
              <Body>Fredag & lørdag</Body>
              <Body>17.30-24</Body>
            </div>
          </div>
        </div>
        <div>
          <Heading4>Kontakt</Heading4>
          <Body>
            <a href="mailto:hej@restaurantlamar.com">hej@restaurantlamar</a>
            <br></br> <a href="tel:+4526362727">+45 26 36 27 27</a>
          </Body>
        </div>
      </article>
      <Image></Image>
    </footer>
  );
}
