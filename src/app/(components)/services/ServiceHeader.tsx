import Image from "next/image";
import { Service, officialTitleSplit } from "./ServicesList";

export default function ServiceHeader({ service }: { service: Service }) {
  return (
    <section className="relative h-[260px]">
      <Image
        src={service.imageSrc}
        alt="Service Header"
        fill={true}
        className="object-cover"
      />
      <div className="absolute inset-0 z-10 flex h-full flex-col justify-end bg-gradient-to-b from-gunmetal/50 from-25% via-gunmetal/80 via-50% to-gunmetal to-75% px-6 py-5 xl:px-80">
        <div>
          <h1 className="mb-2 text-xs font-medium uppercase text-brown-sugar xl:text-base">
            {service.title}
          </h1>
          <h2 className="font-serif text-2xl font-medium leading-[22px] text-white xl:text-4xl">
            {officialTitleSplit(service)[0]}
          </h2>
          <h3 className="text-sm font-light text-white xl:text-lg">
            {officialTitleSplit(service)[1]}
          </h3>
        </div>
      </div>
    </section>
  );
}
