import Heading from "../(components)/Heading";
import MainCTA from "../(components)/MainCTA";
import SubscriptionForm from "../(components)/SubscriptionForm";
import ServicesList from "../(components)/services/ServicesList";
import services from "../(components)/services/servicesData";

export default async function Services() {
  return (
    <main>
      <Heading header="services" />
      <ServicesList services={services} />
      <SubscriptionForm />
      <MainCTA />
    </main>
  );
}
