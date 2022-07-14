import "../styles/globals.css";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  const variants = {
    initial: { opacity: 0 },
    load: { opacity: 1 },
  };
  return (
    <motion.div
      key={router.route}
      variants={variants}
      initial="initial"
      animate="load"
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
