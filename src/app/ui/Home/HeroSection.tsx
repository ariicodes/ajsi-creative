import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-almond">
      <div className="z-40 -mt-[70px] flex h-[629px] flex-col justify-center gap-8 bg-[url('/Home/ajsiTransparent.png')] bg-right bg-no-repeat px-6 pt-10 xl:w-[539px]">
        <h1 className="font-serif text-6xl font-black leading-snug text-gunmetal">
          design.
          <br />
          photograph.
          <br />
          develop.
        </h1>
        <p className="text-center font-sans text-2xl text-gunmetal">
          where creativity and logic collides
        </p>
        <Link
          href="/booking"
          className="self-end font-serif text-3xl font-medium text-cordovan underline"
        >
          inquire here
        </Link>
      </div>
    </section>
  );
}
