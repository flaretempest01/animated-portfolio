import { motion } from "framer-motion";
import { Prism as SyntaxHighighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span>👌 Hello, I'm</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Kaz
          </motion.h1>
          <motion.h2 className="hero-subtitle">
            Web Developer & Aspiring Pentester
          </motion.h2>
          <motion.p className="hero-description">
            {`Web Developer with a strong foundation in creating dynamic and
            responsive web applications. Aspiring cybersecurity enthusiast, particularly
            interested in penetration testing. My commitment to continuous
            learning and problem-solving drives my passion for securing digital
            landscapes.`}
          </motion.p>
          <motion.div className="cta-buttons">
            <motion.a
              href="#projects"
              className="cta-primary"
              whileTap={{ scale: 1.05 }}
              whileHover={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileTap={{ scale: 1.05 }}
              whileHover={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://www.linkedin.com/in/kazuya-sato/">
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a href="https://github.com/flaretempest01">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a href="https://discord.com">
              <i className="fab fa-discord"></i>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30,41,59,0.8)",
                backdropFilter: "blue(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`export interface IDeveloperProfile {
  codename: string;
  origin: string;
  role: string;
  stack: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
  traits: string[];
  missionStatement: string;
  availability: string;
}

export const aboutMe: IDeveloperProfile = {
  codename: "KazDev",
  origin: "🌎 Somewhere between a line of code and a cup of coffee",
  role: "Fullstack Darkmaster, Cybersecurity Jedi",
  stack: {
    languages: ["TypeScript", "JavaScript", "Python"],
    frameworks: ["React", "Next.js", "TailwindCSS", "Node.js"],
    tools: ["Git", "Docker", "Figma", "Vercel"]
  },
  traits: [
    "Pixel-Perfectionist",
    "Clean Code Advocate",
    "Lover of Dark Mode",
    "Terminal Enthusiast"
  ],
  missionStatement: "Turning complex problems into simple, beautiful, and intuitive designs.",
  availability: "Available for new projects"
};`}
            </SyntaxHighighter>
          </div>
          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
