import Heading from "../components/Heading";
import ServiceCTA from "../components/services/ServiceCTA";
import ServicesList from "../components/services/ServicesList";

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
