import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Typist from "react-typist";

const TypistComponent = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <Grid>
      {count ? (
        <Typist avgTypingDelay={60} onTypingDone={() => setCount(0)}>
          <span className="bio_span"> React.js, Javascript, Css</span>
          <Typist.Backspace count={16} delay={1200} />
          <span className="bio_span"> Next.js, Typescript, Sass,</span>
        </Typist>
      ) : (
        ""
      )}
    </Grid>
  );
};

export default TypistComponent;
