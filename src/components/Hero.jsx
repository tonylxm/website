import { styles } from '../styles';
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          fadeIn: { opacity: 1 },
        }}
        ref={ref}
        initial="hidden"
        animate={ isInView ? "fadeIn" : "hidden"}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <h1 className={`${styles.heroHeadText} text-white`}><span className="text-[#5f69ff]">Tony Lim</span></h1>
        <h2 className={`${styles.heroSubText} text-white-100`}>Software engineer based in Auckland, New Zealand</h2>
      </motion.div>
    </section>
  )
}

export default Hero