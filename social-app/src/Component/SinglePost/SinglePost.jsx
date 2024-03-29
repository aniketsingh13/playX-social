import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SinglePost.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { openModal } from "../../Redux/Feature/PostModalSlice";
import {
  addBookmark,
  addComment,
  deleteBookmark,
  deletePost,
  disLikePost,
  likePost,
} from "../../Redux/Feature/PostSlice";
import { useState } from "react";
import Comment from "../Comment/Comment";
import { AiFillLike } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import {GrShareOption} from "react-icons/gr"
import { useNavigate } from "react-router-dom";
import { useToast } from "../../Hooks/useToast";


const SinglePost = ({ post }) => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const [comment, setComment] = useState("");
  const { bookmarks } = useSelector((state) => state.posts);
  const navigate = useNavigate();
  const {showToast} = useToast()

  const {
    _id,
    likes: { likeCount, likedBy },
    username,
    content,
    createdAt,
    comments,
    image
  } = post;

  const date = new Date(createdAt);
  const [month, day, year, hour, minutes] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
  ];

  const editHandler = () => {
    dispatch(openModal(post));
  };

  const commentHandler = () => {
    dispatch(addComment({ postId: _id, commentData: comment }));
    setComment("");
    showToast("success","comment added to the post")
  };

  const userLikes = () => {
    return likedBy.find((userLiked) => user.username === userLiked.username)
      ? true
      : false;
  };

  const likeDislikeHandler = async (e) => {
    e.preventDefault();
    try {
      if (userLikes()) {
        const response = await dispatch(disLikePost({ postId: _id, token }));
        showToast("success","post removed from like")
      } else {
        const response = await dispatch(likePost({ postId: _id, token }));
        showToast("success","post liked")
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userBookmark = () => {
    return bookmarks.find((postId) => postId === _id) ? true : false;
  };

  const bookmarkHandler = async (e) => {
    e.preventDefault();
    try {
      if (userBookmark()) {
        const response = await dispatch(deleteBookmark({ postId: _id, token }));
        showToast("success","post remove from bookmark")
      } else {
        const response = await dispatch(addBookmark({ postId: _id, token }));
        showToast("success","post added to bookmark")
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  const sharelinkHandler = () => {
    window.navigator.clipboard.writeText(
      `${window.location.origin}/post/${_id}`
    )
    showToast("success","url copied")
  }
  
  const goToUserhandler = () => {
    navigate(`/profile/${username}`)
  }

  return (
    <div className="singlePost_Cont mb-l">
      <div className="header p-s flex">
        <div className="flex flex-row ">
          <img
            className="proileImg"
            src={user.username === username ? user?.image : image }
            alt={user.username}
          /> 
          <div className="flex flex-column p-xss" onClick={(e) => {e.preventDefault();goToUserhandler(username)}}>
            <span className="mb-s profile_name font-l">{username}</span>
            <p className="f-ss">{`${year}/${
              +month + 1
            }/${day} ${hour}:${minutes}`}</p>
          </div>
        </div>
        {user.username === username && (
          <div className="flex mr-m p-xss postEditDelete">
            <div className="mr-s" onClick={() => editHandler()}>
              <FiEdit />
            </div>
            <div onClick={() => {dispatch(deletePost(_id));
              showToast("success","post deleted")}}>
              <RiDeleteBinLine />
            </div>
          </div>
        )}
      </div>
      <div className="body p-xss ml-m">
        <div className="post_content ">{content}</div>
      </div>
      <div className=" p-xss  flex flex-row ml-l">
        <div className="post_footer flex">
          {userLikes() ? (
            <div onClick={likeDislikeHandler}>
              <AiFillLike />
            </div>
          ) : (
            <div onClick={likeDislikeHandler}>
              <BiLike />
            </div>
          )}
          <span className="ml-s" style={{ color: "black" }}>
            {likeCount > 0 ? likeCount : 0}
          </span>
        </div>
        <div className="post_footer">
          {userBookmark() ? (
            <div className="ml-m" onClick={bookmarkHandler}>
              <BsFillBookmarkFill />
            </div>
          ) : (
            <div className="ml-m" onClick={bookmarkHandler}>
              <BsBookmark />{" "}
            </div>
          )}
        </div>
        <div className="ml-m post_footer" onClick={sharelinkHandler}>
          <GrShareOption  />
        </div>
      </div>
      <div className="mt-s ml-m mr-m ">
        <div className="flex">
          <img
            className="SinglePost_commentImg"
            src={user.image}
            alt="profile-avatar"
          />
          <div className="p-xss SinglePostcomment_container ml-s mb-l">
            <input
              type="text"
              placeholder="write your comment"
              className="comment_input"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="singlePost_commentBtn"
              onClick={() => commentHandler()}
              disabled={comment.trim().length < 1 ? true : false}
            >
              Post
            </button>
          </div>
        </div>
        <div>
          {comments?.length > 0 &&
            comments?.map((comment) => (
              <Comment key={comment._id} comment={comment} postId={_id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
