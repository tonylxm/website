import { styles } from '../styles';
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import rangitotoTop from '../assets/rangitoto-top.png';
import rangitotoBottom from '../assets/rangitoto-bottom.jpg';
import StarrySky from './StarrySky';

const Hero = () => {
  const ref1 = useRef(null);
  const isInView = useInView(ref1);

  const ref2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "1000%"]);

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
        <h1 className={`${styles.heroHeadText}`}><span className="text-[#ffffff]">Tony Lim</span></h1>
        <h2 className={`${styles.heroSubText} text-[#ffffff]`}>Software engineer based in Auckland, New Zealand</h2>
      </motion.div>

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${rangitotoBottom})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${rangitotoTop})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  )
}

export default Hero