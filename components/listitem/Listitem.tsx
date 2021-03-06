import Image from "next/image";
import React, { forwardRef, Ref } from "react";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { SiAtari, SiMacos, SiNintendo, SiSega } from "react-icons/si";
import { BsStarFill, BsStar } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

interface IListItem {
  background_image: string;
  gameid: number;
  title: string;
  stars: number;
  release_date: string;
  parent_platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
}

const hoverAnimation = {
  hovered: {
    backgroundColor: "#DC2626",
    transition: {
      duration: 0.1,
    },
  },
};

const ListItem = forwardRef(
  (
    {
      background_image,
      title,
      stars,
      release_date,
      parent_platforms,
      gameid,
    }: IListItem,
    ref: Ref<HTMLDivElement>
  ) => {
    const createLogos = (slug: string) => {
      switch (slug) {
        case "pc":
          return <FaWindows className="w-4 h-4 lg:w-8 lg:h-8 mr-3" />;
        case "xbox":
          return <FaXbox className="w-4 h-4 lg:w-8 lg:h-8 mr-3" />;
        case "playstation":
          return <FaPlaystation className="w-4 h-4 lg:w-8 lg:h-8 mr-3" />;
        case "ios":
          return <FaApple className="w-4 h-4 lg:w-8 lg:h-8 mr-3" />;
        case "android":
          return <FaAndroid className="w-4 h-4 lg:w-8 lg:h-8 mr-3" />;
        case "mac":
          return <SiMacos className="w-4 h-4 lg:w-8 lg:h-8 mr-3" />;
        case "linux":
          return <FaLinux className="w-4 h-4 lg:w-8 lg:h-8 mr-3" />;
        case "nintendo":
          return <SiNintendo className="w-4 h-4 lg:w-8 lg:h-8 mr-3" />;
        case "atari":
          return <SiAtari className="w-4 h-4 lg:w-8 lg:h-8 mr-3" />;
        case "sega":
          return <SiSega className="w-4 h-4 lg:w-8 lg:h-8 mr-3" />;
      }
    };

    return (
      <Link href={`/games/${gameid}`}>
        <motion.div
          className="flex flex-col md:flex-row bg-red-800 hover:cursor-pointer"
          ref={ref}
          variants={hoverAnimation}
          whileHover="hovered"
        >
          <div className="block md:w-52">
            {background_image != null && (
              <Image
                src={background_image}
                layout="responsive"
                width={200}
                height={113}
                alt="Game image"
              />
            )}
          </div>
          <div className="flex flex-col m-3 gap-3 md:w-full  ">
            <div className="flex justify-between align-middle">
              <span className="">{title}</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return index <= stars ? (
                    <BsStarFill className="my-auto" key={index} />
                  ) : (
                    <BsStar className="my-auto" key={index} />
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-auto">
              <span className="font-medium mb-2 md:mb-0 md: my-auto">
                {release_date}
              </span>
              <div className="flex gap-1">
                {parent_platforms?.map((platform) => {
                  return (
                    <div key={platform.platform.id}>
                      {createLogos(platform.platform.slug)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }
);

ListItem.displayName = "ListItem";

export default ListItem;
export const MListItem = motion(ListItem);
