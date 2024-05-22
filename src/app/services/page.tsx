import Heading from "../(components)/Heading";
import MainCTA from "../(components)/MainCTA";
import SubscriptionForm from "../(components)/SubscriptionForm";
import ServicesList from "../(components)/services/ServicesList";
import { url } from "../../utils/config";

export default async function Services() {
  const getServices = async () => {
    try {
      const res = await fetch(`${url}/services`, {
        cache: "no-cache",
      });
      return res.json();
    } catch (error: any) {
      console.log(`Failed to load services: ${error.message}
    `);
    }
  };

  const services = await getServices();

  return (
    <main>
      <Heading header="services" />
      <ServicesList services={services} />
      <SubscriptionForm />
      <MainCTA />
    </main>
  );
}
