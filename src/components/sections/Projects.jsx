import { styles } from "@/styles/styles";
import { projects } from "@/data/projects";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Card from "@/components/common/Card";

const parentVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      when: "beforeChildren",
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div className={`${styles.screen} h-fit`}>
      <div className="flex-[0.85]">
        <motion.div
          ref={ref}
          className={`${styles.card} z-20`}
          initial="hidden"
          animate={controls}
          variants={parentVariants}
        >
          <h3 className={`${styles.sectionHeadText} mb-3`}>Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:p-6 gap-6 justify-items-center">
            {projects.map((project, index) => (
              <motion.div key={index} variants={childVariants}>
                <Card
                  name={project.name}
                  role={project.role}
                  description={project.description}
                  img={project.img}
                  techStack={project.techStack}
                  github_url={project.github_url}
                  deployed_url={project.deployed_url}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
