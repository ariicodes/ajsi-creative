import Heading from "../(components)/Heading";
import MainCTA from "../(components)/MainCTA";
import SubscriptionForm from "../(components)/SubscriptionForm";
import AboutSection from "../(components)/about/AboutSection";

const About = () => {
  return (
    <div>
      <Heading header="About" />
      <AboutSection />
      <SubscriptionForm />
      <MainCTA />
    </div>
  );
};

export default About;
