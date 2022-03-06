import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import logo from "../assets/foodify.png";


//setting themes
// import theme from "../util/theme";

//MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB966',
    },
    secondary: {
      main: '#FFFF'
    }
  }
})

function Navbar1() {
  return (
   <ThemeProvider theme={theme}>
    <Box sx={{mt: 6}}>
      <AppBar position="absolute"  style={{ background: 'transparent', boxShadow: 'none', overflow: 'hidden'}} sx={{pr: 5, pl: 5, pt: 5}} >
        <Toolbar>
          <IconButton
            size="medium"
            color="inherit"
            aria-label="menu"
          >


            <img src={logo} sx={{ flexGrow: 1 }} />
          </IconButton>
          
  
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button variant="contained" sx={{  flexDirection: 'row-reverse'  }} style={{background: "##FFB966"}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
    
  );
}

export default Navbar1;
