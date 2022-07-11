import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { followUsersService, getAllUsersService, unfollowUserService } from "../../Service/userService";
import { updateUser } from "./AuthSlice";



const initialState = {
    users: [],
    userLoading: false
}

export const getAllUsers = createAsyncThunk("allUsers/getAllUsers",async(rejectWithValue) => {
    try {
        const {data} = await getAllUsersService();
        const {users} = data;
        return users
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const followUsers = createAsyncThunk("allUsers/followUsers",async({token,userId,dispatch},{rejectWithValue}) => {
     try {
        const {data} = await followUsersService(token,userId);
        dispatch(updateUser({token: token,userData: data.user}));
        return data;
     } catch (error) {
        return rejectWithValue(error)
     }
})

export const unfollowUser = createAsyncThunk("allUsers/unfollowUser",async({token,userId,dispatch},{rejectWithValue}) => {
    try {
        const {data} = await unfollowUserService(token,userId);
        dispatch(updateUser({token: token,userData: data.user}));
          return data
    } catch (error) {
        return rejectWithValue(error)
    }
})


const allUsersSlice = createSlice({
    name: "allUsers",
    initialState,
    reducers: {},
    extraReducers:{
        [getAllUsers.fulfilled] : (state,action) => {
            state.users = action.payload;
            state.userLoading = false
        },
        [getAllUsers.pending] : (state) => {
             state.userLoading = true
        },
        [followUsers.fulfilled]: (state,action) => {
            const {followUser} = action.payload;
            state.users = [...state.users].map((user) => user._id === followUsers?._id ? followUser : user)
        },
        [unfollowUser.fulfilled] : (state,action) => {
            const {followUser} = action.payload;
            state.users = [...state.users].map((user) => user._id === followUser?._id ? followUser : user) 
        }
    }
})

export const allUsersReducer = allUsersSlice.reducer;