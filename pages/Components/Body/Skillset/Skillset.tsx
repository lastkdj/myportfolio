import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import ReactPaper from "./ReactPaper";
import NextPaper from "./NextPaper";
import TypePaper from "./TypePaper";
import Sass from "./SassPaper";
import Frontend from "./Frontend";
import Material from "./Material";
import Redux from "./Redux";
import Firebase from "./Firebase";
import Networking from "./Networking";
import Design from "./Design";

export interface SkillsetProps {}

const Skillset: React.FC<SkillsetProps> = () => {
  return (
    <Grid container justify="center" className="skills_container">
      <Grid container justify="center" item xs={12}>
        <Grid className="skills_span_container">
          <Grid className="skills_span_befeore"></Grid>
          <Typography className="skills_span">SKILLS</Typography>
          <Grid className="skills_span_after"></Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" item xs={12}>
        <Typography className="skills_tittle">Skills Set</Typography>
      </Grid>
      <hr className="about_hr" />
      <Grid
        container
        item
        justify="center"
        xs={12}
        className="skills_subtittle_container"
        id="skills"
      >
        <Typography className="skills_subtittle">
          My Current Programming Stack
        </Typography>
      </Grid>
      <Grid
        container
        item
        justify="center"
        xs={12}
        className="skills_grid_containerfirst"
      >
        <ReactPaper />
        <NextPaper />
        <TypePaper />
        <Sass />
      </Grid>
      <Grid
        container
        item
        justify="center"
        xs={12}
        className="skills_grid_containerfirst"
      >
        {" "}
        <Material />
        <Redux />
        <Firebase />
        <Frontend />
      </Grid>
      <Grid
        container
        item
        justify="center"
        lg={12}
        xl={8}
        className="skills_grid_containerfirst"
      >
        <Networking />
        <Design />
      </Grid>
    </Grid>
  );
};

export default Skillset;
