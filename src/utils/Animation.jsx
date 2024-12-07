import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Animation = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hasAnimated, setHasAnimated] = useState(false);

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          show: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={hasAnimated ? "show" : "hidden"}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Animation;
