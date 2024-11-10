import React from "react";

const FromHeader = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <span className="h-12 w-12">{icon}</span>
        <span className="text-2xl">{title}</span>
      </div>
      <p className=" text-center mt-2">{description}</p>
    </div>
  );
};

export default FromHeader;
