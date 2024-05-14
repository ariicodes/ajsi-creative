import Heading from "../(components)/Heading";
import SubscriptionForm from "../(components)/SubscriptionForm";
import ServiceCTA from "../(components)/services/ServiceCTA";
import ServicesList from "../(components)/services/ServicesList";
import { url } from "../../utils/config";

export default async function Services() {
  const getPackages = async () => {
    try {
      const res = await fetch(`${url}/packages`, {
        cache: "no-cache",
      });
      return res.json();
    } catch (error: any) {
      console.log(`Failed to load packages: ${error.message}
    `);
    }
  };

  const packages = await getPackages();

  return (
    <main>
      <Heading header="services" />
      <ServicesList services={packages} />
      <SubscriptionForm />
      <ServiceCTA />
    </main>
  );
}
