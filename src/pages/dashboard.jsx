import React from 'react'

import Navbar3 from '../components/navbar3';

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
});


function Dashboard() {
  return (
    <ThemeProvider theme={theme}>
        <Navbar3 />
    <h1>hey</h1>
    </ThemeProvider>
  )
}

export default Dashboard