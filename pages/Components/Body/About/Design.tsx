import React, { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";

export default function Design({ load }) {
  const [progress, setProgress] = React.useState<number>(0);

  useEffect(() => {
    if (load) {
      setTimeout(() => {
        setProgress(75);
      }, 1000);
    }
  }, [load]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className="grid_element"
    >
      {" "}
      <Grid
        container
        direction="column"
        alignItems="center"
        className="grid_element"
      >
        <CircularProgress
          thickness={1.5}
          size={90}
          variant="determinate"
          value={progress}
          className="programming_circle"
        />
        {load ? (
          <CountUp start={0} end={75} delay={0}>
            {({ countUpRef }) => (
              <div className="centered_text">
                <span ref={countUpRef} />
                <Typography className="percentage">%</Typography>
              </div>
            )}
          </CountUp>
        ) : null}
      </Grid>
      <Typography className="programming_text">Design</Typography>
      <Typography className="programming_yeartext">
        2 Years Experience
      </Typography>
    </Grid>
  );
}
