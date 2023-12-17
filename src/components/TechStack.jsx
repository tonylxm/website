import { useState, useRef, useEffect } from "react";
import Animation from "../utils/Animation";
import Stack from "../utils/Stack";
import { styles } from "../styles";
import { ResetSvg } from "../assets/svg";
import { motion, useInView } from "framer-motion";

const TechStack = () => {
  const [shouldRenderStack, setShouldRenderStack] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleReset = () => {
    setShouldRenderStack(false);
    setTimeout(() => {
      setShouldRenderStack(true);
    }, 1);
  };

  const handleResize = () => {
    setShouldRenderStack(false);
    setTimeout(() => {
      setShouldRenderStack(true);
    }, 1);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      className={`w-full h-[650px] flex justify-center items-center xl:flex-row mt-32 lg:mt-44`}
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
            <div className="flex flex-col items-center">
              {isInView && shouldRenderStack && <Stack />}
            </div>
          </div>
        </Animation>
      </div>
    </motion.div>
  );
};

export default TechStack;
