import { styles } from '../styles';

const Intro = () => {
  return (
  <section className="w-full h-screen flex justify-center items-center">
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}><span className="text-[#5e69ff]">Tony Lim</span></h1>
        <h2 className={`${styles.heroSubText} text-white-100`}>Software engineer based in Auckland, New Zealand</h2>
      </div>
  </section>
  )
}

export default Intro