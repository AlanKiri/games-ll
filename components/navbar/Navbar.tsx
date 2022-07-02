import React from "react";
import { IoLogoGameControllerB } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex gap-3  md:gap-4">
      <div className="flex gap-2">
        <IoLogoGameControllerB className="w-8 h-8 md:w-10 md:h-10" />
        <h2 className="hidden font-montserrat my-auto font-semibold tracking-wider text-xl md:block md:text-2xl">
          GAMES.LL
        </h2>
      </div>
      <div className="flex bg-white rounded-full w-full">
        <AiOutlineSearch className="w-4 h-4 md:h-6 md:w-6 text-black my-auto mx-2" />
        <input
          type="text"
          className="bg-transparent text-black outline-none w-full "
          placeholder="Search games"
        />
      </div>
    </div>
  );
};

export default Navbar;
