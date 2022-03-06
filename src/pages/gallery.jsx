import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

//component imports
import Navbar3 from "../components/navbar3";
import Gallery1 from "../components/gallery1";
import Group02585 from "../assets/gallery1/Group02585.png";
import ImageList from "../components/imagelist";

//MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFB966",
    },
    secondary: {
      main: "#FFFF",
    },
  },
  paperContainer: {
    backgroundImage: `url(${Group02585})`,
    backgroundSize: "cover",
    marginTop: 160,
  },
});

function Gallery() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar3 />
      <div style={theme.paperContainer} xs={{ pt: 50 }}>
        <Gallery1 />
       
      </div>
      <ImageList />
      {/* <menuItems /> */}
      
    </ThemeProvider>
  );
}

export default Gallery;
