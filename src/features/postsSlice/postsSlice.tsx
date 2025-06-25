import { fromJS, Map } from "immutable";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PostType = {
  id: string;
  title: string;
  createdAt: number;
  description: string;
};

interface PostsState {
  postsData: PostType[];
}

const initialState: Map<string, any> = fromJS<PostsState>({
  postsData: [],
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action: PayloadAction<PostType>) => {
      const currentState = state.get("postsData");
      const updatedPosts = currentState.unshift(fromJS(action.payload));
      return state.set("postsData", updatedPosts);
    },
  },
});

export const { addPosts } = postsSlice.actions;
export default postsSlice.reducer;
