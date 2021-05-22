import * as React from "react";
import Button from "@material-ui/core/Button";

export interface BannerButtonProps {}

const BannerButton: React.FC<BannerButtonProps> = () => {
  return (
    <div>
      <Button variant="contained" className="bio_button">
        Download CV
      </Button>
    </div>
  );
};

export default BannerButton;
