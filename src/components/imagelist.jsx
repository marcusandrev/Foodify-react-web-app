import React, { Component } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import Vegan from "../assets/breadcrumbs1/1.png";
import bfast from "../assets/breadcrumbs1/2.png";
import prot from "../assets/breadcrumbs1/3.png";
import fruit from "../assets/breadcrumbs1/9.png";
import low from "../assets/breadcrumbs1/4.png";
import dinner from "../assets/breadcrumbs1/5.png";
import lunch from "../assets/breadcrumbs1/6.png";
import vege from "../assets/breadcrumbs1/7.png";
import quick from "../assets/breadcrumbs1/8.png";

import { Link, useHistory } from "react-router-dom";

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Link to="/breadcrumbsone">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={Vegan} alt="breakfast" />
            </CardActionArea>
          </Card>
        </Link>
      </Grid>

      <Grid item xs={4}>
        <Link to="/breadcrumbsone">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={bfast} alt="green iguana" />
            </CardActionArea>
          </Card>
        </Link>
      </Grid>

      <Grid item xs={4}>
        <Link to="/breadcrumbsone">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={prot} alt="green iguana" />
            </CardActionArea>
          </Card>
        </Link>
      </Grid>

      <Grid item xs={4}>
        <Link to="/breadcrumbsone">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={fruit} alt="green iguana" />
            </CardActionArea>
          </Card>
        </Link>
      </Grid>

      <Grid item xs={4}>
        <Link to="/breadcrumbsone">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={low} alt="green iguana" />
            </CardActionArea>
          </Card>
        </Link>
      </Grid>

      <Grid item xs={4}>
        <Link to="/breadcrumbsone">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={dinner} alt="green iguana" />
            </CardActionArea>
          </Card>
        </Link>
      </Grid>

      <Grid item xs={4}>
        <Link to="/breadcrumbsone">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={lunch} alt="green iguana" />
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link to="/breadcrumbsone">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={vege} alt="green iguana" />
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link to="/breadcrumbsone">
          <Card>
            <CardActionArea>
              <CardMedia component="img" image={quick} alt="green iguana" />
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </React.Fragment>
  );
}

function ImageList() {
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
export default ImageList;
