import React from "react";
import ProjectCard from "@/components/ProjectList/ProjectCard";
import { Project } from "@/types/project";

const ModelList = ({
  models,
  rootPath,
}: {
  models: Project[];
  rootPath: string;
}) => {
  return (
    <main className="flex flex-col mt-10 px-20">
      <header className="flex flex-wrap gap-3 items-center w-full max-md:max-w-full">
        <div className="flex items-center self-stretch my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/03e6c7a66db04ff5d6a8e8549a3941d58f49be8b3a728977a4a659a84d0204bf?placeholderIfAbsent=true&apiKey=caf73ded90744adfa0fe2d98abed61c0"
            alt=""
            className="w-[18px] h-[18px] mr-2"
          />
          <h1 className="text-lg font-semibold leading-loose text-white">
            models
          </h1>
          <span className="pl-3 text-lg leading-loose text-gray-200">
            {models?.length}
          </span>
        </div>
      </header>
      <section className="flex flex-col mt-4 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-5">
          {models.map((model) => (
            <ProjectCard
              key={model.id}
              link={`/${rootPath}/${model.path_with_namespace}`}
              project={model}
            />
          ))}
        </div>
      </section>
      {/* <ExpandButton count={models.length} /> */}
    </main>
  );
};

export default ModelList;
