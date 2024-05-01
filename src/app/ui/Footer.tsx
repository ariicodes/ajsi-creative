import Image from "next/image";
import Link from "next/link";
import footerLogo from "../../../public/ajsiFooterLogo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="-mt-0.5 flex h-[230px] flex-row">
      <div className="flex w-7/12 flex-col items-center justify-center gap-4 bg-brown-sugar xl:w-4/12 xl:flex-row xl:gap-8">
        <Image src={footerLogo} alt="" height={110} width={150} />
        <div className="text-center text-[10px] text-white">
          <a href="tel:+12026709777">
            <p>(202) 670-9777</p>
          </a>
          <a href="mailto:info@ajsicreative.com">
            <p>info@ajsicreative.com</p>
          </a>
          <p>Based in Washington DC</p>
          <p className="mt-1 text-[8px] font-light">
            © Ariela Israel {currentYear}
          </p>
        </div>
      </div>
      <div className="flex w-5/12 flex-col border-t-[20px] border-gunmetal xl:w-8/12">
        <ul className="flex h-full flex-col justify-center bg-white pl-8 font-serif text-[15px] font-light leading-tight text-gunmetal xl:flex-row xl:items-center xl:justify-between xl:px-36">
          <li>
            <Link href="/">home</Link>
          </li>
          {/* <li>
            <Link href="/portfolio">portfolio</Link>
          </li> */}
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
        </ul>
      </div>
    </footer>
  );
}
