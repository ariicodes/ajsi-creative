import Heading from "../(components)/Heading";
import SubscriptionTable from "../(components)/subscriptions/SubscriptionTable";
import { url } from "../../utils/config";

export default async function Subscriptions() {
  const getSubscriptions = async () => {
    try {
      const res = await fetch(`${url}/potential-clients`, {
        cache: "no-cache",
      });
      return res.json();
    } catch (error: any) {
      console.log(`Failed to load subscriptions: ${error.message}`);
    }
  };

  const subscriptions = await getSubscriptions();


  return (
    <div>
      <Heading header="Subscriptions" />
      <SubscriptionTable subscriptions={subscriptions} />
    </div>
  );
}
