"use client";

import { useState } from "react";
import { url } from "../../../utils/config";

interface Subscription {
  _id: string;
  email: string;
  isDiscountEmailSent: boolean;
}

const SubscriptionTable = ({
  subscriptions,
}: {
  subscriptions: Subscription[];
}) => {
  const [subs, setSubs] = useState(subscriptions);

  const updateSubStatus = async (email: string) => {
    try {
      const res = await fetch(`${url}/potential-clients/${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isDiscountEmailSent: true }),
      });
      if (res.ok) {
        setSubs((prevSubs) =>
          prevSubs.map((sub) =>
            sub.email === email ? { ...sub, isDiscountEmailSent: true } : sub,
          ),
        );
        alert("Subscription status updated!");
      } else {
        alert("Failed to update subscription status. Please try again later.");
      }
    } catch (error: any) {
      console.log(`Failed to update subscription status: ${error.message}`);
    }
  };

  const onClickHandler: React.MouseEventHandler<HTMLParagraphElement> = (e) => {
    const email =
      e.currentTarget.parentElement?.parentElement?.firstChild?.textContent;
    if (email) {
      updateSubStatus(email);
    }
  };

  return (
    <div>
      <table className="m-10 text-left">
        <thead>
          <tr>
            <th>Email</th>
            <th>Discount Status</th>
          </tr>
        </thead>
        <tbody>
          {subs.map((subscription: Subscription, index: number) => (
            <tr key={index}>
              <td className="pr-6">{subscription.email}</td>
              <td>
                {subscription.isDiscountEmailSent ? (
                  "Sent"
                ) : (
                  <p
                    className="cursor-pointer bg-gunmetal text-center text-white"
                    onClick={onClickHandler}
                  >
                    Update Status
                  </p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionTable;
