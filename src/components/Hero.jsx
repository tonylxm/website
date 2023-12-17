import { styles } from "../styles";
import { useRef } from "react";
import { hero } from "../constants/constants";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "@chakra-ui/react";
import rangitotoTop from "../assets/rangitoto-top.png";
import rangitotoBottom from "../assets/rangitoto-bottom.jpg";
import StarrySky from "../utils/StarrySky";

const Hero = () => {
  const ref1 = useRef(null);
  const isInView = useInView(ref1);

  const ref2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["start start", "end start"],
  });

  const [isSmallScreen] = useMediaQuery("(max-width: 767px)");
  const [isMediumScreen] = useMediaQuery(
    "(min-width: 768px) and (max-width: 1023px)"
  );
  const [isLargeScreen] = useMediaQuery("(min-width: 1024px)");

  const getTextYValue = () => {
    if (isSmallScreen) {
      return "1500%";
    } else if (isMediumScreen) {
      return "1250%";
    } else if (isLargeScreen) {
      return "1000%";
    }
    return "1000%";
  };

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", getTextYValue()]);
  const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);

  return (
    <div
      className={`w-full h-screen overflow-hidden relative grid content-center`}
    >
      <motion.div
        style={{ y: textY }}
        variants={{
          hidden: { opacity: 0 },
          fadeIn: { opacity: 1 },
        }}
        ref={ref1}
        initial="hidden"
        animate="fadeIn"
        transition={{ duration: 0.5, delay: 0.15 }}
        className="relative z-20 mb-[10%] lg:mb-[6%]"
      >
        <h1 className={`${styles.heroHeadText}`}>
          <span>{hero[0].head_text}</span>
        </h1>
        <h2 className={`${styles.heroSubText}`}>{hero[0].sub_text}</h2>
      </motion.div>

      <div
        className="absolute inset-0 z-10 brightness-75"
        style={{
          backgroundImage: `url(${rangitotoBottom})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />

      <motion.div
        style={{ y: starsY }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        ref={ref1}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute inset-0 z-30"
      >
        <StarrySky />
      </motion.div>

      <div
        className="absolute inset-0 z-40 brightness-75"
        style={{
          backgroundImage: `url(${rangitotoTop})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 h-6 w-6 z-0">
        <a href="https://www.hitwebcounter.com" target="_blank">
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=10342462&style=0025&nbdigits=4&type=ip&initCount=0"
            title="Counter Widget"
            Alt="Visit counter For Websites"
            border="0"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
