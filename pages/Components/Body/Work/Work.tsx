import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import Jobs from "./Jobs";

export interface WorkProps {}

const Work: React.SFC<WorkProps> = () => {
  return (
    <Grid container justify="center" className="skills_container">
      <Grid container justify="center" item xs={12}>
        <Grid className="skills_span_container">
          <Grid className="skills_span_befeore"></Grid>
          <Typography className="skills_span">WORK</Typography>
          <Grid className="skills_span_after"></Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" item xs={12}>
        <Typography className="skills_tittle">Job Background</Typography>
      </Grid>
      <Grid container item xs={10} className="job_grid">
        <Jobs />
      </Grid>
    </Grid>
  );
};

export default Work;
