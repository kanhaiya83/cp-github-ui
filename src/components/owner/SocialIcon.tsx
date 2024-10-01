import React from "react";

interface SocialIconProps {
  src: string;
  alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <div className="flex overflow-hidden items-center self-stretch my-auto min-h-[12px] w-[15px]">
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain flex-1 shrink self-stretch my-auto aspect-square basis-0 w-[15px]"
    />
  </div>
);

export default SocialIcon;
