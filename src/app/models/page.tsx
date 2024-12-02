import React from "react";
import ProjectList from "@/components/ProjectList";
import axios from "axios";

const Page = async () => {

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_GIT_REPO_URL}/groups/datasets/projects/shared`
  );
  return <ProjectList rootPath="models" projectList={res.data}/>;
};

export default Page;
