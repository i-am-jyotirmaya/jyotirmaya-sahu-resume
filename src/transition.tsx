import React from "react";
import { motion } from "framer-motion";

export const transition = (OriginalComponent: React.FC) => {
  return () => (
    <>
      <OriginalComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className="text-background text-9xl font-black fixed
         top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          travelling
        </p>
      </motion.div>
      <motion.div
        className="slide-out"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          className="text-background text-9xl font-black fixed
         top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          travelling
        </p>
      </motion.div>
    </>
  );
};
