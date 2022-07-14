import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import React, { useContext } from "react";
import { Oval } from "react-loader-spinner";
import { Navbar, Navbarbot } from "../components";
import { Store } from "../stores/store";

interface props {
  children?: React.ReactNode;
}

const Layout = ({ children }: props) => {
  const { queryStore } = useContext(Store);
  const { isLoading } = queryStore;

  const pageTransition = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <Head>
        <title>Games.LL</title>
        <link
          rel="shortcut icon"
          href="images/favicon/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="icon"
          href="images/favicon/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <Navbar /> <Navbarbot />
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Oval color="white" />
        </div>
      ) : (
        <motion.div
          variants={pageTransition}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>{children}</AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default Layout;
