"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
interface NavItem {
  label: string;
  icon: string;
  link?: string;
  isActive?: boolean;
  pathFor?: string;
}

const NavigationItems = ({
  rootPath,
  pathname,
}: {
  rootPath: string;
  pathname: string;
}) => {
  const currentPath = usePathname();
  const navItems: NavItem[] = [
    {
      label: "Models",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a10fb408381728cc9c2c6b5689b7ae22fdf93494ff6cb234df122c49907bad8c?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    },
    {
      label: "Datasets",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2cebaeb616d9174cad3a34e1c451626044f0f884623474085a53646697e39b3f?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    },
    {
      label: "Spaces",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/597c38323a65273d7c424207f4c60e5d61a2a0843df21fe6aaffdfdf65d3b6e2?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    },
    {
      label: "Posts",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a280b554d118d30235ac42516136092cf346aee11e70e24daf0f56a82dd46222?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    },
    {
      label: "Docs",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc985c1d7839845b50961da01acbe1a1b25a291d93883f4c835bf8ac7b56a406?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    },
    {
      label: "Solutions",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/63cc5033381842877cca8a7f531353c38d62650e8dbe0b17e6edd92473e94bfd?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    },
  ];
  const spaceNavItems: NavItem[] = [
    {
      label: "App",
      pathFor: "spaces",
      isActive: currentPath === `/${rootPath}${pathname}`,
      link: `/${rootPath}${pathname}`,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a280b554d118d30235ac42516136092cf346aee11e70e24daf0f56a82dd46222?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    },
    {
      label: "Files",
      pathFor: "spaces",
      isActive: currentPath === `/${rootPath}${pathname}/tree/main`,
      link: `/${rootPath}${pathname}/tree/main`,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4fdfc2a4c48b0dacf7a516fb1e7c12ec953f87992842fdaed9e39120f54ef54?apiKey=caf73ded90744adfa0fe2d98abed61c0&",
    },
  ];
  console.log(currentPath === `/${rootPath}${pathname}`, "rootPath");
  const availableItems = rootPath === "spaces" ? spaceNavItems : navItems;
  return (
    <nav className="flex flex-wrap gap-4 items-center my-auto max-md:max-w-full">
      {availableItems.map((item, index) => (
        <Link
          key={index}
          href={item.link || ""}
          className={`flex gap-1.5 self-stretch my-auto text-base text-black whitespace-nowrap ${
            item?.isActive ? "underline" : ""
          }`}
        >
          <img
            loading="lazy"
            src={item.icon}
            alt=""
            className="object-contain shrink-0 w-4 aspect-square"
          />
          <span
            className={`my-auto text-white text-base ${
              item?.isActive ? "underline" : ""
            }`}
          >
            {item.label}
          </span>
        </Link>
      ))}
      <span className="self-stretch my-auto text-base text-white">Pricing</span>
      <div className="flex gap-2 self-stretch my-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4fdfc2a4c48b0dacf7a516fb1e7c12ec953f87992842fdaed9e39120f54ef54?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
          alt=""
          className="object-contain shrink-0 w-9 aspect-[1.8]"
        />
        <div className="flex shrink-0 w-0.5 h-5 bg-gray-100" />
      </div>
      <div className="flex gap-5 justify-center items-center self-stretch text-base">
        <button className="self-start text-base mt-1 text-white">Log In</button>
        <button className="px-3.5 py-2 leading-none text-base text-white bg-gray-900 rounded-full">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavigationItems;
