import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewPostService, deletePostService, editPostService, getAllPostService, getpostUserService } from "../../Service/PostService";

 const initialState = {
    posts: [],
    userPosts: []
 }

 export const getAllPost = createAsyncThunk("posts/getAllpost",async(_,{rejectWithValue}) =>{
     try {
         const response = await getAllPostService()
         return response.data
     } catch (error) {
         return rejectWithValue(error.response)
     }
 })

export const getPostByUser = createAsyncThunk("posts/getPostByUser",async(username,{rejectWithValue}) => {
    try {
        const response = await getpostUserService(username)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response)
    }
})

export const addNewPost = createAsyncThunk("posts/addNewPost",async(postData,{rejectWithValue}) => {
    try {
        const token = localStorage.getItem('token')
        const response = await addNewPostService(postData,token)
        return response.data
    } catch (error) {
       return rejectWithValue(error.response)
    }
})

export const editPost = createAsyncThunk("posts/editPost",async(postData,{rejectWithValue}) => {
    try {
       const token = localStorage.getItem("token")
       const response = await editPostService(postData,token)
       return response.data
    } catch (error) {
       return rejectWithValue(error.response)
    }
})

export const deletePost = createAsyncThunk("posts/deletePost",async(postId,{rejectWithValue,}) => {
    try {
        const token = localStorage.getItem("token")
        const response = await deletePostService(postId,token)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response)
    }
})


 const postSlice = createSlice({
     name: "posts",
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
        [getPostByUser.pending] : (state) => {
            state.postStatus = "pending"
        },
        [getPostByUser.fulfilled] : (state,action) => {
            state.postStatus = "fulfilled";
            state.userPosts = action.payload.posts.reverse()
        },
        [getPostByUser.rejected] : (state,action) => {
            state.postStatus = "rejected";
            state.userPosts = action.payload
        },
        [addNewPost.pending] : (state) => {
            state.postStatus = "pending"
        },
        [addNewPost.fulfilled]: (state,action) =>{
            state.postStatus = "fulfilled";
            state.posts = action.payload.posts.reverse()
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

 export default postSlice.reducer