import React from "react";

const DatasetLicense: React.FC = () => {
  return (
    <div className="flex gap-2.5 mt-1.5 text-sm whitespace-nowrap">
      <span className="grow my-auto leading-none text-gray-200">License:</span>
      <div className="flex overflow-hidden gap-2.5 px-2.5 py-2 leading-none text-center text-white bg-gray-600 border border-solid border-gray-700 border-opacity-70 rounded-[9999px_9999px_0px_9999px] shadow-[0px_4px_4px_rgba(0,0,0,0.008)]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4011974026d80e4249e798e85b65ddb41f8d673a07057fc697429aa0b0315ba?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          alt=""
          className="object-contain shrink-0 w-3 aspect-square"
        />
        <span>unknown</span>
      </div>
    </div>
  );
};

export default DatasetLicense;
