"use client";
import React, { useState, useEffect } from "react";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa6";
import TimeAgo from "@/components/TimeAgo";
import getFileIcon from "@/app/utils/fileTypeIcon";
import { FileStructure } from "@/app/types/type";
import Link from "next/link";

const FolderStructure = ({
  treeStructure,
  branch,
}: {
  treeStructure: FileStructure[];
  branch: string;
}) => {
  return (
    <div>
      {treeStructure.map((data) => (
        <div className="flex items-center gap-4 py-2 px-4 border-b border-zinc-800">
          <Link
            href={`/tree/${branch}/${data.path}`}
            className="flex items-center gap-2 w-1/4 min-w-0"
          >
            {data.type === "tree" ? (
              <FaFolder className="w-5 h-5 flex-shrink-0" />
            ) : (
              <>{getFileIcon(data.name, "w-5 h-5 flex-shrink-0")}</>
            )}
            <div className="truncate">{data.name}</div>
          </Link>
          <div className="w-1/4 truncate">{"ui fix"}</div>
          <div className="w-1/4 truncate">{"shiva@gmail.com"}</div>
          <div className="w-1/4 text-sn truncate flex justify-end">
            <TimeAgo date={new Date()} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FolderStructure;
