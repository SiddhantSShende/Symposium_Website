import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface PageTransitionProps {
  isTransitioning: boolean;
}

const PageTransition = ({ isTransitioning }: PageTransitionProps) => {
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated overlay bars */}
          <div className="absolute inset-0 flex">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-primary"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{ originY: 0 }}
              />
            ))}
          </div>

          {/* Loading circle animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative w-20 h-20"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              exit={{ scale: 0, rotate: 720 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="hsl(var(--background))"
                  strokeWidth="4"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </svg>
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-background font-serif text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                R
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;