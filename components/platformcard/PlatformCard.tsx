import React from "react";
import { FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";

interface IPlatformCard {
  id: number;
  name: string;
  slug: string;
}

const useLogo = (slug: string) => {
  if (slug == "pc") {
    return <FaWindows className="w-8 h-8 mr-3" />;
  } else if (slug == "xbox") {
    return <FaXbox className="w-8 h-8 mr-3" />;
  } else if (slug == "playstation") {
    return <FaPlaystation className="w-8 h-8 mr-3" />;
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
