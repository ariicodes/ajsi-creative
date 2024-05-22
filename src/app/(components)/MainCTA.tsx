import { LightActionBtn } from "./Buttons";

export default function MainCTA() {
  return (
    <section className="flex flex-col justify-center bg-gunmetal text-base text-white xl:h-[400px] xl:items-center">
      <div className="flex flex-col items-center gap-4 px-6 py-10 xl:gap-5 xl:px-80">
        <p className="text-2xl">
          Tired of a website that doesn&apos;t convert? Struggling to build a
          brand identity that resonates? We can help!
        </p>
        <p>
          AJSI Creative empowers small businesses and entrepreneurs with the
          technical and design solutions needed to elevate their brand. Whether
          you need a website that converts visitors into loyal customers, a
          captivating brand identity that sets you apart, or professional
          photography to showcase your products, we offer a comprehensive suite
          of services designed to bring your vision to life.
        </p>
        <p className="mb-5 font-serif text-xl font-medium">
          Ready to take your brand to the next level? Let&apos;s chat! Book a
          free consultation today and discover how we can help you create an
          unforgettable digital experience for your audience.
        </p>
        <div className="self-center">
          <LightActionBtn content="book now" route="/booking" />
        </div>
      </div>
    </section>
  );
}
