import React from "react";
import PostCollapse from "../PostCollapse";
import PostDetails from "../PostDetails";

const PostList = ({ posts }) => {
  return posts.map(({ id, title, body }, index) => {
    return (
      <PostCollapse key={`post-${id}`} title={`Post ${index + 1}`}>
        <PostDetails title={title} body={body} />
      </PostCollapse>
    );
  });
};

module.exports = PostList;
