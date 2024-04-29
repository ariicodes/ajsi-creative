import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import { DarkActionBtn } from "./Buttons";
import Instagram from "../../../public/instagram.png";
import LinkedIn from "../../../public/LinkedIn.png";
import TikTok from "../../../public/TikTok.png";

export default function MobileNavMenu({ menuOpen, setMenuOpen }: any) {
  const handleMenuClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <div
      className={`flex w-52 flex-col items-end justify-center bg-brown-sugar py-6 pr-6 text-white ${!menuOpen && "hidden"}`}
    >
      <button onClick={handleMenuClick}>
        <XMarkIcon className="h-6 w-6 text-white" />
      </button>
      <ul className="my-8 flex flex-col gap-5 text-right font-serif text-sm font-light">
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li>
          <Link href="/services">services</Link>
        </li>
        <li>
          <Link href="/testimonials">testimonials</Link>
        </li>
        <li>
          <Link href="/resources">resources</Link>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
        <li>
          <Link href="/faq">faq</Link>
        </li>
        <li>
          <DarkActionBtn
            content="book a consultation"
            onClick={() => console.log("Book a consultation")}
          />
        </li>
        <li className="flex w-full flex-row justify-between">
          <Link href="https://www.instagram.com/ajsi.creative/">
            <Image
              src={Instagram}
              width={32}
              height={32}
              alt="Instagram logo"
            />
          </Link>
          <Link href="https://linkedin.com/company/ajsi-creative">
            <Image src={LinkedIn} width={32} height={32} alt="LinkedIn logo" />
          </Link>
          <Link href="https://www.tiktok.com/@ajsi.creative">
            <Image src={TikTok} width={32} height={32} alt="TikTok logo" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
