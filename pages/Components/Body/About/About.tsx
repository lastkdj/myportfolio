import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import Programming from "./Programming";
import Networking from "./Networking";
import Design from "./Design";
import Interpersonal from "./Interpersonal";
import KnowMoreButton from "./KnowMoreButton";

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.7,
    };

    const observerCallback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          // fade in observed elements that are in view
          entry.target.classList.replace("fadeOut", "fadeInBot");
          setLoad(true);
        } else {
          // fade out observed elements that are not in view
          return;
        }
      });
    };

    const fadeElms = document.querySelectorAll(".about_grid_container");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Grid container justify="center" className="about_container" id="about">
      <Grid container justify="center" item xs={12}>
        <Grid className="about_span_container">
          <Grid className="about_span_befeore"></Grid>
          <Typography className="about_span">ABOUT</Typography>
          <Grid className="about_span_after"></Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" item xs={12}>
        <Typography className="about_tittle">About Me</Typography>
      </Grid>
      <Grid
        container
        item
        justify="center"
        xs={12}
        className="about_grid_container fadeOut"
      >
        <Grid
          container
          justify="center"
          item
          xs={6}
          sm={3}
          xl={2}
          className="about_grid"
        >
          <Programming load={load} />
        </Grid>

        <Grid
          container
          justify="center"
          item
          xs={6}
          sm={3}
          xl={2}
          className="about_grid"
        >
          <Networking load={load} />
        </Grid>
        {/* <hr className="about_hr" /> */}
        <Grid
          container
          justify="center"
          item
          xs={6}
          sm={3}
          xl={2}
          className="about_grid"
        >
          <Design load={load} />
        </Grid>

        <Grid
          container
          justify="center"
          item
          xs={6}
          sm={3}
          xl={2}
          className="about_grid"
        >
          <Interpersonal load={load} />
        </Grid>
      </Grid>
      <Grid item xs={4} sm={2} md={2} lg={1} xl={1} className="bio_buttons">
        <KnowMoreButton />
      </Grid>
    </Grid>
  );
};

export default About;
