import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../Feature/AuthSlice";
import {PostReducer} from "../Feature/PostSlice";
import  {postModalRedcer } from "../Feature/PostModalSlice";
import { allUsersReducer } from "../Feature/userSlice";
import { userProfileReducer } from "../Feature/ProfileSlice";
import { profileEditModalReducer } from "../Feature/ProfileModalSlice";



export const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: PostReducer,
        postModal: postModalRedcer,
        allUsers: allUsersReducer,
        userProfile: userProfileReducer,
        profileEditModal: profileEditModalReducer
    }
})