import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllUserService } from "../../Service/ProfileService"


const initialState = {
    allUsers : [],
    userStatus: '',
}

export const getAllUser = createAsyncThunk("post/getAllUser",async(_,{rejectWithValue}) => {
     try {
        const response = await getAllUserService();
        return  response.data
     } catch (error) {
        return rejectWithValue(error.response)
     }
}) 


const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUser.pending]: (state) => {
            state.userStatus = "pending"
        },
        [getAllUser.fulfilled] : (state,action) => {
            state.userStatus = "fulfilled";
            state.allUsers = action.payload.users
        },
        [getAllUser.rejected] : (state,action) => {
            state.userStatus = "rejected";
            state.allUsers = action.payload
        }
    }
})

export default profileSlice.reducer