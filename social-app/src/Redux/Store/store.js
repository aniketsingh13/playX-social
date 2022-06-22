import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../Feature/AuthSlice";
import {PostReducer} from "../Feature/PostSlice";
import  {postModalRedcer } from "../Feature/PostModalSlice";
import profileReducer from "../Feature/ProfileSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        post: PostReducer,
        postModal: postModalRedcer,
        profile: profileReducer
    }
})