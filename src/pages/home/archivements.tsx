import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const archivementList = [
  {
    img: "https://jeanrojas.com/static/AreUin-c3127cd96139227e3297b0cc7f552787.png",
    name: "areuin",
    link: "text",
    description: "text",
  },
  {
    img: "https://jeanrojas.com/static/AreUin-c3127cd96139227e3297b0cc7f552787.png",
    name: "areuin",
    link: "text",
    description: "text",
  },
];

function MediaCard(props: {
  archivement: {
    img: string;
    name: string;
    link: string;
    description: string;
  };
}) {
  const { archivement } = props;

  return (
    <Card sx={{ borderRadius: 2 }} elevation={0}>
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
        <Button size="small" href={archivement.link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export function Archivemnts() {
  return (
    <>
      <section
        id="archivements"
        style={{
          padding: 30,
          backgroundImage:
            "linear-gradient(to right, #b778fb, #8b75eb, #606fd6, #3767be, #005da4)",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            Archivements
          </Grid>
          {archivementList.map((archivement, key) => (
            <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
              <MediaCard archivement={archivement} />
            </Grid>
          ))}
        </Grid>
      </section>
    </>
  );
}
