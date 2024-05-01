import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-row justify-center bg-almond">
      <div className="z-40 -mt-[70px] flex h-[629px] flex-col justify-center gap-8 bg-[url('/Home/ajsiTransparent.png')] bg-right bg-no-repeat px-6 pt-10 xl:w-[620px] xl:gap-7">
        <h1 className="font-serif text-6xl font-black leading-snug text-gunmetal xl:text-[5.5rem] xl:leading-tight">
          design.
          <br />
          photograph.
          <br />
          develop.
        </h1>
        <p className="text-center font-sans text-2xl text-gunmetal xl:text-left xl:text-[2rem]">
          where creativity and logic collides
        </p>
        <Link
          href="/booking"
          className="self-end font-serif text-3xl font-medium text-cordovan underline xl:text-4xl"
        >
          inquire here
        </Link>
      </div>
    </section>
  );
}
