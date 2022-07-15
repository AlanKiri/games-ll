import Image from "next/image";
import React from "react";

const imageModal = ({
  image,
  setImage,
}: {
  image: {
    isModalOpen: boolean;
    link: string;
    width: number;
    height: number;
  };
  setImage: React.Dispatch<
    React.SetStateAction<{
      isModalOpen: boolean;
      link: string;
      width: number;
      height: number;
    }>
  >;
}) => {
  console.log(image);
  return (
    <div
      className="bg-black/80 h-screen w-screen z-0 top-0 left-0  flex justify-center items-center fixed"
      onClick={() => {
        setImage({ ...image, isModalOpen: false });
      }}
    >
      <div
        className="block w-3/4 lg:w-1/2"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <Image
          src={image.link}
          alt="image representing game"
          width={image.width}
          height={image.height}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default imageModal;
