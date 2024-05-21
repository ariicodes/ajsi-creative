import Link from "next/link";

interface Service {
  _id: string;
  title: string;
  officialTitle: string;
  rateType: string;
  rate: number;
  description: string;
  benefitsTitle: string;
  benefits: string[];
}

export default function ServicesList({ services }: { services?: Service[] }) {
  let officialTitleSplit = (service: Service) => {
    const officialTitleArr = service.officialTitle.split(":");
    return officialTitleArr;
  };
  return (
    <section className="p-6 xl:flex xl:flex-col xl:items-center xl:px-20">
      <ul className="xl:flex xl:flex-row xl:flex-wrap xl:gap-6">
        {services &&
          services.map((service) => (
            <li key={service._id} className="pr-2 pt-4 xl:w-96 xl:pr-0">
              <h3 className="text-xl font-medium uppercase text-cordovan">
                {service.title}
              </h3>
              <p className="leading-tight text-gunmetal xl:w-80">
                <span className="font-medium">
                  {officialTitleSplit(service)[0]}
                </span>
                <span className="text-sm">
                  {officialTitleSplit(service)[1]}
                </span>
              </p>
              <Link
                href={`/services/${service._id}`}
                className="font-serif text-sm text-cambridge-blue"
              >
                click here to learn more!
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
