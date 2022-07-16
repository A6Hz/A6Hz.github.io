import Grid from "@mui/material/Grid";
import { Banner } from "./banner";
import { Archivemnts } from "./archivements";
import { CurriculumVitae } from "./curriculumVitae";
import { Contact } from "./contact";

export function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Banner />
      </Grid>
      <Grid item xs={12}>
        <Archivemnts />
      </Grid>
      <Grid item xs={12}>
        <CurriculumVitae />
      </Grid>
      <Grid item xs={12}>
        <Contact />
      </Grid>
    </Grid>
  );
}
