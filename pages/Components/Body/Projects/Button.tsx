import * as React from "react";
import Button from "@material-ui/core/Button";

export interface MoreInfoButtonProps {}

const MoreInfoButton: React.FC<MoreInfoButtonProps> = () => {
  return (
    <React.Fragment>
      {" "}
      <Button variant="contained" className="project_button">
        More Info
      </Button>
    </React.Fragment>
  );
};

export default MoreInfoButton;
