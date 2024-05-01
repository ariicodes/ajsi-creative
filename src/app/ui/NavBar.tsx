"use client";

import { Bars2Icon } from "@heroicons/react/20/solid";
import Image from "next/image";
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
    <nav className="flex h-[70px] w-screen flex-row bg-almond xl:justify-between z-30">
      <div className="ml-6 mr-12 w-1/2 self-center xl:w-1/12">
        <Image src={headerLogo} alt="" height={26} width={115} />
      </div>
      <div className="hidden xl:block self-center">
        <DesktopNavMenu />
      </div>
      <div
        className={`flex w-1/2 flex-col items-end xl:hidden ${!menuOpen ? "self-center" : ""}`}
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
