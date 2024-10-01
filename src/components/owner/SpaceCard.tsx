import React from "react";
import { Project } from "@/types/project";
import Link from "next/link";

interface Space {
  id: number;
  icon: string;
  title: string;
  status: string;
  isPinned: boolean;
  memberCount: number;
  backgroundColor?: string;
}

const SpaceCard = ({
  dataset,
  space,
  index,
  link,
}: {
  dataset: Project;
  space: Space;
  index: number;
  link: string;
}) => {
  const isEven = index % 2 === 0;
  const columnClass = isEven ? "w-6/12" : "ml-5 w-6/12";

  return (
    <Link href={link} className={`flex flex-col w-[45%] max-md:ml-0`}>
      <div className="flex flex-col grow items-center min-h-[176px] max-md:mt-5 max-md:max-w-full">
        <div
          className={`flex overflow-hidden relative flex-col justify-center items-start px-32 py-20 w-full rounded-xl max-w-[513px] min-h-[176px] ${
            space.backgroundColor || ""
          } max-md:px-5 max-md:max-w-full`}
        >
          <div className="flex overflow-hidden absolute top-3 left-3 z-0 flex-wrap gap-1 items-start pr-72 right-[62px] max-md:pr-5 max-md:max-w-full">
            {space.isPinned && (
              <div className="flex items-center px-1.5 py-px h-full rounded border border-solid bg-white bg-opacity-10 border-white border-opacity-10">
                <div className="flex flex-col items-start self-stretch pr-1 my-auto w-4 min-h-[12px]">
                  <div className="flex overflow-hidden flex-col justify-center w-3 min-h-[12px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5aea630a9a85d9a24997cd901f9452f8dd7c316663dfa48a060f002d57d3aeb9?placeholderIfAbsent=true&apiKey=caf73ded90744adfa0fe2d98abed61c0"
                      alt=""
                      className="object-contain flex-1 w-full aspect-square"
                    />
                  </div>
                </div>
                <div className="self-stretch my-auto text-xs leading-none text-white">
                  pinned
                </div>
              </div>
            )}
            <div className="flex overflow-hidden items-center p-px h-full text-xs leading-none text-white whitespace-nowrap rounded border border-solid bg-white bg-opacity-10 border-white border-opacity-10">
              <div className="self-stretch px-1 my-auto">{space.status}</div>
            </div>
          </div>
          <div className="flex absolute top-2.5 right-4 z-0 items-center rounded-xl">
            <div className="flex flex-col items-start self-stretch pr-1.5 my-auto w-5 min-h-[14px]">
              <div className="flex overflow-hidden flex-col justify-center w-3.5 min-h-[14px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/74716bd61410f256cdfabd68f6786dd82e87de9caf9ee1e6be96b1eab423ee91?placeholderIfAbsent=true&apiKey=caf73ded90744adfa0fe2d98abed61c0"
                  alt=""
                  className="object-contain flex-1 w-full aspect-square"
                />
              </div>
            </div>
            <div className="self-stretch my-auto text-sm leading-none text-white whitespace-nowrap">
              {space.memberCount}
            </div>
          </div>
          <div className="absolute top-12 z-0 w-5 text-7xl leading-none text-black h-[72px] right-[246px] max-md:text-4xl">
            {space.icon}
          </div>
          <h3 className="overflow-hidden self-center text-2xl font-bold leading-none text-center text-blue-50">
            {dataset.name_with_namespace}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default SpaceCard;
