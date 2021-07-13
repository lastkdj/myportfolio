import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import MoreInfo from "./MoreInfo";
import MoreInfoTwo from "./MoreInfoTwo";
import MoreInfoThree from "./MoreInfoThree";
import Image from "next/image";

interface CarouselComponentProps {}

const CarouselComponent: React.SFC<CarouselComponentProps> = () => {
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
        } else {
          // fade out observed elements that are not in view
          return;
        }
      });
    };

    const fadeElms = document.querySelectorAll(".project_fade");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
  }, []);

  const goToGamingSite = () => {
    window.open("https://lastkdj.github.io/Kadaj/");
  };

  const goToServiceDesk = () => {
    window.open("https://lastkdj.github.io/servicedesk/");
  };
  const goToLogin = () => {
    window.open("https://lastkdj.github.io/reversso/");
  };

  return (
    <Grid container justify="center" className="project_fade fadeOut">
      <Grid
        container
        item
        xs={10}
        sm={6}
        md={3}
        direction="column"
        alignItems="center"
        className="project_image_grid"
      >
        {" "}
        <Image
          src="/kadajguides2.png"
          alt=""
          width="600px"
          height="300px"
          className="project_carousel_image"
          onClick={goToGamingSite}
        />
        <Typography className="project_name">Kadaj Gaming</Typography>
        <Typography className="project_description">
          One Page Website
        </Typography>
        <Grid container justify="center" item lg={5} xl={4}>
          <MoreInfo />
        </Grid>{" "}
      </Grid>
      <Grid
        container
        item
        xs={10}
        sm={6}
        md={3}
        className="project_image_grid"
        direction="column"
        alignItems="center"
      >
        <Image
          src="/ecomerce.png"
          alt=""
          width="600px"
          height="300px"
          className="project_carousel_image"
          onClick={goToServiceDesk}
        />
        <Typography className="project_name">ServiceDesk</Typography>
        <Typography className="project_description">
          ServiceDesk / E-commerce
        </Typography>
        <Grid container justify="center" item lg={5} xl={4}>
          {" "}
          <MoreInfoTwo />
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={10}
        sm={6}
        md={3}
        className="project_image_grid"
        direction="column"
        alignItems="center"
      >
        <Image
          src="/login.png"
          alt=""
          width="600px"
          height="300px"
          className="project_carousel_image"
          onClick={goToLogin}
        />
        <Typography className="project_name">Login Page</Typography>
        <Typography className="project_description">
          Simple login prototype
        </Typography>
        <Grid container justify="center" item lg={5} xl={4}>
          <MoreInfoThree />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CarouselComponent;
