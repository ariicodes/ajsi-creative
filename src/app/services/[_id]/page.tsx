import { Service } from "../../(components)/services/ServicesList";
import ServiceHeader from "@/app/(components)/services/ServiceHeader";
import ServiceDescription from "@/app/(components)/services/ServiceDescription";
import MainCTA from "@/app/(components)/MainCTA";
import services from "@/app/(components)/services/servicesData";

export default function ServicePage({ params }: { params: { _id: string } }) {
  const service = services.find(
    (service: Service) => service._id === parseInt(params._id),
  );

  if (!service) {
    return (
      <div className="flex flex-row items-center justify-center text-6xl text-gunmetal">
        Service not found
      </div>
    );
  }

  return (
    <div>
      <ServiceHeader service={service} />
      <ServiceDescription service={service} />
      <MainCTA />
    </div>
  );
}
