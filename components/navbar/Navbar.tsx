import React, { MouseEvent, useState } from "react";
import { IoLogoGameControllerB } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (event: MouseEvent) => {
    event.preventDefault();
    router.push(`/games/search/` + search);
  };

  const hoverAnimation = {
    hover: {
      color: "#DC2626",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="flex gap-3  md:gap-4 hover:cursor-pointer">
      <Link href="/">
        <motion.div
          className="flex gap-2"
          variants={hoverAnimation}
          whileHover="hover"
        >
          <IoLogoGameControllerB className="w-8 h-8 md:w-10 md:h-10" />
          <h2 className="hidden font-montserrat my-auto font-semibold tracking-wider text-xl md:block md:text-2xl">
            GAMES.LL
          </h2>
        </motion.div>
      </Link>
      <form className="flex bg-white rounded-full w-full">
        <motion.button
          type="submit"
          onClick={handleSearch}
          initial={{ color: "fff" }}
          variants={hoverAnimation}
          whileHover="hover"
          className="text-black"
        >
          <AiOutlineSearch className="w-4 h-4 md:h-6 md:w-6 text-inherit  my-auto mx-2" />
        </motion.button>
        <input
          type="text"
          className="bg-transparent text-black outline-none w-full "
          placeholder="Search games"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Navbar;
