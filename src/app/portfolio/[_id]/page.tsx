import { Project } from "../../(components)/portfolio/ProjectLink";
import dotenv from "dotenv";
import Heading from "../../(components)/Heading";
import SubscriptionForm from "../../(components)/SubscriptionForm";
import MainCTA from "../../(components)/MainCTA";
import SingleProject from "../../(components)/portfolio/SingleProject";
dotenv.config();

const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
export default async function ProjectPage({
  params,
}: {
  params: { _id: string };
}) {
  const getProject = async () => {
    try {
      const res = await fetch(`${url}/projects/${params._id}`, {
        cache: "no-cache",
      });
      return res.json();
    } catch (error: any) {
      console.log(`Failed to load project: ${error.message}
    `);
    }
  };

  const project: Project = await getProject();

  return (
    <div>
      <Heading header={project.clientName} />
      <SingleProject project={project} />
      <SubscriptionForm />
      <MainCTA />
    </div>
  );
}
