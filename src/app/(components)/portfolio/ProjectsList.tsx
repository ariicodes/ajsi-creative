import { Project } from "./ProjectLink";
import ProjectLink from "./ProjectLink";

const ProjectsList = ({ projects }: { projects: Project[] }) => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectLink key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
