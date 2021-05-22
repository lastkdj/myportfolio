import * as React from "react";
import Button from "@material-ui/core/Button";

export interface KnowMoreButtonProps {}

const KnowMoreButton: React.FC<KnowMoreButtonProps> = () => {
  return (
    <div>
      {" "}
      <Button variant="contained" className="bio_button">
        Know More
      </Button>
    </div>
  );
};

export default KnowMoreButton;
