"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

function Container({ children }: { children: React.ReactNode }): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col w-full max-w-screen-2xl mx-auto"
    >
      {children}
    </motion.main>
  );
}

export { Container };
