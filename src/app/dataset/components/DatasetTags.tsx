import React from "react";

interface Tag {
  label: string;
  value: string;
  icon?: string;
}

const tags: Tag[] = [
  {
    label: "Tasks:",
    value: "Text Classification",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c1572bd1170d2d9df0156ed5559992f9780e2eb219169855e767dabdf7ff301?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
  },
  { label: "Modalities:", value: "" },
  {
    label: "Formats:",
    value: "parquet",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1efef41ef36e60f108ffcf08d7187ee7cf8ba1ee52d2d42958c48f90a08ce7f8?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
  },
  { label: "Sub-tasks:", value: "intent-classification" },
  {
    label: "Languages:",
    value: "English",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f8c02ff70f57088f0d69bf3fa6616799511b8e4ef1a6f56bb15e2b877b100be?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
  },
  { label: "Size:", value: "1K - 10K" },
  {
    label: "Libraries:",
    value: "Datasets",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c55a85bb52db7b353938d55ba2f3863a091d0e9d6ff3225693a7c07157209fcb?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
  },
  {
    label: "pandas:",
    value: "pandas",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10d27ff5368f1d24023501f15983eef08854525130e86324aca2a2cabbdba880?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
  },
  {
    label: "Croissant:",
    value: "Croissant +1",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ba398c5ef366ad076cf17a2d23156a6bd50c1348cc96c53085bc4a06ebe3989?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
  },
  {
    label: "License:",
    value: "unknown",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4011974026d80e4249e798e85b65ddb41f8d673a07057fc697429aa0b0315ba?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
  },
];

const DatasetTags: React.FC = () => {
  return (
    <div className="flex w-full flex-wrap gap-2 self-stretch mt-3.5 text-sm leading-none text-gray-400">
      {tags.map((tag, index) => (
        <div key={index} className="flex justify-center gap-2 items-center">
          <span className="my-auto leading-none">{tag.label}</span>
          <div className="flex items-center justify-center gap-2 px-2.5 py-2 text-white whitespace-nowrap bg-gray-600 rounded-lg border border-solid border-gray-700 border-opacity-70 shadow-[0px_4px_4px_rgba(0,0,0,0.008)]">
            {tag.icon && (
              <img
                loading="lazy"
                src={tag.icon}
                alt=""
                className="object-contain shrink-0 self-start w-3.5 aspect-square"
              />
            )}
            <span>{tag.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DatasetTags;
