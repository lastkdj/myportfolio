import * as React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import BannerButton from "./BannerButton";
import KnowMore from "./KnowMore";
import TypistComponent from "./TypistComponent";
import Image from "next/image";

export interface Props {}

const Banner: React.FC<Props> = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 960px)" });

  return (
    <Grid container justify="center" className="banner_container" id="home">
      <Grid
        container
        alignItems="flex-end"
        justify="center"
        item
        xs={4}
        className="avatar_container"
      >
        <Image src="/profilefail.png" alt="" width="500px" height="880px" />
      </Grid>

      <Grid
        container
        item
        xs={12}
        sm={10}
        md={4}
        direction="column"
        className="bio_container"
      >
        <Typography className="bio_tittle"># RESUME</Typography>
        <Typography className="bio_greet">Hi, I'm</Typography>
        <Typography className="bio_name">Ricardo Garcia</Typography>
        <TypistComponent />
        <Typography className="bio_description">
          I am a computer engineer with 7 years of experience in the area of
          computer science. Welcome to my online resume, here you will find all
          the information regarding my professional experience.
        </Typography>
        <Grid container item className="bio_buttons_container">
          <Grid item xs={4} sm={3} md={5} lg={4} xl={3} className="bio_buttons">
            <KnowMore />
          </Grid>
          <Grid item xs={4} sm={3} md={5} lg={4} xl={3} className="bio_buttons">
            <BannerButton />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Banner;
