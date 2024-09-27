import React from "react";
import Header from "./Header";
import DatasetInfo from "./DatasetInfo";
import DatasetTags from "./DatasetTags";
import DatasetNavigation from "./DatasetNavigation";

const HuggingFaceDataset = ({
  pathname,
  children,
}: {
  pathname: string;
  children: React.ReactNode;
}) => {
  return (
    <main className="flex flex-col">
      <Header />
      <section className="flex flex-col items-center px-20 pt-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-start w-full max-w-[1400px] max-md:max-w-full">
          <DatasetInfo />
          <DatasetTags />
          <DatasetNavigation pathname={pathname} />
        </div>
        {children}
      </section>
    </main>
  );
};

export default HuggingFaceDataset;
