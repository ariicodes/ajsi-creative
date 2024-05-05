interface Package {
  _id: number;
  name: string;
  services: string[];
  startingPrice: number;
}

export default function ServicesList({ services }: { services?: Package[] }) {
  return (
    <ul className="min-h-[460px] pb-6 pt-2">
      {services &&
        services.map((service) => (
          <li key={service._id} className="pt-4">
            <div className="px-6 pb-2">
              <h2 className="text-xl font-semibold uppercase text-cordovan">
                {service.name}
              </h2>
              <ul>
                {service.services.map((subService, index) => (
                  <li key={index} className="-mt-1">
                    {subService}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex h-[30px] flex-row items-center justify-center bg-cambridge-blue font-serif text-sm text-white">
              <p>starting @ ${service.startingPrice}</p>
            </div>
          </li>
        ))}
    </ul>
  );
}
