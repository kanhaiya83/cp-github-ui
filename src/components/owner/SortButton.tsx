import React from "react";

const SortButton: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 shrink items-end self-stretch pl-96 my-auto basis-0 min-w-[180px] max-md:max-w-full">
      <div className="flex max-w-full w-[181px]">
        <div className="flex flex-col w-[181px]">
          <button className="flex justify-center items-center px-3.5 py-1.5 w-full rounded-lg border border border-solid">
            <div className="flex flex-col items-start self-stretch pr-1 my-auto min-h-[14px] w-[18px]">
              <div className="flex overflow-hidden flex-col justify-center items-center w-3.5 min-h-[14px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/655a025e0eb21164dfd8cadcb3fe5db4c984799d4992d959f0b89658ab0e42d0?placeholderIfAbsent=true&apiKey=caf73ded90744adfa0fe2d98abed61c0"
                  alt=""
                  className="object-contain flex-1 w-full aspect-square"
                />
              </div>
            </div>
            <span className="self-stretch my-auto text-sm leading-none text-center text-gray-800">
              Sort: Recently updated
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortButton;
