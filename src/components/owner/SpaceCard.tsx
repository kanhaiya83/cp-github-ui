import React from "react";
import { Project } from "@/types/project";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { Space } from "@/types/Space";
import { formatDistanceToNow } from "date-fns";
import { generateAvatar } from "@/utils/avatar";
import Image from "next/image";

const SpaceCard = ({
  space,
  index,
  link
}: {
  space: Space;
  index: number;
  link: string;
}) => {
  return (
    <Link href={link}>
      <div className="h-full flex flex-col card-hover-effect">
              <div key={space.id} className="relative p-4 overflow-hidden flex-1">
                {/* Top-left Half Border */}
                {/* <div className="absolute top-0 left-0 h-1/2 w-1/2 border-t border-l border-[#62626A] pointer-events-none rounded-l"></div> */}

                {/* Bottom-right Half Border */}
                {/* <div className="absolute bottom-0 right-0 h-1/2 w-1/2 border-b border-r border-[#62626A] pointer-events-none rounded-r"></div> */}

                {/* Card Content */}
                <div className="relative ">
                  <div className="flex justify-between items-center">
                    <span className="text-sm border py-0.5 px-4 rounded">
                      {space.status}
                    </span>
                    <div className="flex gap-1 items-center">
                    {/* <FiHeart className="h-5 w-5" /> */}
                    <span className="text-gray-400 text-sm"> {space.likes}</span>
                    </div>
                    
                  </div>
                  <Image className=" rounded-lg w-[27%] mx-auto my-4 text-center" width={100} height={100} src={generateAvatar(space._id)} alt=""/>
                  <h3 className=" text-center"><span className="text-sm font-thin text-gray-400">{space.user.username}</span> / <span className="font-bold text-lg">{space.name}</span> </h3>
                </div>
              </div>

              <div className="flex justify-end items-center text-sm">
                {/* <div className="flex gap-2">
                  <img src="/asset/Ellipse.svg" alt="" />
                  <h3>{space.user.username}</h3>
                </div> */}
                 <p className="text-gray-400 mt-2 text-sm">created {formatDistanceToNow(space.created_at)} ago</p>
              </div>
            </div>



            
      {/* <div className="flex flex-col grow items-center min-h-[176px] max-md:mt-5 max-md:max-w-full">
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
      </div> */}
    </Link>
  );
};

export default SpaceCard;
