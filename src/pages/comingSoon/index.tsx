import { logEvent } from "firebase/analytics";
import { useEffect } from "react";
import { analytics } from "../../firebase";

export function ComingSoon() {
  useEffect(() => {
    logEvent(analytics, "coming_soon_page");
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(to right top, #9e00d6, #7a3fd4, #5d53ca, #4b5eba, #4a65a4)",
      }}
    >
      <h1
        style={{
          margin: 0,
          top: "50%",
          marginTop: "-40px",
          fontSize: 50,
          color: "#fff",
          display: "inline-block",
          position: "relative",
          width: "100%",
          textAlign: "center",
        }}
      >
        COMING SOON
      </h1>
    </div>
  );
}
