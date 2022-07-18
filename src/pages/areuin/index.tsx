import { Grid } from "@mui/material";
import { Layout } from "../../components/layout";

export function Areuin() {
  return (
    <>
      <Layout>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 style={{ margin: 0 }}>Areuin</h1>
            The game is won from the inside
          </Grid>

          <Grid item xs={12}>
            Body --- parallax --
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
