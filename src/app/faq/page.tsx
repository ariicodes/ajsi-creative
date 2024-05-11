import FAQList from "../(components)/faq/FAQList";
import Heading from "../(components)/Heading";
import MainCTA from "../(components)/MainCTA";
import faqs from "../(components)/faq/faqData";

const FAQ = () => {
  return (
    <div>
      <Heading header="faq" />
      <FAQList faqs={faqs} />
      <MainCTA />
    </div>
  );
};

export default FAQ;
