import Image from "next/image";
import React from "react";
import { FaPlaystation, FaXbox, FaWindows } from "react-icons/fa";
import { BsStarFill, BsStar } from "react-icons/bs";

interface IListItem {
  background_image: string;
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

const Listitem = ({
  background_image,
  title,
  stars,
  release_date,
  parent_platforms,
}: IListItem) => {
  return (
    <div className="flex flex-col md:flex-row bg-red-800 ">
      <div className="block md:w-52">
        <Image
          src={background_image}
          layout="responsive"
          width={200}
          height={113}
          alt="Game image"
        />
      </div>
      <div className="flex flex-col m-3 gap-3 md:w-full  ">
        <div className="flex justify-between align-middle">
          <span className="">{title}</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return index <= stars ? (
                <BsStarFill className="my-auto" />
              ) : (
                <BsStar className="my-auto" />
              );
            })}
          </div>
        </div>
        <div className="flex justify-between mt-auto">
          <span>{release_date}</span>
          <div className="flex gap-1">
            {parent_platforms.map((platform) => {
              if (platform.platform.slug == "pc") {
                return <FaWindows className="w-5 h-5" />;
              } else if (platform.platform.slug == "xbox") {
                return <FaXbox className="w-5 h-5" />;
              } else if (platform.platform.slug == "playstation") {
                return <FaPlaystation className="w-5 h-5" />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listitem;
