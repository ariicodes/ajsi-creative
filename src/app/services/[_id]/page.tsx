import { Service } from "../../(components)/services/ServicesList";
import { url } from "../../../utils/config";
import ServiceHeader from "@/app/(components)/services/ServiceHeader";
import ServiceDescription from "@/app/(components)/services/ServiceDescription";
import MainCTA from "@/app/(components)/MainCTA";

export default async function ServicePage({
  params,
}: {
  params: { _id: string };
}) {
  const getService = async () => {
    try {
      const res = await fetch(`${url}/services/${params._id}`);
      return res.json();
    } catch (error: any) {
      console.log(`Failed to load service: ${error.message}
    `);
    }
  };

  const service: Service = await getService();

  return (
    <div>
      <ServiceHeader service={service} />
      <ServiceDescription service={service} />
      <MainCTA />
    </div>
  );
}
