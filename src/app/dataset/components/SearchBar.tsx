import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-auto gap-2 p-2.5 text-base text-white bg-gray-600 rounded-lg border border-solid">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/07a13f45e609117e8137e9437c9abd4804126a240cb913283bf45839dd47ff2f?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
        alt=""
        className="object-contain shrink-0 self-start w-4 aspect-square"
      />
      <input
        type="text"
        placeholder="Search models, datasets, users..."
        className="flex-auto max-w-36 bg-gray-600 border-none focus:outline-none"
        aria-label="Search models, datasets, users"
      />
    </div>
  );
};

export default SearchBar;
