"use client";

import { motion } from "framer-motion";

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.6, ease: "linear", delay: 0.5}}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
