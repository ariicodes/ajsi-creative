import Heading from "../(components)/Heading";
import MainCTA from "../(components)/MainCTA";
import SubscriptionForm from "../(components)/SubscriptionForm";
import ContactForm from "../(components)/contact/ContactForm";

export default function Contact() {
  return (
    <div>
      <Heading header="Contact" />
      <ContactForm />
      <SubscriptionForm />
      <MainCTA />
    </div>
  );
}
