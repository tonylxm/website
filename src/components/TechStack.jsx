import Animation from "../utils/Animation";
import Stack from "../utils/Stack";

const TechStack = () => {
  return (
    <div className="xl:flex-row overflow-hidden w-full h-screen flex justify-center items-center pt-20">
      <div className="flex-[0.75] lg:flex-[0.5]">
        <Animation>
          <Stack />
        </Animation>
      </div>
    </div>
  );
};

export default TechStack;
