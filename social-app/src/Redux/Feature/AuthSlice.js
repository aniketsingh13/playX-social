import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginServices } from "../../Service/AuthService";

const initialState = {
  token: localStorage.getItem("token") || null,
  user:  JSON.parse(localStorage.getItem("user")) || null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await loginServices(email, password);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return{
        user: null,
        token: null
      }
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.authStatus = "loading";
    },
    [loginUser.fulfilled]: (state, action) => {
     state.authStatus = "fulfilled";
     state.token = action.payload.encodedToken;
     state.user = action.payload.foundUser;
     localStorage.setItem("token",state.token);
     localStorage.setItem("user",JSON.stringify(state.user))
    },
    [loginUser.rejected]: (state, action) => {
      state.authStatus = "rejected";
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
