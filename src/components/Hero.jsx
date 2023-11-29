import { styles } from '../styles';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className={`${styles.heroHeadText} text-white`}><span className="text-[#5f69ff]">Tony Lim</span></h1>
        <h2 className={`${styles.heroSubText} text-white-100`}>Software engineer based in Auckland, New Zealand</h2>
      </motion.div>
    </section>
  )
}

export default Hero