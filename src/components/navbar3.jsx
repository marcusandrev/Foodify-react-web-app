import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import logo from "../assets/foodify.png";
import { Link, useHistory } from "react-router-dom";

//setting themes
// import theme from "../util/theme";

//MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Login } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFB966",
    },
    secondary: {
      main: "#FFFF",
    },
  },
});

function Navbar3() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: 6 }}>
        <AppBar
          position="absolute"
          style={{
            background: "transparent",
            boxShadow: "none",
            overflow: "hidden",
          }}
          sx={{ pr: 5, pl: 5, pt: 5 }}
        >
          <Toolbar>
            <IconButton size="medium" color="inherit" aria-label="menu">
              <img src={logo} style={{ width: "100%", height: "auto" }} />
            </IconButton>

          <div style={{display: 'flex', paddingLeft: '100px'}}>
            <Button sx={{ my: 2, color: "primary", display: "block", mr: 10}}>
            <Link
                to="/gallery"
                style={{ textDecoration: "none" }}
              >
              Products
              </Link>
            </Button>

            <Button sx={{ my: 2, color: "primary", display: "block" }}>
            <Link
                to="/dashboard"
                style={{ textDecoration: "none" }}
              >
              Dashboard
              </Link>
            </Button>
            </div>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button
              variant="contained"
              sx={{ flexDirection: "row-reverse" }}
              style={{ background: "##FFB966" }}
            >
              <Link
                to="/"
                style={{ textDecoration: "none", color: "#FFFF" }}
              >
                Log Out
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Navbar3;
