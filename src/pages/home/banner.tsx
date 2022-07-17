import { height } from "@mui/system";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function Banner() {
  return (
    <motion.div
      id="home"
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
      style={{
        padding: 20,
        height: "90vh",
        minHeight: 500,
        zIndex: 1,
        backgroundColor: "black",
      }}
    >
      <motion.p variants={item}>
        <span style={{ fontWeight: "bold", fontSize: 30, display: "block" }}>
          Hi! I'm Aleisei Hernández{" "}
        </span>
        <span>Fullstack web Developer </span>
      </motion.p>
      <motion.p variants={item} style={{ color: "#adadad" }}>
        Curious, persevering and creative Full Stack Developer focused on
        providing solutions to complex problems, attracting them to their most
        atomic part to handle them in realistic times. Able to make logical
        decisions based on available times. I greatly appreciate the new
        recommendations, new ideas and criticisms to improve and make our stay
        in the projects that I am totally involved in enjoyable. Mostly focused
        on teamwork to solve the problems we face together.
      </motion.p>
    </motion.div>
  );
}
