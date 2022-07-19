import { motion, Variants } from "framer-motion";
import bg from "../../assets/img/banner/bg.png";
import Parallax from "parallax-js";
import { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Planet1 from "../../assets/img/banner/planet.png";
import Planet2 from "../../assets/img/banner/planet2.png";
import spaceship from "../../assets/img/banner/spaceship2.png";
import astro from "../../assets/img/banner/astron.png";

function ParallaxScene() {
  useEffect(() => {
    const scene = document.getElementById("scene");
    if (scene) {
      const parallaxInstance = new Parallax(scene);
      parallaxInstance.friction(0.8, 0.8);
    }
  }, []);

  return (
    <>
      <div
        id="scene"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div data-depth="-0.1" style={{ textAlign: "right" }}>
          <img
            src={Planet1}
            alt=""
            style={{ marginTop: 200, marginRight: 50 }}
          />
        </div>
        <div data-depth="-0.3">
          <img
            src={Planet2}
            alt=""
            style={{ marginTop: "50vh", marginLeft: 50 }}
          />
        </div>
        <div data-depth="0.4">
          <img
            src={spaceship}
            alt=""
            style={{
              marginTop: "30vh",
              marginLeft: "30vw",
              animation: "scaleAnimation 9s 0.1s infinite ease-in-out",
              animationDirection: "alternate",
            }}
          />
        </div>
        <div data-depth="1">
          <img
            src={astro}
            alt=""
            style={{
              marginTop: "10vh",
              marginLeft: "60vw",
              animation: "scaleAnimation 7s 0.1s infinite ease-in-out",
              animationDirection: "alternate",
            }}
          />
        </div>
      </div>
    </>
  );
}

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
        <motion.div variants={item}>
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
        <motion.p variants={item} style={{ color: "#adadad", maxWidth: 800 }}>
          Curious, persevering and creative Full Stack Developer focused on
          providing solutions to complex problems.
        </motion.p>
      </motion.div>
    </div>
  );
}
