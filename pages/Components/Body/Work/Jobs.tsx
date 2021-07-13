import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import "antd/dist/antd.css";
import SF from "./SF";
import Sbc from "./Sbc";
import { Timeline } from "antd";
import Image from "next/image";
import SettingsIcon from "@material-ui/icons/Settings";

export interface JobsProps {}

const Jobs: React.SFC<JobsProps> = () => {
  return (
    <React.Fragment>
      <Grid item xs={6} className="job_left_grid">
        <Timeline>
          <Timeline.Item>
            <SF />
          </Timeline.Item>
          <Timeline.Item>
            <Sbc />
          </Timeline.Item>
        </Timeline>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        item
        xs={6}
        className="job_left_grid"
      >
        <SettingsIcon style={{ fontSize: "3em" }} />
        <Typography> Work in Progress</Typography>
      </Grid>
    </React.Fragment>
  );
};

export default Jobs;
