import Link from "next/link";
import React from "react";
import Pickelement from "./Pickelement";
import { motion } from "framer-motion";

const Navbarbot = () => {
  const animateButtonHover = {
    hover: {
      color: "#d3d3d3",
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="flex whitespace-nowrap overflow-x-scroll my-5 gap-4 scrollbar-hide">
      <Link href="/">
        <motion.button variants={animateButtonHover} whileHover="hover">
          All Games
        </motion.button>
      </Link>
      <Pickelement
        title="New Releases"
        buttons={[
          { text: "Last 30 days", href: "/?query=30days" },
          { text: "Last week", href: "/?query=lastWeek" },
          { text: "Next week", href: "/?query=nextWeek" },
        ]}
      />
      <Link href="/genres">
        <motion.button variants={animateButtonHover} whileHover="hover">
          Genres
        </motion.button>
      </Link>
      <Link href="/publishers">
        <motion.button variants={animateButtonHover} whileHover="hover">
          Publishers
        </motion.button>
      </Link>
      <Link href="/developers">
        <motion.button variants={animateButtonHover} whileHover="hover">
          Developers
        </motion.button>
      </Link>
    </div>
  );
};

export default Navbarbot;
