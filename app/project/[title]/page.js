import ProjectDetailsClient from "./ProjectDetailsClient";
import projects from "@/data/projectData";


export default async function ProjectDetail({ params }) {
    const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with single dash
    .replace(/^-+|-+$/g, ""); // remove leading/trailing dashes

  const { title } = await params;

const selectedProject = projects.find(
  (p) => slugify(p.title) === title
);

  return (
    <ProjectDetailsClient
      selectedProject={selectedProject}
    />
  );

  
  
}
