import React, { ReactNode } from "react";
import { Navbar, Navbarbot } from "../components";
import { motion, AnimatePresence } from "framer-motion";

interface props {
  children?: React.ReactNode;
}

const Layout = ({ children }: props) => {
  const pageTransition = {
    initial: { x: "-1000" },
    visible: { x: 0 },
  };

  return (
    <div>
      <Navbar /> <Navbarbot />
      <motion.div variants={pageTransition} initial="initial" animate="visible">
        <AnimatePresence>{children}</AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Layout;
