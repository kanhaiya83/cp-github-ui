"use client";
import React, { useState } from "react";
import { modalities, formats } from "@/app/utils/card";
const FilterProject = () => {
  const [minValue, setMinValue] = useState(20);
  const [maxValue, setMaxValue] = useState(80);
  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (value <= maxValue) {
      setMinValue(value);
    }
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (value >= minValue) {
      setMaxValue(value);
    }
  };
  return (
    <div>
      <div className="flex justify-between border-b-2 border-solid mb-4 border-zinc-900 gap-2">
        <div className="md:w-1/3 px-4 py-4">
          <section className="flex border-r-2 border-solid bg-zinc-950 border-zinc-900 flex-col grow shrink-0 items-start mt-5 basis-0 w-fit">
            <header className="flex gap-5 justify-between w-full max-w-[361px]">
              <h2 className="my-auto text-lg font-medium text-white">
                Modalities
              </h2>
              <button className="flex gap-1 px-3 py-1.5 text-sm leading-none rounded-md border border-solid bg-zinc-950 border-zinc-700 text-neutral-400">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/55724ebaa22ba79ac2bdeeb855b6a9cbb539621d755b04256d5a91788bc9e8e2?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                  alt=""
                  className="object-contain shrink-0 my-auto w-2.5 aspect-[0.83]"
                />
                <span>Reset Modalities</span>
              </button>
            </header>
            <div className="flex flex-wrap gap-2.5 items-start self-stretch mt-6">
              {modalities.map((modality, index) => (
                <div
                  key={index}
                  className="flex gap-1.5 px-3 py-1.5 rounded-md border border-solid bg-zinc-800 border-zinc-700 text-sm leading-none text-neutral-400"
                >
                  <img
                    loading="lazy"
                    src={modality.icon}
                    alt=""
                    className="object-contain shrink-0 my-auto w-3 aspect-square"
                  />
                  <div>{modality.label}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="md:w-1/3 px-4 py-4">
          <section className="flex flex-col rounded-none border-r-2 px-4 border-solid bg-zinc-950 border-zinc-900 mt-5 ">
            <header className="flex gap-5 justify-between items-start w-full">
              <h2 className="text-lg font-medium text-white">Size Rows</h2>
              <button className="flex gap-1 px-3 py-1.5 text-sm leading-none rounded-md border border-solid bg-zinc-950 border-zinc-700 text-neutral-400">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/55724ebaa22ba79ac2bdeeb855b6a9cbb539621d755b04256d5a91788bc9e8e2?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                  className="object-contain shrink-0 my-auto w-2.5 aspect-[0.83]"
                  alt=""
                />
                <span>Reset Size</span>
              </button>
              <div className="flex flex-col items-center justify-center mt-4">
                <div className="w-64">
                  <div className="flex justify-between mb-2">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={minValue}
                      onChange={handleMinChange}
                      className="w-20 p-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={maxValue}
                      onChange={handleMaxChange}
                      className="w-20 p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max={maxValue}
                      value={minValue}
                      onChange={handleMinChange}
                      className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
                      style={{ zIndex: minValue === maxValue ? 4 : 2 }}
                    />
                    <input
                      type="range"
                      min={minValue}
                      max="100"
                      value={maxValue}
                      onChange={handleMaxChange}
                      className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
                      style={{ zIndex: 3 }}
                    />
                    <div
                      className="absolute h-2 bg-gray-300 rounded-lg"
                      style={{ width: "100%" }}
                    />
                    <div
                      className="absolute h-2 bg-blue-500 rounded-lg"
                      style={{
                        left: `${minValue}%`,
                        width: `${maxValue - minValue}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </header>
            <div className="flex flex-wrap gap-2.5 mt-4"></div>
          </section>
        </div>
        <div className="md:w-1/3 px-4 py-4">
          <section className="flex flex-col rounded-none mt-5">
            <header className="flex gap-5 justify-between w-full">
              <h2 className="text-lg font-medium text-white">Format</h2>
              <button className="flex gap-1 px-3 py-1.5 text-sm leading-none rounded-md border border-solid bg-zinc-950 border-zinc-700 text-neutral-400">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/55724ebaa22ba79ac2bdeeb855b6a9cbb539621d755b04256d5a91788bc9e8e2?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                  className="object-contain shrink-0 my-auto w-2.5 aspect-[0.83]"
                  alt=""
                />
                <span>Reset Size</span>
              </button>
            </header>
            <div className="flex flex-wrap gap-2.5 mt-4">
              {formats.map((format, index) => (
                <button
                  key={index}
                  className="flex gap-1.5 px-3 py-1.5 text-sm leading-none whitespace-nowrap rounded-md border border-solid bg-zinc-800 border-zinc-700 text-neutral-400"
                >
                  <img
                    loading="lazy"
                    src={format.icon}
                    className="object-contain shrink-0 my-auto w-3 aspect-[1.33]"
                    alt=""
                  />
                  <span>{format.name}</span>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FilterProject;
