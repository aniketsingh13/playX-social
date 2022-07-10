import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { updateUserProfileService } from "../../Service/ProfileService"



const initialState = {
    userProfile: {},
    userPosts: [],
}





const ProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers: {},
    extraReducers: {
        
    }
})


export const userProfileReducer =  ProfileSlice.reducer