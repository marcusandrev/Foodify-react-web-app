import React from "react";

//log in card
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";

//MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Loginfooter from "../components/loginfooter";
// import { Link, useHistory } from "react-router-dom";

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

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "53vh",
    width: 538,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <h2 style={{ color: "#FFB966" }}>Welcome</h2>
            <p>Please enter your account details.</p>
          </Grid>
          <label>Email</label>
          <TextField
            placeholder="Enter your e-mail"
            variant="outlined"
            fullWidth
            required
          />
          <label>Password</label>
          <TextField
            placeholder="Enter your password"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            {/* <Link
              to="/breadcrumbs1"
              style={{ textDecoration: "none", color: "#FFFF" }}
            > */}
              Log In
            {/* </Link> */}
          </Button>
          <Typography align="right">
            <Link href="#">Forgot password ?</Link>
          </Typography>
        </Paper>
        <Typography align="center">
          {" "}
          Do you have an account?
          <Link href="#" style={{ paddingLeft: "6px" }}>
            Sign Up
          </Link>
        </Typography>
      </Grid>
      <Loginfooter />
    </ThemeProvider>
  );
};

export default Login;
