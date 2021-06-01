import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import MoreInfoButton from "./Button";

import Image from "next/image";

interface CarouselComponentProps {}

const CarouselComponent: React.SFC<CarouselComponentProps> = () => {
  return (
    <Grid container justify="center">
      <Grid
        container
        item
        xs={3}
        className="project_image_grid"
        direction="column"
        alignItems="center"
      >
        <Image
          src="/kadajguides2.png"
          alt=""
          width="600px"
          height="300px"
          className="project_carousel_image"
        />
        <Typography className="project_name">Kadaj Gaming</Typography>
        <Typography className="project_description">
          One Page Website
        </Typography>
        <Grid container justify="center" item xs={4}>
          <MoreInfoButton />
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={3}
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
        />
        <Typography className="project_name">ServiceDesk</Typography>
        <Typography className="project_description">
          ServiceDesk / E-commerce
        </Typography>
        <Grid container justify="center" item xs={4}>
          <MoreInfoButton />
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={3}
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
        />
        <Typography className="project_name">Login Page</Typography>
        <Typography className="project_description">
          Simple login prototype
        </Typography>
        <Grid container justify="center" item xs={4}>
          <MoreInfoButton />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CarouselComponent;
