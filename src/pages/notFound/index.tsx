import swatingGuy from "../../assets/img/emojibest_com_44.gif";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

export function NotFound() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <img
            src={swatingGuy}
            alt="404"
            style={{ width: "100%", maxWidth: 300 }}
          />
          <p style={{ fontSize: 30, color: "GrayText" }}>
            Sorry! Page not found
          </p>
          <Button variant="outlined" href="/">
            Go to home
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
