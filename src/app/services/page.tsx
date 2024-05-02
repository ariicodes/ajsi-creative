import Heading from "../ui/Heading";
import ServiceCTA from "../ui/Services/ServiceCTA";
import ServicesList from "../ui/Services/ServicesList";

const services = [
  {
    id: 1,
    name: "Basic",
    services: ["Service 1", "Service 2", "Service 3"],
    startingPrice: 100,
  },
  {
    id: 2,
    name: "Advanced",
    services: ["Service 1", "Service 2", "Service 3"],
    startingPrice: 200,
  },
  {
    id: 3,
    name: "Premium",
    services: ["Service 1", "Service 2", "Service 3"],
    startingPrice: 300,
  },
];

export default function Services() {
  return (
    <main>
      <Heading header="services" />
      <ServicesList services={services} />
      <ServiceCTA />
    </main>
  );
}
