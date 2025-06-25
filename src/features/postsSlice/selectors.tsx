import { Map } from "immutable";
import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";

const posts = (state: RootState) => state.posts;

const postsDataSelector = createSelector(
  posts,
  (postsState: Map<string, any>) => {
    return postsState.get("postsData").toJS();
  }
);

export { postsDataSelector };
