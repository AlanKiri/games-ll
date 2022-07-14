import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { forwardRef, Ref } from "react";

interface props {
  section: string;
  data: {
    id: number;
    image_background: string;
    name: string;
    slug: string;
  };
}

const DisplayTile = forwardRef(
  ({ data, section }: props, ref: Ref<HTMLDivElement>) => {
    const hoverAnimation = {
      hovered: {
        backgroundColor: "#DC2626",
        transition: {
          duration: 0.1,
        },
      },
    };

    return (
      <Link href={`/${section}/${data.id}`}>
        <motion.div
          className="flex flex-col bg-red-800 col-span-12 md:col-span-6  lg:col-span-4 text-center hover:cursor-pointer"
          ref={ref}
          variants={hoverAnimation}
          whileHover="hovered"
        >
          <div className="block w-full">
            <Image
              src={data.image_background}
              alt={`${data.slug} representing image`}
              layout="responsive"
              width={200}
              height={100}
            />
          </div>
          <span className="font-medium text-2xl py-3">{data.name}</span>
        </motion.div>
      </Link>
    );
  }
);

DisplayTile.displayName = "DisplayTile";

export default DisplayTile;
export const MDisplayTile = motion(DisplayTile);
