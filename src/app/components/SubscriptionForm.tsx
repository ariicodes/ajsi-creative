import { SubmitBtn } from "./Buttons";

export default function SubscriptionForm() {
  return (
    <section className="flex h-[181px] flex-col justify-center xl:items-center">
      <div className="flex flex-col gap-5 p-6 xl:w-[635px]">
        <p className="font-serif text-xl font-medium text-cordovan">
          Subscribe to our monthly newsletter for 10% off your first service
        </p>
        <form className="flex flex-row justify-center gap-3">
          <input
            type="email"
            placeholder="email address"
            className="xl:w-[26rem] w-56 border border-black px-2"
          />
          <SubmitBtn content="submit" />
        </form>
      </div>
    </section>
  );
}
