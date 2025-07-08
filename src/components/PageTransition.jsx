"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0,  }}
        animate={{ opacity: 1, }}
     
        transition={{ ease:"easeInOut", duration:0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 