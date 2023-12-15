import Animation from "../utils/Animation";
import { styles } from "../styles";
import { projects } from "../constants/constants";
import { motion } from "framer-motion";
import {
  LinkSvg,
  ColourReactSvg,
  FirebaseSvg,
  ColourTailwindCSSSvg,
  JavaSvg,
  CSS3Svg,
} from "../assets/svg";

const Projects = () => {
  // Staggered animation

  return (
    <div className={`${styles.screen}`}>
      <div className="flex-[0.85]">
        <Animation>
          <div className={`${styles.card} bg-secondary z-20 pb-28 lg:pb-44`}>
            <h3 className={`${styles.sectionHeadText} ml-3`}>Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <motion.a
                href={projects[0].deployed_url}
                target="_blank"
                whileHover={{ scale: 1.03 }}
              >
                <div className={styles.projectDiv}>
                  <img src={projects[0].img} className={styles.projectCard} />
                  <h2 className={styles.projectTitle}>{projects[0].name}</h2>
                  <p className={`${styles.sectionText} ${styles.projectText}`}>
                    {projects[0].description}
                  </p>
                  <LinkSvg />
                  <span
                    className={`${styles.sectionText} ${styles.projectTechStack}`}
                  >
                    <ColourReactSvg />
                    &nbsp; + &nbsp;
                    <FirebaseSvg />
                    &nbsp; + &nbsp;
                    <ColourTailwindCSSSvg />
                  </span>
                </div>
              </motion.a>

              <motion.a
                href={projects[1].github_url}
                target="_blank"
                whileHover={{ scale: 1.03 }}
              >
                <div className={styles.projectDiv}>
                  <img src={projects[1].img} className={styles.projectCard} />
                  <h2 className={styles.projectTitle}>{projects[1].name}</h2>
                  <p className={`${styles.sectionText} ${styles.projectText}`}>
                    {projects[1].description}
                  </p>
                  <LinkSvg />
                  <span
                    className={`${styles.sectionText} ${styles.projectTechStack}`}
                  >
                    <JavaSvg />
                    &nbsp; + &nbsp;
                    <CSS3Svg />
                  </span>
                </div>
              </motion.a>
            </div>
          </div>
        </Animation>
      </div>
    </div>
  );
};

export default Projects;
