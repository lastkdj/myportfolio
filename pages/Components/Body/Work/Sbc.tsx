import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Timeline } from "antd";
import "antd/dist/antd.css";
import Image from "next/image";

export interface SbcProps {}

const Sbc: React.SFC<SbcProps> = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid container item xs={4} alignItems="center">
          <Typography className="jobtitle">Soletanche Bachy Chile</Typography>
        </Grid>
        <Grid container item xs={4} alignItems="center" className="job_logo">
          <Image src="/sbc.png" alt="" width="50px" height="50px" />
        </Grid>
      </Grid>
      <Typography className="jobsubtitle">
        IT Analist <span style={{ color: "#979797" }}>2018-2020</span>{" "}
      </Typography>
      <Typography className="jobdetails">
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in
      </Typography>
    </React.Fragment>
  );
};

export default Sbc;
