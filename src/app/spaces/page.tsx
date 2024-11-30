import React from "react";
import ProjectList from "@/components/ProjectList";
import SpaceComponent from "@/components/owner/SpacecComponent";
import Header from "@/components/Header";
import { publicRequest } from "@/config/request";

const page = async () => {
  const publicSpacesResponse = await publicRequest.get("/spaces/public")
  const publicSpaces = publicSpacesResponse.data.data
  return <div>
    <Header />
    <SpaceComponent data={publicSpaces}/>

  </div>;
};

export default page;
