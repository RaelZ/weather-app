import { Grid } from "@mui/material";
import moment from "moment";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="35px"
      style={{ boxShadow: '0 -2px 6px #0000001F' }}
    >
      {`QODELESS ${moment().format("yyyy")}`}
    </Grid>
  );
};

export default Footer;
