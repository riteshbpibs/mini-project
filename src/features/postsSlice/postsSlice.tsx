import { fromJS, Map } from "immutable";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "helpers/utils";

export type PostType = {
  id: string;
  title: string;
  createdAt: number;
  description: string;
};

interface PostsState {
  postsData: PostType[];
}

let localInitialState = [];
const localPostsData = getLocalStorage("posts");
if (localPostsData) {
  const parsedPostsData = JSON.parse(localPostsData);
  localInitialState = parsedPostsData;
}

const initialState: Map<string, any> = fromJS<PostsState>({
  postsData: localInitialState || [],
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action: PayloadAction<PostType>) => {
      const currentState = state.get("postsData");
      const updatedPosts = currentState.unshift(fromJS(action.payload));
      setLocalStorage("posts", JSON.stringify(updatedPosts));
      return state.set("postsData", updatedPosts);
    },
  },
});

export const { addPosts } = postsSlice.actions;
export default postsSlice.reducer;
