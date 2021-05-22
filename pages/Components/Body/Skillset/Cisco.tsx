import * as React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";

export interface CiscoProps {}

const Cisco: React.SFC<CiscoProps> = () => {
  return (
    <Grid
      container
      item
      xs={12}
      sm={5}
      justify="center"
      className="skills_grid_margin"
    >
      <Paper variant="outlined" className="other_skills_paper">
        <Grid container justify="center" alignItems="center">
          <Grid container justify="center" item xs={4} sm={12} xl={4}>
            <img
              src={"https://i.imgur.com/PCDGdzS.png"}
              className="other_skills_icon"
            />
          </Grid>
          <Grid container justify="center" item xs={8} sm={12} xl={8}>
            <Typography className="other_skills_description">
              CLI config, Instalation, managment
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Cisco;
