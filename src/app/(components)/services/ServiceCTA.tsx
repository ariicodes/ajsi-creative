import { LightActionBtn } from "../Buttons";

export default function ServiceCTA() {
  return (
    <section className="flex h-[290px] flex-col justify-center bg-gunmetal text-base text-white xl:h-[315px] xl:items-center">
      <div className="flex flex-col items-center gap-4 p-6 xl:gap-5">
        <p>
          We also offer both single services and custom, a la carte packages. If
          you&apos;re unsure about the needs of your business, we are sure to
          guide you to a solution.
        </p>
        <p className="mb-5 font-serif text-xl font-bold">
          Reach out to book a free consultation TODAY!
        </p>
        <div className="self-center">
          <LightActionBtn content="book now" route="/booking" />
        </div>
      </div>
    </section>
  );
}
