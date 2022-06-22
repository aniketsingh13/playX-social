import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewPostService, deletePostService, editPostService, getAllPostService } from "../../Service/PostService";

 const initialState = {
    posts: [],
 }

 export const getAllPost = createAsyncThunk("post/getAllpost",async(_,{rejectWithValue}) =>{
     try {
         const response = await getAllPostService()
         return response.data
     } catch (error) {
         return rejectWithValue(error.response)
     }
 })



export const addNewPost = createAsyncThunk("post/addNewPost",async(postData,{rejectWithValue}) => {
    try {
        const token = localStorage.getItem('token')
        const response = await addNewPostService(postData,token)
        return response.data.posts
    } catch (error) {
       return rejectWithValue(error.response)
    }
})

export const editPost = createAsyncThunk("post/editPost",async(postData,{rejectWithValue}) => {
    try {
       const token = localStorage.getItem("token")
       const response = await editPostService(postData,token)
       return response.data
    } catch (error) {
       return rejectWithValue(error.response)
    }
})

export const deletePost = createAsyncThunk("post/deletePost",async(postId,{rejectWithValue,}) => {
    try {
        const token = localStorage.getItem("token")
        const response = await deletePostService(postId,token)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response)
    }
})


 const postSlice = createSlice({
     name: "post",
     initialState,
     reducers: {},
     extraReducers: {
         [getAllPost.pending] : (state) => {
             state.postStatus = "pending";
         },
         [getAllPost.fulfilled] : (state,action) => {
            state.postStatus = "fulfilled";
            state.posts = action.payload.posts.reverse()
         },
         [getAllPost.rejected] : (state,action) => {
             state.postStatus = "rejected";
             state.posts = action.payload
        },
        [addNewPost.pending] : (state) => {
            state.postStatus = "pending"
        },
        [addNewPost.fulfilled]: (state,action) =>{
            state.postStatus = "fulfilled";
            state.posts = action.payload.reverse()
        },
        [addNewPost.rejected] : (state,action) =>{
            state.postStatus = "rejected";
            state.posts = action.payload
        },
        [editPost.pending]  : (state) =>{
            state.postStatus = "pending"
        },
        [editPost.fulfilled] : (state,action) =>{
            state.postStatus = "fulfilled";
            state.posts = action.payload.posts.reverse()
        },
        [editPost.rejected] : (state,action) => {
            state.postStatus = "rejected";
            state.posts = action.payload
        },
        [deletePost.pending]: (state) => {
            state.postStatus = "pending"
        },
        [deletePost.fulfilled] : (state,action) =>{
            state.postStatus = "fulfilled";
            state.posts = action.payload.posts.reverse()
        },
        [deletePost.rejected]: (state,action) => {
            state.postStatus = "rejected";
            state.posts = action.payload
        }
         }
 })

 export const PostReducer = postSlice.reducer