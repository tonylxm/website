import { useState } from "react";
import Animation from "../utils/Animation";
import Stack from "../utils/Stack";
import { styles } from "../styles";
import { ResetSvg } from "../assets/svg";

const TechStack = () => {
  const [resetCounter, setResetCounter] = useState(0);

  const handleReset = () => {
    setResetCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className={`${styles.screen}`}>
      <div className="flex-[0.85] lg:flex-[0.5]">
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
            <Stack resetCounter={resetCounter} />
          </div>
        </Animation>
      </div>
    </div>
  );
};

export default TechStack;
