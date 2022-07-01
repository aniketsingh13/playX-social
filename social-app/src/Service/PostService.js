import axios from "axios";

export const getAllPostService = () => axios.get("/api/posts");

export const addNewPostService = (postData, token) =>
  axios.post(
    "/api/posts",
    {
      postData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const editPostService = (postData, token) =>
  axios.post(
    `/api/posts/edit/${postData._id}`,
    {
      postData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deletePostService = (postId, token) =>
  axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: token,
    },
  });

export const addCommentService = (postId, commentData, token) =>
  axios.post(
    `/api/comments/add/${postId}`,
    {
      commentData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const editCommentService = (postId, commentId, commentData, token) =>
  axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    {
      commentData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteCommentService = (postId, commentId, token) =>
  axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
