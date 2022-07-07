import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../Feature/AuthSlice";
import {PostReducer} from "../Feature/PostSlice";
import  {postModalRedcer } from "../Feature/PostModalSlice";
import { allUsersReducer } from "../Feature/userSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: PostReducer,
        postModal: postModalRedcer,
        allUsers: allUsersReducer
    }
})