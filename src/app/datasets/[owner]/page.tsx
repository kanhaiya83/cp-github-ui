import React from "react";
import OwnerPage from "@/components/owner";

const page = ({ params: { owner } }: { params: { owner: string } }) => {
  return <OwnerPage params={{ owner }} rootPath={"dataset"} />;
};

export default page;
