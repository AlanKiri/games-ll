import Link from "next/link";
import React from "react";

interface IInfo {
  title: string;
  description?: string | undefined;
  links?: { name: string; id: number; path: string }[];
  small?: boolean;
  className?: string;
  isLink?: boolean;
}

const Info = ({
  description,
  title,
  small = false,
  className,
  isLink = false,
  links,
}: IInfo) => {
  console.log(links);
  return (
    <div className={`flex flex-col  mb-12 mr-12 ${className} `}>
      <h2 className="font-semibold text-lg lg:text-xl">{title}</h2>
      {isLink == false && (
        <p
          className={`${
            small ? "text-base lg:text-lg" : "text-xl lg:text-2xl"
          } tracking-wider break-all lg:break-normal`}
        >
          {description}
        </p>
      )}
      {isLink && (
        <div className="flex gap-1">
          {links?.map((link) => {
            return (
              <Link href={`${link.path}`} key={link.id}>
                <span
                  className={`${
                    small ? "text-base lg:text-lg" : "text-xl lg:text-2xl"
                  } tracking-wider break-all lg:break-normal`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Info;
