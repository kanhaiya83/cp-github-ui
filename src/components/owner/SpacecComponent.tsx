"use client";

import { Project } from "@/types/project";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SpaceCard from "./SpaceCard";
import SortButton from "./SortButton";

interface Space {
  id: number;
  icon: string;
  title: string;
  status: string;
  isPinned: boolean;
  memberCount: number;
  backgroundColor?: string;
}

const SpacesComponent: React.FC = () => {
  const [datasetsList, setDataSetList] = useState<Project[]>([]);
  // const spaces: Space[] =

  const [spaces, setSpaces] = useState<Space[]>([
    {
      id: 1,
      // icon: "🧬",
      icon: "",
      title: "Synthetic Data Generator",
      status: "Running",
      isPinned: true,
      memberCount: 113,
      backgroundColor: "bg-orange-600",
    },
    {
      id: 2,
      // icon: "️⚗",
      icon: "",
      title: "distilabel - ArgillaLabeller",
      status: "Running",
      isPinned: true,
      memberCount: 2,
      backgroundColor: "bg-indigo-600",
    },
    {
      id: 3,
      // icon: "💨",
      icon: "",
      title: "Notus Chat",
      status: "Paused",
      isPinned: true,
      memberCount: 98,
      backgroundColor: "bg-pink-600",
    },
    {
      id: 4,
      // icon: "✍✍✍",
      icon: "",
      title: "How Good Is Mmmlu For My Language",
      status: "Running",
      isPinned: false,
      memberCount: 4,
      backgroundColor: "bg-pink-600",
    },
    {
      id: 5,
      // icon: "🦀",
      icon: "",
      title: "Argilla Webhooks Native",
      status: "Running",
      isPinned: false,
      memberCount: 1,
      backgroundColor: "bg-pink-600",
    },
    {
      id: 6,
      // icon: "🐠",
      icon: "",
      title: "Argilla Webhooks",
      status: "Sleeping",
      isPinned: false,
      memberCount: 2,
      backgroundColor: "bg-indigo-600",
    },
  ]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_GIT_REPO_URL}/projects`
        );
        setDataSetList(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <section className="flex flex-col mb-10 px-20">
      <header className="flex flex-wrap gap-3 items-center py-8 w-full max-md:max-w-full">
        <div className="flex items-center self-stretch my-auto">
          <div className="flex flex-col items-start self-stretch pr-2 my-auto min-h-[18px] w-[26px]">
            <div className="flex overflow-hidden flex-col justify-center min-h-[18px] w-[18px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d97a81970ad8630d277dd3c1fd49a607e1cad86caf42872cb36ba52530a375c2?placeholderIfAbsent=true&apiKey=caf73ded90744adfa0fe2d98abed61c0"
                alt=""
                className="object-contain flex-1 w-full aspect-square"
              />
            </div>
          </div>
          <h2 className="self-stretch my-auto text-lg font-semibold leading-loose text-white whitespace-nowrap">
            spaces
          </h2>
          <span className="self-stretch pl-3 my-auto w-10 text-lg leading-loose text-gray-400 whitespace-nowrap">
            20
          </span>
        </div>
        <div className="flex flex-col self-stretch pl-1 my-auto min-w-[240px] w-[324px]">
          <div className="flex relative items-start w-80 max-w-full">
            <div className="flex  justify-between items-center">
              <input
                className="px-7 py-3.5 mt-1.5 text-sm font-semibold bg-gray-900 leading-none rounded-md text-neutral-400 max-md:px-5 max-md:max-w-full"
                placeholder="search"
              />
            </div>
          </div>
          <div></div>
        </div>
        <SortButton />
      </header>
      <main className="flex flex-col mt-4 w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="flex gap-5 flex-wrap w-full">
              {datasetsList.map((dataset, index) => (
                <SpaceCard
                  key={dataset.id}
                  dataset={dataset}
                  link={`/spaces/${dataset.path_with_namespace}`}
                  space={spaces[index % spaces.length]}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      {/* <ExpandButton /> */}
    </section>
  );
};

export default SpacesComponent;
