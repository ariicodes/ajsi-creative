import Heading from "../(components)/Heading";
import SubscriptionForm from "../(components)/SubscriptionForm";
import MainCTA from "../(components)/MainCTA";
// import ProjectsList from "../(components)/portfolio/ProjectsList";
import dotenv from "dotenv";
import ComingSoon from "../(components)/ComingSoon";
dotenv.config();

// const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
export default function Portfolio() {
  // const getProjects = async () => {
  //   try {
  //     const res = await fetch(`${url}/projects`, {
  //       cache: "no-cache",
  //     });
  //     return res.json();
  //   } catch (error: any) {
  //     console.log(`Failed to load projects: ${error.message}
  //   `);
  //   }
  // };

  // const projects = await getProjects();

  return (
    <div>
      <Heading header="Portfolio" />
      {/* <ProjectsList projects={projects} /> */}
      <ComingSoon />
      <SubscriptionForm />
      <MainCTA />
    </div>
  );
}
