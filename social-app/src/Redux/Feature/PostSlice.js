import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCommentService, addNewPostService, deleteCommentService, deletePostService,  disLikeService,  editPostService, getAllPostService, likeService } from "../../Service/PostService";

 const initialState = {
    posts: [],
 }

 export const getAllPost = createAsyncThunk("posts/getAllpost",async(_,{rejectWithValue}) =>{
     try {
         const  {data} = await getAllPostService();
         const {posts}  = data;
         return posts;
     } catch (error) {
         return rejectWithValue(error.response)
     }
 })



export const addNewPost = createAsyncThunk("posts/addNewPost",async(postData,{rejectWithValue}) => {
    try {
        const token = localStorage.getItem('token')
        const response = await addNewPostService(postData,token)
        return response.data.posts
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

export const addComment = createAsyncThunk("posts/addComment",async({postId,commentData},{rejectWithValue}) =>{
    try {
        const token = localStorage.getItem("token");
        const response = await addCommentService(postId,commentData,token);
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
});



export const deleteComment = createAsyncThunk("posts/deleteCommnet",async({postId,commentId},{rejectWithValue}) =>{
    try {
        const token = localStorage.getItem("token");
        const response = await deleteCommentService(postId,commentId,token);
           return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const likePost = createAsyncThunk("posts/likePost",async({postId,token},{rejectWithValue}) =>{
    try {
        const {data} =  await likeService(postId,token);
        const {posts} = data;
        return posts;
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const disLikePost = createAsyncThunk("posts/disLikePost",async({postId,token},{rejectWithValue}) => {
   try {
    const {data} = await disLikeService(postId,token);
    const {posts} = data;
    return posts;
   } catch (error) {
    return rejectWithValue(error)
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
            state.posts = action.payload.reverse()
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
        },
        [addComment.pending] : (state) => {
         state.postStatus = "pending"
        },
        [addComment.fulfilled] : (state,action) => {
            state.postStatus = "fulfilled";
            state.posts = action.payload.posts
        },
        [addComment.rejected] : (state,action) => {
            state.postStatus = "rejected";
            state.posts = action.payload
        },
        [deleteComment.pending] : (state) => {
            state.postStatus = "pending"
        },
        [deleteComment.fulfilled] : (state,action) => {
             state.postStatus = "fulfilled";
             state.posts = action.payload.posts
        },
        [deleteComment.rejected] : (state,action) => {
            state.postStatus = "rejected";
            state.posts = action.payload
        },
        [likePost.fulfilled]: (state,action) => {
      state.postStatus = "fulfilled";
      state.posts = action.payload
        },
        [disLikePost.fulfilled] : (state,action) => {
            state.postStatus = "fulfilled";
            state.posts = action.payload
        }
    }
 })

 export const PostReducer = postSlice.reducer