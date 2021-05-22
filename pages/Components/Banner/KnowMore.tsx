import * as React from "react";
import Button from "@material-ui/core/Button";

export interface KnowMoreProps {}

const KnowMore: React.FC<KnowMoreProps> = () => {
  return (
    <div>
      {" "}
      <Button variant="contained" className="bio_button">
        Know More
      </Button>
    </div>
  );
};

export default KnowMore;
