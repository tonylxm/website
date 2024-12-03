import { styles } from "@/styles/styles";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Card from "@/components/common/Card";

// show more projects button
export default function Projects() {
  return (
    <div className={`${styles.screen} h-fit`}>
      <div className="flex-[0.85]">
        <div className={`${styles.card} z-20`}>
          <h3 className={`${styles.sectionHeadText}`}>Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:p-6 gap-6 justify-items-center">
            {projects.map((project) => (
              <Card
                key={project.name}
                name={project.name}
                role={project.role}
                description={project.description}
                img={project.img}
                techStack={project.techStack}
                github_url={project.github_url}
                deployed_url={project.deployed_url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
