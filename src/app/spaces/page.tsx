import React from "react";
import ProjectList from "@/components/ProjectList";
import SpaceComponent from "@/components/owner/SpacecComponent";
import Header from "@/components/Header";
import { publicRequest } from "@/config/request";

const page = async () => {
  const publicSpacesReq = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/spaces/public",{cache:"no-store"})
  const publicSpacesResponse = await publicSpacesReq.json()
  const publicSpaces = publicSpacesResponse.data
  return <SpaceComponent data={publicSpaces}/>
};
export default page;
