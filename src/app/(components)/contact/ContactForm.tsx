import { SubmitBtn } from "../Buttons";

export default function ContactForm() {
  return (
    <form
      className="flex flex-col gap-3 px-6 py-8 font-serif font-bold text-gunmetal xl:px-80 xl:py-12"
      action="https://formspree.io/f/mzbwgkwj"
      method="POST"
    >
      <label className="flex flex-col gap-2">
        Name
        <input
          type="text"
          name="name"
          className="h-[30px] w-full border border-gunmetal"
        />
      </label>
      <label className="flex flex-col gap-2">
        <div>
          Title <span className="font-normal italic">(if applicable)</span>{" "}
          <span className="text-[.6rem] font-normal text-cambridge-blue">
            ex. CEO of Brand Inc; Marketing Director at Brand Corp.
          </span>
        </div>
        <input
          type="text"
          name="title"
          className="h-[30px] w-full border border-gunmetal"
        />
      </label>
      <label className="flex flex-col gap-2">
        Phone
        <input
          type="tel"
          name="phone"
          className="h-[30px] w-full border border-gunmetal"
        />
      </label>
      <label className="flex flex-col gap-2">
        Email
        <input
          type="email"
          name="email"
          className="h-[30px] w-full border border-gunmetal"
        />
      </label>
      <fieldset className="flex flex-col">
        <legend>Reason For Contacting</legend>

        <div>
          <input
            type="radio"
            name="reason-for-contacting"
            id="service-inquiry"
            value="Service Inquiry"
            className="size-3 rounded-full border-2 border-gunmetal focus:border-brown-sugar focus:ring"
          />
          <label
            htmlFor="service-inquiry"
            className="pl-2 font-sans text-xs font-normal"
          >
            Service Inquiry
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="reason-for-contacting"
            id="project-collaboration-subcontracting"
            value="Project Collaboration/Subcontracting"
            className="size-3 rounded-full border-2 border-gunmetal focus:border-brown-sugar focus:ring"
          />
          <label
            htmlFor="project-collaboration-subcontracting"
            className="pl-2 font-sans text-xs font-normal"
          >
            Project Collaboration/Subcontracting
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="reason-for-contacting"
            id="employment-opportunity"
            value="Employment Opportunity"
            className="size-3 rounded-full border-2 border-gunmetal focus:border-brown-sugar focus:ring"
          />
          <label
            htmlFor="employment-opportunity"
            className="pl-2 font-sans text-xs font-normal"
          >
            Employment Opportunity
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="reason-for-contacting"
            id="other"
            value="other"
            className="size-3 rounded-full border-2 border-gunmetal focus:border-brown-sugar focus:ring"
          />
          <label htmlFor="other" className="pl-2 font-sans text-xs font-normal">
            Other <span className="italic">(specify below)</span>
            <div>
              <input
                type="text"
                name="reason-for-contacting"
                className="h-[30px] w-full border border-gunmetal"
              />
            </div>
          </label>
        </div>
      </fieldset>
      <div className="flex flex-row justify-center pt-6">
        <SubmitBtn content="submit" />
      </div>
    </form>
  );
}
