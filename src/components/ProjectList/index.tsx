"use client";
import FilterProject from "@/components/ProjectList/FilterProject";
import ProjectCard from "@/components/ProjectList/ProjectCard";
import SearchProject from "@/components/ProjectList/SearchProject";
import { Dataset } from "@/types/Dataset";
import { Model } from "@/types/Model";
import { Project } from "@/types/project";
import axios from "axios";
import { useEffect, useState } from "react";

const ProjectList = ({ rootPath , projectList }: { rootPath: string , projectList:(Model | Dataset)[] }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div>
      <div className="py-10 px-10">
        {rootPath == "datasets" && <FilterProject />}
        <SearchProject setSearchQuery={setSearchQuery} projects={projectList}/>
        <div className="mb-4 p-4">
          <div className="grid grid-cols-4 gap-x-[3%] gap-y-10">
            {projectList.filter(d=>d.repository.path_with_namespace.includes(searchQuery)).map((item, index) => (
              <ProjectCard
                key={index}
                project={item}
                link={`/${rootPath}/${item.repository.path_with_namespace}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
