import React from "react";
import SocialLink from "./SocialLink";
import { User } from "@/types/user";

const CompanyProfile: React.FC<{ user: User }> = ({ user }) => {
  return (
    <main className="flex flex-col items-center px-20 pt-10 max-md:px-5">
      <section className="flex flex-col px-4 pb-10 w-full max-w-screen-2xl max-md:max-w-full">
        <div className="flex flex-wrap items-center w-full max-md:max-w-full">
          <div className="flex flex-col items-start self-stretch pr-4 my-auto w-24 min-h-[80px]">
            <div className="flex items-end w-20 rounded-lg min-h-[80px]">
              <img
                loading="lazy"
                src={user.avatar_url}
                alt="Company logo"
                className="object-contain flex-1 shrink w-full rounded-lg aspect-square basis-0 max-w-[80px]"
              />
            </div>
          </div>
          <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-[347px]">
            <div className="flex items-center w-full whitespace-nowrap">
              <h1 className="self-stretch text-white pr-3 my-auto text-2xl font-bold leading-none ">
                {user.name}
              </h1>
              {/* <div className="flex items-center self-stretch px-2.5 py-px my-auto text-sm leading-none text-violet-800 rounded-lg border border-gray-100 border-solid">
                <span className="self-stretch my-auto">
                  {user.organization}
                </span>
              </div> */}
            </div>
            <div className="flex items-start mt-1.5 w-full">
              <SocialLink
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5c3d883df7028c9e408d94a3955d58fca3598771bdd14438c29642ed39809f75?placeholderIfAbsent=true&apiKey=caf73ded90744adfa0fe2d98abed61c0"
                iconAlt="Website icon"
                text={user.website_url}
              />
              <div className="flex flex-col pl-3">
                <div className="flex">
                  <SocialLink
                    iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/212bd929be4d5d601ed395976db47955f59fb292f4e5dffe9be53b950f7a77e3?placeholderIfAbsent=true&apiKey=caf73ded90744adfa0fe2d98abed61c0"
                    iconAlt="Twitter icon"
                    text={user.twitter}
                  />
                  <div className="flex flex-col justify-center items-start pl-3">
                    <SocialLink
                      iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/71b9dbcce5f5378d26a737a8020b3a4d96a33b615f0680880a2787a8c3d00e46?placeholderIfAbsent=true&apiKey=caf73ded90744adfa0fe2d98abed61c0"
                      iconAlt="LinkedIn icon"
                      text={user.linkedin}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CompanyProfile;
