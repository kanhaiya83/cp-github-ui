import React from "react";
import ProjectList from "@/components/ProjectList";
import axios from "axios";

const Page = async () => {
 
    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL+"/datasets/public")
    const data = await res.json()
  return <ProjectList rootPath="datasets" projectList={data}/>;
};

export default Page;
