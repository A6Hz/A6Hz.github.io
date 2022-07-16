import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export function CurriculumVitae() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section
        id="cv"
        style={{
          padding: 30,
          height: 600,
          backgroundImage:
            "linear-gradient(to left bottom, #43008c, #2e1775, #221d5b, #1d1d40, #1b1b24)",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            CurriculumVitae
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="outlined" onClick={handleClickOpen}>
              Open alert dialog
            </Button>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              BackdropProps={{ style: { backdropFilter: "blur(3px)" } }}
            >
              <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
              </DialogTitle>
              <DialogContent>
                <Card sx={{ borderRadius: 2 }} elevation={0}>
                  <CardContent>
                    {/*<iframe
                      title="CV"
                      src="https://docs.google.com/presentation/d/e/2PACX-1vTG1TstIUSZ4bqSfUr_ewj15ICsdzJC-_GLw2RV1jZ5-PYL0JINuSXE0Tlqqs4hrjr2UQswkK0yCGNQ/embed?start=false&loop=true&delayms=60000"
                      frameBorder="0"
                      width="100%"
                      height="800"
                      allowFullScreen={true}
                    ></iframe> */}
                  </CardContent>
                </Card>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
        [ astro IMG esquina derecha ]
      </section>
    </>
  );
}
