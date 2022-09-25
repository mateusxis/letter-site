import React from "react";
import Typography from "@mui/material/Typography";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © Mateusxis 🦎 "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
