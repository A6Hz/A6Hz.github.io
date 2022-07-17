import Grid from "@mui/material/Grid";
import { Banner } from "./banner";
import { Archivemnts } from "./archivements";
import { CurriculumVitae } from "./curriculumVitae";
import { Contact } from "./contact";
import { Layout } from "../../components/layout";

export function Home() {
  return (
    <Layout>
      <Grid container style={{ backgroundColor: "black" }}>
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
    </Layout>
  );
}
