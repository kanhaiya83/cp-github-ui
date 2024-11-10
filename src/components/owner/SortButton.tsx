import Link from "next/link";
import React from "react";

const SortButton: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 shrink items-end self-stretch pl-96 my-auto basis-0 min-w-[180px] max-md:max-w-full">
      <div className="flex max-w-full w-[181px]">
        <div className="flex flex-col w-[181px]">
          <Link
            href={"/new-space"}
            className="flex justify-center items-center px-3.5 py-1.5 w-full rounded-lg border border border-solid"
          >
            <span className="self-stretch my-auto text-sm leading-none text-center text-white py-2">
              Create New Space
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SortButton;
