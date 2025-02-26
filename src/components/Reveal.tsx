"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

const Reveal = ({
  children,
  containerClasses,
}: {
  children: ReactNode;
  containerClasses?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      exit="hidden"
      transition={{ duration: 0.5 }}
      className={containerClasses}
    >
      {children}
    </motion.div>
  );
};

export { Reveal };
