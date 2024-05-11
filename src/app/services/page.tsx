import Heading from "../(components)/Heading";
import ServiceCTA from "../(components)/services/ServiceCTA";
import ServicesList from "../(components)/services/ServicesList";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
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
      <ServiceCTA />
    </main>
  );
}
