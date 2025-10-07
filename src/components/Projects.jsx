import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/proj_1.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Portfolio Website using framer motion</h3>
          <p>
            Personal project to showcase the skills and proficiency with
            interactive website.
          </p>
          <div className="project-tech">
            <span>Vite</span>
            <span>Framer-Motion</span>
            <span>TailwindCSS</span>
            <span>MUI</span>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/proj_4.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Stellar Web Portfolio</h3>
          <p>
            Personal web portfolio with meteor animation using TailwindCSS,
            Vite, and shadcn-UI{" "}
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>TailwindCSS</span>
            <span>Shadcn-UI</span>
            <span>EmailJS</span>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/proj_3.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Fleet Management System</h3>
          <p>
            dashboard project for management of driver, shuttle, and schedule of
            services.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>TailwindCSS</span>
            <span>Jotai</span>
            <span>TanStack</span>
            <span>Lucide-React</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
