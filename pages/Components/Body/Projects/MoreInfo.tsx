import * as React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { Popover } from "antd";
import "antd/dist/antd.css";

export interface MoreInfoButtonProps {}

const MoreInfoButton: React.FC<MoreInfoButtonProps> = (props) => {
  const content = (
    <Grid>
      <Typography className="title">
        Framework: <span className="subtitle"> React.js</span>{" "}
      </Typography>

      <Typography className="title">
        Hooks:{" "}
        <span className="subtitle">
          {" "}
          useState, useEffect, useContext, useReducer, useRef
        </span>
      </Typography>
      <Typography className="title">
        Libraries:{" "}
        <span className="subtitle"> Material UI, React Responsive,</span>
      </Typography>
    </Grid>
  );

  return (
    <React.Fragment>
      <Popover
        placement="bottom"
        content={content}
        arrowPointAtCenter={true}
        autoAdjustOverflow
        color="#1f232c"
      >
        <Button variant="contained" className="project_button">
          More Info
        </Button>
      </Popover>
    </React.Fragment>
  );
};

export default MoreInfoButton;
