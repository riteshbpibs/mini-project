import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import PostsBox from "./PostsBox";
import { PostType } from "features/postsSlice/postsSlice";
import { postsDataSelector } from "features/postsSlice/selectors";
import { StyledBox } from "assets/StyledComponents/base/StyledBox";

const PostsBoxContainer = () => {
  const selector = useSelector(
    createStructuredSelector({
      posts: postsDataSelector,
    })
  );

  const { posts } = selector;

  return (
    <StyledBox className="flex flex-col" gap="20px">
      {posts &&
        posts.length > 0 &&
        posts.map((item: PostType) => {
          return <PostsBox key={item.id} data={item} />;
        })}
    </StyledBox>
  );
};

export default PostsBoxContainer;
