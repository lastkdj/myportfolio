import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import CarouselComponent from "./Carousel";

export interface SkillsetProps {}

const Skillset: React.FC<SkillsetProps> = () => {
  return (
    <Grid container justify="center" className="project_container" id="project">
      <Grid container justify="center" item xs={12}>
        <Grid className="project_span_container">
          <Grid className="project_span_befeore"></Grid>
          <Typography className="project_span">PROJECTS</Typography>
          <Grid className="project_span_after"></Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" item xs={12}>
        <Typography className="project_tittle">Latest Projects</Typography>
      </Grid>
      <Grid
        container
        justify="center"
        item
        xs={12}
        className="project_grid_carousel"
      >
        <CarouselComponent />
      </Grid>
    </Grid>
  );
};

export default Skillset;
