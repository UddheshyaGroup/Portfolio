import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ onLoaded }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // trigger fade-out
      if (onLoaded) onLoaded();
    }, 1800); // total duration 1.8s
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="h-screen w-screen bg-blue-100 relative overflow-hidden flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.6, ease: "easeOut" } }} // fade-out part of 1.8s
        >
          <motion.img
            src="/logo.png"
            alt="Loading..."
            className="h-26 w-32 absolute"
            initial={{
              scale: 0,
              top: "50%",
              left: "50%",
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              scale: [0, 1],
              top: ["50%", "5%"],
              left: ["50%", "5%"],
              translateX: ["-50%", "0%"],
              translateY: ["-50%", "0%"],
            }}
            transition={{
              scale: { duration: 0.6, ease: "easeOut" },
              top: { delay: 0.6, duration: 0.6, ease: "easeInOut" },
              left: { delay: 0.6, duration: 0.6, ease: "easeInOut" },
              translateX: { delay: 0.6, duration: 0.6 },
              translateY: { delay: 0.6, duration: 0.6 },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
