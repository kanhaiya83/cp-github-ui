import React from "react";
import SocialIcon from "./SocialIcon";

interface SocialLinkProps {
  iconSrc: string;
  iconAlt: string;
  text: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ iconSrc, iconAlt, text }) => (
  <div className="flex overflow-hidden gap-2 items-center pb-0.5 h-[21px]">
    <SocialIcon src={iconSrc} alt={iconAlt} />
    <div className="self-stretch my-auto text-base leading-none text-gray-200 whitespace-nowrap">
      {text}
    </div>
  </div>
);

export default SocialLink;
