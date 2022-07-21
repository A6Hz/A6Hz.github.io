import Planet1 from "../../../assets/img/banner/planet.png";
import Planet2 from "../../../assets/img/banner/planet2.png";
import spaceship from "../../../assets/img/banner/spaceship2.png";
import astro from "../../../assets/img/banner/astron.png";
import Parallax from "parallax-js";
import { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export function ParallaxScene() {
  const theme = useTheme();
  const matchSMSize = useMediaQuery(theme.breakpoints.up("sm"));
  console.log(matchSMSize);
  useEffect(() => {
    const scene = document.getElementById("scene");
    if (scene) {
      const parallaxInstance = new Parallax(scene);
      parallaxInstance.friction(0.01, 0.01);
    }

    /* Matrix effect */
    // Initialising the canvas
    var canvas = document.querySelector("canvas");
    if (canvas === null) return;
    const ctx = canvas.getContext("2d");

    // Setting the width and height of the canvas
    resize();
    /*canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;*/
    canvas.style.opacity = "0.3";
    window.addEventListener("resize", resize);

    // Setting up the letters
    const letters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ".split(
        ""
      );

    // Setting up the columns
    var fontSize = 10,
      columns = canvas.width / fontSize;

    // Setting up the drops
    var drops: any = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
      if (ctx === null) return;
      if (canvas === null) return;

      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#0f0";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    // Loop the animation
    setInterval(draw, 33);

    function resize() {
      if (canvas === null) return;
      canvas.width = window.innerWidth - 15;
      canvas.height = window.innerHeight;
    }

    /* Matrix effect end */
  }, []);

  return (
    <>
      <canvas style={{ position: "absolute", display: "block", top: 0 }} />

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

        <div data-depth="1">
          <img
            src={spaceship}
            alt=""
            style={{
              marginTop: "20vh",
              marginLeft: "60vw",
              animation: "scaleAnimation 7s 0.1s infinite ease-in-out",
              animationDirection: "alternate",
              opacity: matchSMSize ? 1 : 0,
            }}
          />
        </div>
      </div>
    </>
  );
}
