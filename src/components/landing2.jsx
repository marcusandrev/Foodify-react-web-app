import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import undraw_healthy from "../assets/landing2/undraw_healthy_options_sdo3_1.png";
import undraw_online_groceries_ng from "../assets/landing2/undraw_online_groceries_ng.png";
import undraw_tasting_re from "../assets/landing2/undraw_tasting_re.png";

//MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFB966",
    },
    secondary: {
      main: "#FFFF",
    },
  },
  Card: {
    width: 300,
    margin: "auto",
  },
  Media: {
    height: "100%",
    width: "100%",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Landing2() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        columns={16}
        alignItems="center"
        justifyContent="center"
        sx={{ pb: 10, pt: 10 }}
      >
        <Grid item xs={8} textAlign="center">
          <img
            src={undraw_healthy}
            style={{
              width: "auto",
              height: "250px",
              ml: "auto",
              mr: "auto",
              textAlign: "center",
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <h1>Curate Your Preferences</h1>
          <Grid lg={10}>
            <Grid item lg={15}>
              <p>
                Start creating your first meal plan with us today and discover
                products and dishes catered to your own liking
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        columns={16}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={8} textAlign="right">
          <h1>Choose your meals</h1>

          <p style={{ textAlign: "right", paddingRight: "10" }} sx={{ p: 0 }}>
            We keep dinner interesting. From top-rated favorites and
          </p>

          <p>health-conscious options to Premium dishes and more,</p>
          <p>variety is always on the menu.</p>
        </Grid>

        <Grid item xs={8} textAlign="center">
          <img
            src={undraw_online_groceries_ng}
            style={{
              width: "auto",
              height: "250px",
              ml: "auto",
              mr: "auto",
              textAlign: "center",
            }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        columns={16}
        alignItems="center"
        justifyContent="center"
        sx={{ pb: 10, pt: 10 }}
      >
        <Grid item xs={8} textAlign="center">
          <img
            src={undraw_tasting_re}
            style={{
              width: "auto",
              height: "250px",
              ml: "auto",
              mr: "auto",
              textAlign: "center",
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <h1>Cook, create, enjoy</h1>

          <Grid lg={10}>
            <Grid item lg={15}>
              <p>
                Follow our easy step-by-step recipes to learn new skills, try
                new tastes, and make you and your family amazing meals.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Landing2;
