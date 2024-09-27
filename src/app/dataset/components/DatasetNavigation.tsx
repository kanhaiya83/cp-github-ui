import Link from "next/link";
import React from "react";

interface NavItem {
  label: string;
  icon: string;
  count?: number;
  link: string;
}

const DatasetNavigation = ({ pathname }: { pathname: string }) => {
  const navItems: NavItem[] = [
    {
      label: "Description",
      link: pathname,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddcd302b0d3531659e32b2444dc9f569b5c26cce5499baa24f69d0ff6d341a19?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    },

    {
      link: `${pathname}/tree/main`,
      label: "Files and versions",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/359757bd72a2d90830998a81a4c0a52e8ebcc1768a4934b228efa1861814a438?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    },
  ];

  return (
    <nav className="flex gap-3.5 items-center mt-6">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={`flex gap-1.5 self-stretch ${
            index === 0
              ? "p-3.5 text-base font-semibold text-gray-800"
              : "my-auto text-base text-white"
          }`}
        >
          <img
            loading="lazy"
            src={item.icon}
            alt=""
            className="object-contain shrink-0 my-auto w-4 aspect-square"
          />
          <span className="my-auto text-white">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default DatasetNavigation;
