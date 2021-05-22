import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography } from "@material-ui/core";

export interface FirebaseProps {}

const Firebase: React.FC<FirebaseProps> = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.7,
    };

    const observerCallback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          // fade in observed elements that are in view
          entry.target.classList.replace("fadeOutSkills", "fadeInLeft");
        } else {
          // fade out observed elements that are not in view
          return;
        }
      });
    };

    const fadeElms = document.querySelectorAll(".skills_firebase_grid");

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    fadeElms.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Grid
      container
      item
      sm={6}
      md={3}
      lg={3}
      xl={2}
      justify="center"
      className="skills_firebase_grid fadeOutSkills"
    >
      <Grid container item xs={12} sm={10} justify="center">
        <Paper variant="outlined" className="skills_paper">
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            className="skills_icon_container"
          >
            <Grid container justify="center" item xs={4} sm={12} xl={12}>
              <img
                src={"https://i.imgur.com/fi9DeFs.png"}
                className="skills_icon_typescript"
              />
            </Grid>
            <Grid container justify="center" item xs={8} sm={12} xl={12}>
              <Typography className="skills_name">Github</Typography>
              <Typography className="skills_description">
                Version managment and Deployment
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>{" "}
    </Grid>
  );
};

export default Firebase;
