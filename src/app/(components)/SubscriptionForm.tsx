"use client";

import { SubmitBtn } from "./Buttons";
import { url } from "../../utils/config";

export default function SubscriptionForm() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    try {
      const res = await fetch(`${url}/potential-clients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      // clear the input field
      e.target[0].value = "";
      if (res.ok) {
        alert("You've successfully subscribed!");
      } else {
        alert("Failed to subscribe. Please try again later.");
      }
    } catch (error: any) {
      console.log(`Failed to subscribe: ${error.message}`);
    }
  };

  return (
    <section className="flex h-[181px] flex-col justify-center xl:items-center">
      <div className="flex flex-col gap-5 p-6 xl:w-[635px]">
        <p className="font-serif text-xl font-medium text-cordovan">
          Subscribe to our monthly newsletter for 10% off your first service
        </p>
        <form
          className="flex flex-row justify-center gap-3"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="email address"
            className="w-56 border border-black px-2 xl:w-[26rem]"
          />
          <SubmitBtn content="submit" />
        </form>
      </div>
    </section>
  );
}
