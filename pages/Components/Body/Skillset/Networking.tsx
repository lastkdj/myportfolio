import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Cisco from "./Cisco";
import Aruba from "./Aruba";

export interface NetworkingProps {}

const Networking: React.SFC<NetworkingProps> = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.7,
    };

    const observerCallback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          // fade in observed elements that are in view
          entry.target.classList.replace("fadeOutSkills", "fadeInBot");
        } else {
          // fade out observed elements that are not in view
          return;
        }
      });
    };

    const fadeElms = document.querySelectorAll(".skills_react_grid");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Grid
      container
      justify="flex-end"
      item
      md={12}
      lg={6}
      className="skills_react_grid fadeOutSkills"
    >
      <Grid container item justify="center" xs={12}>
        <Typography className="skills_other_tittle">
          My Networking Knowledge
        </Typography>
      </Grid>
      <Grid container item justify="space-around" xs={12}>
        <Cisco />
        <Aruba />
      </Grid>
    </Grid>
  );
};

export default Networking;
