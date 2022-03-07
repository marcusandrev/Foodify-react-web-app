import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import Vegan from "../assets/fruits2/1.png";
import bfast from "../assets/fruits2/2.png";
import prot from "../assets/fruits2/3.png";
import fruit from "../assets/fruits2/6.png";
import low from "../assets/fruits2/4.png";
import dinner from "../assets/fruits2/5.png";

import { Link, useHistory } from "react-router-dom";

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Link to="/breadcrumbstwo">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={Vegan} alt="breakfast" />
            </CardActionArea>
          </Card>
        </Link>
      </Grid>

      <Grid item xs={4}>
        <Link to="/breadcrumbstwo">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={bfast} alt="green iguana" />
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link to="/breadcrumbstwo">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={prot} alt="green iguana" />
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link to="/breadcrumbstwo">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={fruit} alt="green iguana" />
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link to="/breadcrumbstwo">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={low} alt="green iguana" />
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link to="/breadcrumbstwo">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={dinner} alt="green iguana" />
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </React.Fragment>
  );
}

function fruits2() {
  return (
    <Box
      sx={{
        flexGrow: 2,
        width: "80%",
        height: "70%",
        justifyContent: "center",
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 30,
      }}
    >
      <Grid container spacing={6}>
        <Grid container item spacing={6}>
          <FormRow />
        </Grid>
        {/* <Grid container item spacing={6}>
        <FormRow />
      </Grid>
      <Grid container item spacing={6}>
        <FormRow />
      </Grid> */}
      </Grid>
    </Box>
  );
}

export default fruits2;
