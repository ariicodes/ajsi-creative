import Link from "next/link";
import Image from "next/image";

export interface Project {
  _id: string;
  clientName: string;
  mainImg: string;
  secondaryImg: string;
  servicesRendered: string[];
  logo: string;
  liveLink?: string;
}

const ProjectLink = ({ project }: { project: Project }) => {
  return (
    <Link href={`/portfolio/${project._id}`}>
      <div className="relative mt-8 flex h-40 flex-col items-center justify-center overflow-hidden bg-cambridge-blue text-3xl hover:text-4xl xl:h-96">
        <h2 className="z-20 uppercase text-white">{project.clientName}</h2>
        <Image
          src={project.mainImg}
          alt={project.clientName}
          fill={true}
          className="z-10 object-cover opacity-15"
        />
      </div>
    </Link>
  );
};

export default ProjectLink;
