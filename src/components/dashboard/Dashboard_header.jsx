import { UserButton } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

function Dashboard_header() {
  return (
    <header className="fixed bg-white w-full h-xl md:h-[90px] flex justify-between border-b-2 border-darkbrown py-xs md:px-lg z-100">
      <Link href="/dashboard" className="flex md:gap-xxs">
        <Image priority src="/Image_bank/logo/logo-red.svg" width={160} height={55} alt="Lamar logo"></Image> <span className="text-[20px] md:leading-[96px] mt-auto uppercase">Dashboard</span>
      </Link>
      <ul className="flex">
        <li>
          <Link href="/">See website</Link>
        </li>
        <li>
          <UserButton showName />
        </li>
      </ul>
    </header>
  );
}

export default Dashboard_header;
