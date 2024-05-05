import { LightActionBtn } from "./Buttons";

export default function MainCTA() {
  return (
    <section className="flex h-[475px] flex-col justify-center bg-gunmetal text-base text-white xl:h-[315px] xl:items-center">
      <div className="flex flex-col items-center gap-4 p-6 xl:items-start xl:gap-5">
        <p>
          We&apos;re passionate about bringing your brand to life through
          stunning UI/UX designs, robust full-stack development, and captivating
          branding services.
        </p>
        <p>
          Whether you&apos;re looking to enhance your online presence, create a
          cohesive brand identity, or showcase your products with striking
          photography, we&apos;ve got you covered.
        </p>
        <p>
          Let&apos;s collaborate to turn your ideas into unforgettable digital
          experiences.
        </p>
        <p className="mb-5 font-serif text-xl font-bold">
          Book a consultation today and let&apos;s embark on this creative
          journey together!
        </p>
        <div className="self-center">
          <LightActionBtn content="let's get started" route="/booking" />
        </div>
      </div>
    </section>
  );
}
