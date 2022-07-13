import Link from "next/link";
import React from "react";
import {
  FaSteam,
  FaApple,
  FaPlaystation,
  FaXbox,
  FaSynagogue,
  FaGooglePlay,
} from "react-icons/fa";
import { SiEpicgames, SiNintendoswitch } from "react-icons/si";

interface IStoreCard {
  id: number;
  name: string;
  slug: string;
  url: string;
}

const useLogo = (slug: string) => {
  switch (slug) {
    case "steam":
      return <FaSteam className="w-8 h-8 mr-3" />;
    case "playstation-store":
      return <FaPlaystation className="w-8 h-8 mr-3" />;
    case "xbox-store":
      return <FaXbox className="w-8 h-8 mr-3" />;
    case "apple-appstore":
      return <FaApple className="w-8 h-8 mr-3" />;
    case "gog":
      return <FaSynagogue className="w-8 h-8 mr-3" />;
    case "nintendo":
      return <SiNintendoswitch className="w-8 h-8 mr-3" />;
    case "xbox360":
      return <FaXbox className="w-8 h-8 mr-3" />;
    case "google-play":
      return <FaGooglePlay className="w-8 h-8 mr-3" />;
    case "epic-games":
      return <SiEpicgames className="w-8 h-8 mr-3" />;
  }
};

const PlatformCard = ({ id, slug, name, url }: IStoreCard) => {
  return (
    <Link href={`${url}`}>
      <div className="flex p-3 bg-red-900 rounded-2xl">
        {useLogo(slug)}
        <span className="my-auto text-xl">{name}</span>
      </div>
    </Link>
  );
};

export default PlatformCard;
