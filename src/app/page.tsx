import Link from "next/link";
import { Project } from "@/types/project";
export default async function Home() {
  const projects: Project[] = await fetch(
    "https://git.clusterprotocol.ai/api/v4/projects"
  ).then((res) => res.json());

  return (
    <div className="flex flex-col gap-4 p-4">
      {projects.map((project) => (
        <Link href={`/${project.path_with_namespace}`} key={project.id}>
          {project.name}
        </Link>
      ))}
    </div>
  );
}
