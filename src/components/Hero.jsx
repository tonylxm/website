import { styles } from "../styles";
import { useRef } from "react";
import { hero } from "../constants/constants";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from '@chakra-ui/react';
import rangitotoTop from '../assets/rangitoto-top.png';
import rangitotoBottom from '../assets/rangitoto-bottom.jpg';

const Hero = () => {
  const ref1 = useRef(null);
  const isInView = useInView(ref1);

  const ref2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [isSmallScreen] = useMediaQuery("(max-width: 767px)");
  const [isMediumScreen] = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const [isLargeScreen] = useMediaQuery("(min-width: 1024px)");

  const getTextYValue = () => {
    if (isSmallScreen) {
      return "2000%";
    } else if (isMediumScreen) {
      return "1750%";
    } else if (isLargeScreen) {
      return "1000%";
    }
    return "1000%"; // Default value for undefined cases
  };

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", getTextYValue()]
  );

  return (
    <div className="w-full h-screen overflow-hidden relative grid place-items-center">
      <motion.div
        style={{ y: textY }}
        variants={{
          hidden: { opacity: 0 },
          fadeIn: { opacity: 1 },
        }}
        ref={ref1}
        initial="hidden"
        animate={isInView ? "fadeIn" : "hidden"}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="relative z-10"
      >
        <h1 className={`${styles.heroHeadText}`}>
          <span className="text-[#ffffff]">{hero[0].head_text}</span>
        </h1>
        <h2 className={`${styles.heroSubText} text-[#d8e1ff]`}>
          {hero[0].sub_text}
        </h2>
      </motion.div>

      <div
        className="absolute inset-0 z-0 brightness-75"
        style={{
          backgroundImage: `url(${rangitotoBottom})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20 brightness-75"
        style={{
          backgroundImage: `url(${rangitotoTop})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

export default Hero;
