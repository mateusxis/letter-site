import React from "react";
import Typography from "@mui/material/Typography";

const PostDetails = ({ title, body }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {body}
      </Typography>
    </>
  );
};

export default PostDetails;
