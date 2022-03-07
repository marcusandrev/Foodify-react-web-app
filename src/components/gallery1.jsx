import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

import Group02585 from "../assets/gallery1/Group02585.png";

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
  typography: {
    fontFamily: "Fredoka",
  },
  paperContainer: {
    backgroundImage: `url(${Group02585})`,

    backgroundSize: "cover",
  },
});

function gallery1() {
  return (
    <ThemeProvider theme={theme}>
      {/* <div style={theme.paperContainer}> */}

      <Grid
        container
        spacing={2}
        columns={16}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h2" component="div" color="primary" sx={{ mt: 20 }}>
          Discover <font color="black">food categories</font>
        </Typography>
      </Grid>

      <Grid
        container
        spacing={2}
        columns={16}
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ mt: 5, maxWidth: 600, textAlign: "center" }}
        >
          Choose from an ever-changing mix of meat, fish, fruits, vegetables,
          diabetes friendly and health-conscious offerings.
        </Typography>
      </Grid>

      <Grid
        container
        spacing={2}
        columns={16}
        alignItems="center"
        justifyContent="center"
        marginTop={5}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            // responsive design for searchbar
            [theme.breakpoints.up('xl')]: {
              width: '50vw',
            },
            [theme.breakpoints.up('lg')]: {
              width: '60vw',
            },
            [theme.breakpoints.up('md')]: {
              width: '70vw',
            },
            [theme.breakpoints.up('sm')]: {
              width: '80vw',
            },  
          }}
        >
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for food categories"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
      </Grid>
      {/* </div> */}
    </ThemeProvider>
  );
}

export default gallery1;
