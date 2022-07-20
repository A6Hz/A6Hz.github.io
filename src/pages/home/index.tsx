import Grid from "@mui/material/Grid";
import { Banner } from "./banner";
import { Archivements } from "./archivements";
import { CurriculumVitae } from "./curriculumVitae";
import { Contact } from "./contact";
import { Layout } from "../../components/layout";
import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebase";

export function Home() {
  useEffect(() => {
    logEvent(analytics, "home_page");
  }, []);

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12}>
          <Banner />
          <Archivements />
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
