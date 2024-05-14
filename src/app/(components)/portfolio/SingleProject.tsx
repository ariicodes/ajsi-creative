import Image from "next/image";
import Link from "next/link";
import { Project } from "./ProjectLink";

const SingleProject = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col xl:w-screen xl:flex-row xl:items-center">
      <div className="my-8 flex flex-row items-center xl:my-14">
        <div className="relative h-[320px] w-[320px] xl:h-[553px] xl:w-[553px]">
          <Image
            src={project.mainImg}
            alt={project.clientName}
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="relative -ml-8 h-[238px] w-[140px] overflow-hidden shadow-xl xl:h-[413px] xl:w-[243px]">
          <Image
            src={project.secondaryImg}
            alt={project.clientName}
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between bg-cambridge-blue/50 px-6 py-8 text-gunmetal xl:h-min xl:w-full">
        <div>
          <h3 className="text-2xl font-medium xl:text-4xl">
            Services Rendered:
          </h3>
          <ul className="mb-4 font-light xl:text-2xl">
            {project.servicesRendered.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          {project.liveLink && (
            <Link
              href={`${project.liveLink}`}
              className="text-sm font-normal text-cordovan underline"
            >
              view live project here
            </Link>
          )}
        </div>
        <div className="relative h-[150px] w-[150px] xl:h-[273px] xl:w-[273px]">
          <Image
            src={project.logo}
            alt={project.clientName}
            fill={true}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
