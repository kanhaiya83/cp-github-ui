"use client";
import ProjectCard from "@/components/ProjectList/ProjectCard";
import { Project } from "@/types/project";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/app/utils/axios";
import FilterProject from "@/components/ProjectList/FilterProject";
import SearchProject from "@/components/ProjectList/SearchProject";
import axios from "axios";

const ProjectList = ({ rootPath }: { rootPath: string }) => {
  const [datasetsList, setDataSetList] = useState<Project[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_GIT_REPO_URL}/projects`
        );
        setDataSetList(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <div className="py-10 px-10">
        <FilterProject />
        <SearchProject projects={datasetsList} />
        <div className="mb-4 p-4">
          <div className="grid grid-cols-4 gap-4">
            {datasetsList.map((item, index) => (
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
