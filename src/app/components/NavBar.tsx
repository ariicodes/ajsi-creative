"use client";

import { Bars2Icon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import headerLogo from "../../../public/ajsiHeaderLogo.png";
import MobileNavMenu from "./MobileNavMenu";
import DesktopNavMenu from "./DesktopNavMenu";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    if (!menuOpen) setMenuOpen(true);
  };

  return (
    <nav className="z-30 flex h-[70px] w-screen flex-row bg-almond">
      <Link href="/" className="ml-6 mr-12 w-1/2 self-center xl:w-1/12">
        <Image src={headerLogo} alt="" height={26} width={115} />
      </Link>
      <div className="z-50 hidden self-center xl:block w-full pr-6">
        <DesktopNavMenu />
      </div>
      <div
        className={`flex w-1/2 flex-col items-end xl:hidden ${!menuOpen ? "self-center" : ""} z-50`}
      >
        <button
          className={`${menuOpen ? "hidden" : ""}`}
          onClick={handleMenuClick}
        >
          <Bars2Icon className="mr-6 h-6 w-6 text-gunmetal" />
        </button>
        <MobileNavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </nav>
  );
}
