"use client";

import { Project } from "@/types/project";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SpaceCard from "./SpaceCard";
import SortButton from "./SortButton";
import { Space } from "@/types/Space";
import { useQueries, useQuery } from "@tanstack/react-query";
import { authenticatedRequest } from "@/config/request";
import Spinner from "../Spinner";


const SpacesComponent = (
  {
    data
  }:
  {
    data: Space[]
  }
) => {

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
  const userSpacesQuery = useQuery({queryKey:["mySpaces"],queryFn:async()=>{
    const spacesResp = await authenticatedRequest.get("/spaces")
    const data:Space[]= spacesResp.data
    return data
  }})
  return (
    <section className="flex flex-col mb-10 px-[5%] py-10">
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
        <div className="w-full max-md:max-w-full">
          <h2 className="mb-3 font-semibold">My Agents</h2>
            {
              userSpacesQuery.isLoading ? <div className="flex justify-center items-center text-center py-8">
                <Spinner/>
              </div>:<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[2%] gap-y-8 w-full">
              {userSpacesQuery.data ? userSpacesQuery.data.filter(space=>space.visibility=="private").map((spaceData, index) => (
                <SpaceCard
                
                  key={spaceData.id}
                  link={`/spaces/${spaceData.path_with_namespace}`}
                  space={spaceData}
                  index={index}
                />
              )) : <><span>No agents found</span></> }
            </div>
            }
          </div>
          <div className="flex h-[1px] bg-gray-800 my-6"></div>
          <div className="w-full max-md:max-w-full">
          <h2 className="mb-3 font-semibold">Public Agents</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[2%] gap-y-8 w-full">
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
      {/* <ExpandButton /> */}
    </section>
  );
};

export default SpacesComponent;
