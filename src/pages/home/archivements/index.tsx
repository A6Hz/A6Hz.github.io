import { History } from "./history";

const archivementList = Array.from({ length: 6 }, (value) => ({
  logo: "https://jeanrojas.com/static/AreUin-c3127cd96139227e3297b0cc7f552787.png",
  name: "areuin",
  link: "/areuin",
  years: "2019 - 2020",
  roles: ["Sr", "backend developer"],
  description:
    "Areuin is a digital sports betting product with Freeplay and Real Money play modality, with an innovative, fun, and social game scheme in which, unlike the competition, the player always benefits since he does not play against the house but against a group of friends or a local clan. ",
}));

export function Archivements() {
  return (
    <>
      <section
        id="archivements"
        style={{
          marginTop: "-130px",
          zIndex: 2,
          clipPath: "ellipse(200% 76% at 50% 77%)",
          //</>borderRadius: "50% 50% 0% 0% / 7% 7% 0% 0%",
          padding: 30,
          backgroundColor: "#fff",
          /*backgroundImage:
            "linear-gradient(to right, #b778fb, #8b75eb, #606fd6, #3767be, #005da4)",*/
        }}
      >
        <History companies={archivementList} />
      </section>
    </>
  );
}
