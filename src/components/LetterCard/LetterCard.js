import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PostList from "../PostList";

const style = {
  marginTop: '15px',
  bgcolor: 'background.paper',
};

const LetterCard = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
  posts,
}) => {
  return (
    <Card sx={style} color='default'>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {username}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {email}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {address}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {phone}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {website}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {company}
        </Typography>
        <PostList posts={posts} />
      </CardContent>
    </Card>
  );
};

module.exports = LetterCard;
