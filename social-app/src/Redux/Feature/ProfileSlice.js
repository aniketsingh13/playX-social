import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchUserPostService,
  fetchUserProfileService,
} from "../../Service/ProfileService";

const initialState = {
  userProfile: {},
  userPosts: [],
};

export const fetchUserProfile = createAsyncThunk(
  "userProfile/fetchUserProfile",
  async ({ username }, { rejectWithValue }) => {
    try {
      const { data } = await fetchUserProfileService(username);
      const { user } = data;
      console.log(user)
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchUserPost = createAsyncThunk(
  "userProfile/fetchUserPost ",
  async ({ username }, { rejectWithValue }) => {
    try {
      const { data } = await fetchUserPostService(username);
      const { posts } = data;
      return posts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const ProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserProfile.fulfilled]: (state, action) => {
      state.userProfile = action.payload;
    },
    [fetchUserPost.fulfilled]: (state, action) => {
      state.userPosts = action.payload;
    },
  },
});

export const userProfileReducer = ProfileSlice.reducer;
