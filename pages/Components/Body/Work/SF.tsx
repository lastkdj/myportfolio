import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import "antd/dist/antd.css";
import Image from "next/image";

export interface SFProps {}

const SF: React.SFC<SFProps> = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid container item xs={4} alignItems="center">
          <Typography className="jobtitle">Soletanche Freyssinet</Typography>
        </Grid>
        <Grid container item xs={4} alignItems="center" className="job_logo">
          <Image src="/sf.png" alt="" width="50px" height="50px" />
        </Grid>
      </Grid>
      <Typography className="jobsubtitle">
        IT Engineer Area LATAM <span style={{ color: "#13D400" }}>Current</span>
      </Typography>
      <Typography className="jobdetails">
        O365 Administrator, Windows AD Server Manager, Azure AD Managment, GPO
        Configuration, Paloalto / Cisco Firewall Managment. MS Teams Webinar
        Relator, PowerBi Reports Digitalization.
      </Typography>
    </React.Fragment>
  );
};

export default SF;
