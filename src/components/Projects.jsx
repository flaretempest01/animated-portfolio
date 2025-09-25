import { motion } from "motion/react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
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
      animate={{ opacity: 1 }}
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
            style={{ backgroundImage: "url('/projects/ai-saas.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <h3>AI SaaS Platform</h3>
            <p>some description here</p>
            <div className="project-tech">
              <span>Next.js</span>
              <span>OpenAI</span>
              <span>TailwindCSS</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/ai-saas.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <h3>AI SaaS Platform</h3>
            <p>some description here</p>
            <div className="project-tech">
              <span>Next.js</span>
              <span>OpenAI</span>
              <span>TailwindCSS</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/ai-saas.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <h3>AI SaaS Platform</h3>
            <p>some description here</p>
            <div className="project-tech">
              <span>Next.js</span>
              <span>OpenAI</span>
              <span>TailwindCSS</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
