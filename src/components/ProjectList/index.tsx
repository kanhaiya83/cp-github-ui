"use client";
import FilterProject from "@/components/ProjectList/FilterProject";
import ProjectCard from "@/components/ProjectList/ProjectCard";
import SearchProject from "@/components/ProjectList/SearchProject";
import { Project } from "@/types/project";
import axios from "axios";
import { useEffect, useState } from "react";

const ProjectList = ({ rootPath }: { rootPath: string }) => {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_GIT_REPO_URL}/groups/${rootPath}s/projects/shared`
        );
        setProjectList(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <div className="py-10 px-10">
        {rootPath == "dataset" && <FilterProject />}
        <SearchProject setSearchQuery={setSearchQuery} projects={projectList}/>
        <div className="mb-4 p-4">
          <div className="grid grid-cols-4 gap-x-[3%] gap-y-10">
            {projectList.filter(d=>d.name_with_namespace.includes(searchQuery)).map((item, index) => (
              <ProjectCard
                key={index}
                project={item}
                link={`/${rootPath}/${item.path_with_namespace}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
