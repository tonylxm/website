import Animation from "../utils/Animation";
import Stack from "../utils/Stack";
import { styles } from "../styles";

const TechStack = () => {
  return (
    <div className={`${styles.screen}`}>
      <div className="flex-[0.75] lg:flex-[0.5]">
        <Animation>
          <div className={`${styles.card} h-[650px]`}>
            <h3 className={styles.sectionHeadText}>My Tech Stack</h3>
            <Stack />
          </div>
        </Animation>
      </div>
    </div>
  );
};

export default TechStack;
