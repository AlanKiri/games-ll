import React from "react";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { SiAtari, SiMacos, SiNintendo, SiSega } from "react-icons/si";

interface IPlatformCard {
  id: number;
  name: string;
  slug: string;
}

const useLogo = (slug: string) => {
  switch (slug) {
    case "pc":
      return <FaWindows className="w-8 h-8 mr-3" />;
    case "xbox":
      return <FaXbox className="w-8 h-8 mr-3" />;
    case "playstation":
      return <FaPlaystation className="w-8 h-8 mr-3" />;
    case "ios":
      return <FaApple className="w-8 h-8 mr-3" />;
    case "android":
      return <FaAndroid className="w-8 h-8 mr-3" />;
    case "mac":
      return <SiMacos className="w-8 h-8 mr-3" />;
    case "linux":
      return <FaLinux className="w-8 h-8 mr-3" />;
    case "nintendo":
      return <SiNintendo className="w-8 h-8 mr-3" />;
    case "atari":
      return <SiAtari className="w-8 h-8 mr-3" />;
    case "sega":
      return <SiSega className="w-8 h-8 mr-3" />;
  }
};

const PlatformCard = ({ platform }: { platform: IPlatformCard }) => {
  return (
    <div className="flex p-3 bg-red-900 rounded-2xl">
      {useLogo(platform.slug)}
      <span>{platform.slug}</span>
    </div>
  );
};

export default PlatformCard;
