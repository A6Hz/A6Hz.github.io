import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { History } from "./history";

const archivementList = Array.from({ length: 6 }, (value) => ({
  img: "https://jeanrojas.com/static/AreUin-c3127cd96139227e3297b0cc7f552787.png",
  name: "areuin",
  link: "/areuin",
  description:
    "Areuin is a digital sports betting product with Freeplay and Real Money play modality, with an innovative, fun, and social game scheme in which, unlike the competition, the player always benefits since he does not play against the house but against a group of friends or a local clan. ",
}));
console.log(archivementList);

function MediaCard(props: {
  archivement: {
    img: string;
    name: string;
    link: string;
    description: string;
  };
}) {
  const { archivement } = props;
  const navigate = useNavigate();

  return (
    <Card
      sx={{ borderRadius: 2 }}
      elevation={2}
      style={{ boxShadow: "0px 0px 13px 3px #0000002b" }}
    >
      <CardMedia
        component="img"
        height="170"
        image={archivement.img}
        alt={archivement.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {archivement.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {archivement.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(archivement.link)}>
          Show more
        </Button>
      </CardActions>
    </Card>
  );
}

export function Archivements() {
  return (
    <>
      <section
        id="archivements"
        style={{
          marginTop: "-97px",
          zIndex: 2,
          clipPath: "ellipse(200% 76% at 50% 77%)",
          //</>borderRadius: "50% 50% 0% 0% / 7% 7% 0% 0%",
          padding: 30,
          backgroundColor: "#fff",
          /*backgroundImage:
            "linear-gradient(to right, #b778fb, #8b75eb, #606fd6, #3767be, #005da4)",*/
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <History />

            {/*archivementList.map((archivement, key) => (
              <MediaCard archivement={archivement} />
            )) */}
          </Grid>
        </Grid>
      </section>
    </>
  );
}
