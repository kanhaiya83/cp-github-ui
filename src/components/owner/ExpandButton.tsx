import React from "react";

const ExpandButton: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center mt-4 w-full text-base text-center text-gray-800 max-md:max-w-full">
      <div className="flex flex-1 shrink self-stretch my-auto h-px basis-4 min-w-[240px] w-[437px]" />
      <div className="flex flex-col self-stretch px-2 my-auto min-h-[32px]">
        <button className="flex items-center px-2.5 py-1 rounded-lg min-h-[32px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f88b80f67a69db3018a7f9be011224c6c68bb44435b808abac0bb01089914c81?placeholderIfAbsent=true&apiKey=caf73ded90744adfa0fe2d98abed61c0"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[2]"
          />
          <span className="self-stretch my-auto">Expand 20 spaces</span>
        </button>
      </div>
      <div className="flex flex-1 shrink self-stretch my-auto h-px basis-4 min-w-[240px] w-[436px]" />
    </div>
  );
};

export default ExpandButton;
