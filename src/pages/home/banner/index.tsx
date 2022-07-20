import { motion, Variants } from "framer-motion";
import bg from "../../../assets/img/banner/bg.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ParallaxScene } from "./parallaxScene";

const container: Variants = {
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

const text = {
  name: "Aleisei Hernández",
};

const framerOpt = {
  sentence: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  },
  letter: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
};

export function Banner() {
  const theme = useTheme();
  const matchSMSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ marginTop: matchSMSize ? 56 : 69 }}>
      <ParallaxScene />
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
          zIndex: 2,
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          variants={item}
          style={{ top: "150px", position: "absolute" }}
        >
          <motion.h1 variants={framerOpt.sentence} style={{ margin: 0 }}>
            {text.name.split("").map((char, index) => (
              <motion.span
                key={index}
                style={{
                  fontWeight: "bold",
                  fontSize: 70,
                  color: "white",
                }}
                variants={framerOpt.letter}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <span style={{ fontSize: 30, color: "#fff" }}>
            Fullstack web Developer{" "}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
