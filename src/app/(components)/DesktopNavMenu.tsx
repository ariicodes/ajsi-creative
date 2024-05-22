import Link from "next/link";
import Image from "next/image";
import { DarkActionBtn } from "./Buttons";
import Instagram from "../../../public/InstagramBlue.png";
import LinkedIn from "../../../public/LinkedInBlue.png";
import TikTok from "../../../public/TikTokBlue.png";

export default function DesktopNavMenu() {
  return (
    <ul className="mr-6 flex w-full flex-row items-center justify-between font-serif text-lg font-light text-gunmetal">
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
      {/* <li>
        <Link href="/resources">resources</Link>
      </li> */}
      {/* <li>
        <Link href="/blog">blog</Link>
      </li> */}
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
        <DarkActionBtn content="book a consultation" route="/booking" />
      </li>
      <li className="flex flex-row gap-8">
        <Link href="https://www.instagram.com/ajsi.creative/">
          <Image src={Instagram} width={32} height={32} alt="Instagram logo" />
        </Link>
        <Link href="https://linkedin.com/company/ajsi-creative">
          <Image src={LinkedIn} width={32} height={32} alt="LinkedIn logo" />
        </Link>
        <Link href="https://www.tiktok.com/@ajsi.creative">
          <Image src={TikTok} width={32} height={32} alt="TikTok logo" />
        </Link>
      </li>
    </ul>
  );
}
