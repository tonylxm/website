import Animation from "../utils/Animation";
import Stack from "../utils/Stack";
import { styles } from "../styles";

const TechStack = () => {
  return (
      <div className={`${styles.screen}`}>
      <div className="flex-[0.75] lg:flex-[0.5]">
        <Animation>
          <Stack />
        </Animation>
      </div>
    </div>
  );
};

export default TechStack;
