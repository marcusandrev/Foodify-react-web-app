import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//setting themes
import themeObject from "./util/theme";

//MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";

//pages
import Landing from "./pages/landing";
import Login from "./pages/login";
import Gallery from "./pages/gallery";
import Breadcrumbs1 from "./pages/breadcrumbs1";
import Breadcrumbs2 from "./pages/breadcrumbs2";



const theme = createTheme(themeObject);
//theme is depending if there is palette/specific themes; check out util folder to see this (theme.js)

function App() {
  return (
    <ThemeProvider theme={theme}>
   
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/breadcrumbs1" element={<Breadcrumbs1 />} />
          <Route path="/breadcrumbs2" element={<Breadcrumbs2 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;