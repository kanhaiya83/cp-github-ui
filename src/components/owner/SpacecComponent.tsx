"use client";

import { Project } from "@/types/project";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SpaceCard from "./SpaceCard";
import SortButton from "./SortButton";
import { Space } from "@/types/Space";


const SpacesComponent = (
  {
    data
  }:
  {
    data: Space[]
  }
) => {
  const [datasetsList, setDataSetList] = useState<Project[]>([]);
  // const spaces: Space[] =

  const [spaces, setSpaces] = useState<any[]>([
    {
      id: 1,
      icon: "🧬",
      title: "Synthetic Data Generator",
      status: "Running",
      isPinned: true,
      likes: 113,
      last_updated:new Date(),
    },
    {
      id: 2,
      icon: "️⚗",
      title: "distilabel - ArgillaLabeller",
      status: "Running",
      isPinned: true,
      likes: 2,
      last_updated:new Date(),
    },
    {
      id: 3,
      icon: "💨",
      title: "Notus Chat",
      status: "Paused",
      isPinned: true,
      likes: 98,
      last_updated:new Date(),
    },
    {
      id: 4,
      icon: "✍✍✍",
      title: "How Good Is Mmmlu For My Language",
      status: "Running",
      isPinned: false,
      likes: 4,
      last_updated:new Date(),
    },
    {
      id: 5,
      icon: "🦀",
      title: "Argilla Webhooks Native",
      status: "Running",
      isPinned: false,
      likes: 1,
      last_updated:new Date(),
    },
    {
      id: 6,
      icon: "🐠",
      title: "Argilla Webhooks",
      status: "Sleeping",
      isPinned: false,
      likes: 2,
      last_updated:new Date(),
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
        {/* Search Bar */}
        {/* <div className="flex items-center justify-between my-4">
          <input
            type="text"
            placeholder="Search spaces..."
            className=" bg-[#0A090F] border border-[#292830] px-4 py-2 rounded focus:outline-none"
          />
          <div className="flex gap-5 items-center text-[#999999]">
            <p>Browse & ZeroGPU Spaces</p>
            <button className="bg-[#28272D] border border-[#464549] text-[#999999] px-4 py-2 rounded">
              Filter
            </button>
             <input
            type="text"
            placeholder="Full-text search"
            className=" bg-[#28272D] border border-[#464549] px-4 py-2 rounded focus:outline-none"
          />


            <button className="bg-[#28272D] border border-[#464549] text-[#999999] px-4 py-2 rounded flex items-center gap-3">
              <img src="/icons/arrow.svg" alt="" />
              Sort: Trending
            </button>
          </div>
        </div> */}
      <main className="flex flex-col mt-4 w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
              {data.map((spaceData, index) => (
                <SpaceCard
                  key={spaceData.id}
                  link={`/spaces/${spaceData.path_with_namespace}`}
                  space={spaceData}
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
