import { useState, useRef } from "react";
import Animation from "../utils/Animation";
import Stack from "../utils/Stack";
import { styles } from "../styles";
import { ResetSvg } from "../assets/svg";
import { motion, useInView } from "framer-motion";

const TechStack = () => {
  const [resetCounter, setResetCounter] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleReset = () => {
    setResetCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <motion.div
      className={`${styles.screen}`}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
    >
      <div className="flex-[0.85]">
        <Animation>
          <div className={`${styles.card} h-[650px]`}>
            <div className="flex items-center justify-between">
              <h3 className={styles.sectionHeadText}>My Tech Stack</h3>
              <button
                type="button"
                className="text-tertiary hover:text-white mr-3"
                onClick={handleReset}
              >
                <ResetSvg />
              </button>
            </div>
            {isInView && <Stack resetCounter={resetCounter} />}
          </div>
        </Animation>
      </div>
    </motion.div>
  );
};

export default TechStack;
