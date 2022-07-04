import React from "react";

interface IInfo {
  title: string;
  description: string | undefined;
  small?: boolean;
}

const Info = ({ description, title, small = false }: IInfo) => {
  return (
    <div className="flex flex-col  mb-12 mr-12  ">
      <h2 className="font-semibold text-lg lg:text-xl">{title}</h2>
      <p
        className={`${
          small ? "text-base lg:text-lg" : "text-xl lg:text-2xl"
        } tracking-wider break-all lg:break-normal`}
      >
        {description}
      </p>
    </div>
  );
};

export default Info;
