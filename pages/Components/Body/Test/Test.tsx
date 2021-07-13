import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { Grid } from "@material-ui/core";

const Test = () => {
  const contentStyle: object = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Grid style={{ width: "50%" }}>
      <Carousel autoplay>
        <div style={contentStyle}>
          <img src="https://picsum.photos/200" />
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </Grid>
  );
};

export default Test;
