import { Service } from "../../(components)/services/ServicesList";
import { url } from "../../../utils/config";
import MainCTA from "../../(components)/MainCTA";
import ServiceHeader from "@/app/(components)/services/ServiceHeader";

export default async function ServicePage({
  params,
}: {
  params: { _id: string };
}) {
  const getService = async () => {
    try {
      const res = await fetch(`${url}/services/${params._id}`, {
        cache: "no-cache",
      });
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
      <MainCTA />
    </div>
  );
}