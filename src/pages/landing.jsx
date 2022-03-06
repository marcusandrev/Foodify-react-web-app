import React, { Component } from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

//button imports
import Stack from "@mui/material/Stack";


import Navbar1 from "../components/navbar1";
import Landing2 from "../components/landing2";
import Landingfooter from "../components/landingfooter";

class Landing extends Component {
  state = {
    curTime: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: this.state.curTime >= 20 ? 0 : this.state.curTime + 1,
      });
    }, 100);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Navbar1 />
       
        <Landing2 />
        <Landingfooter />

      </div>
    );
  }
}
export default Landing;
