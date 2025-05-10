import Body from "../designsystem_components/Body";
import Image from "next/image";

export default function Footer({}) {
  return (
    <div class="">
      <nav>
        <Image
          src="/Image_bank/logo/logo-red.svg"
          alt="logo in red"
          width={157}
          height={55}
        ></Image>
      </nav>
    </div>
  );
}
