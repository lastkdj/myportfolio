import * as React from "react";
import Button from "@material-ui/core/Button";

export interface BannerButtonProps {}

const BannerButton: React.FC<BannerButtonProps> = () => {
  const goToDocument = () => {
    window.open(
      "https://drive.google.com/file/d/1TzbQfSnfpJZjP00QGUJSAouSDTcCyFbn/view"
    );
  };

  return (
    <div>
      <Button variant="contained" className="bio_button" onClick={goToDocument}>
        Download CV
      </Button>
    </div>
  );
};

export default BannerButton;
