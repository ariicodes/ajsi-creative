import { Service } from "./ServicesList";
import Link from "next/link";
import { url } from "../../../utils/config";

export const benefitSplit = (benefit: string) => {
  const benefitArr = benefit.split(":");
  return benefitArr;
};

export default function ServiceDescription({ service }: { service: Service }) {
  return (
    <section className="p-6 text-sm text-gunmetal xl:flex xl:flex-col xl:items-center xl:px-20 ">
      <p className="">{service.description}</p>
      <h4 className="pt-4 font-bold">{service.benefitsTitle}</h4>
      <ul className="list-disc pl-6">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="text-gunmetal">
            <span className="font-semibold">{benefitSplit(benefit)[0]}</span>:
            <span>{benefitSplit(benefit)[1]}</span>
          </li>
        ))}
      </ul>
      <p className="pt-4 font-serif text-xs text-cambridge-blue">
        Starting at ${service.rate} per{" "}
        {service.rateType.includes("Project")
          ? "project"
          : service.rateType.includes("Hourly")
            ? "hour"
            : "month"}
      </p>
      <div className="flex flex-row justify-end">
        <Link href={`/services`} className="font-bold uppercase text-cordovan">
          Back to Services &gt;
        </Link>
      </div>
    </section>
  );
}
