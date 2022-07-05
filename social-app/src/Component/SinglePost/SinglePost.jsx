import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SinglePost.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { openModal } from "../../Redux/Feature/PostModalSlice";
import { addComment, deletePost } from "../../Redux/Feature/PostSlice";
import { useState } from "react";
import Comment from "../Comment/Comment";

const SinglePost = ({ post }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [comment, setComment] = useState("");

  const {
    _id,
    likes: { likeCount },
    username,
    content,
    createdAt,
    comments,
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
  };

  return (
    <div className="singlePost_Cont mb-l">
      <div className="header p-s flex">
        <div className="flex flex-row ">
          <img
            className="proileImg"
            src={`https://ui-avatars.com/api/name=${username}?background=1d9af1&color=fff`}
            alt="profile-avatar"
          />
          <div className="flex flex-column p-xss">
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
            <div onClick={() => dispatch(deletePost(_id))}>
              <RiDeleteBinLine />
            </div>
          </div>
        )}
      </div>
      <div className="body p-xss ml-m">
        <div className="post_content ">{content}</div>
      </div>
      <div className="post_footer p-xss  flex flex-row ml-l">
        <div className="flex ">
          <BiLike /> {likeCount}
        </div>
        <div className="ml-m">
          <BsBookmark />{" "}
        </div>
      </div>
      <div className="mt-s ml-m mr-m ">
        <div className="flex">
          <img
            className="SinglePost_commentImg"
            src={`https://ui-avatars.com/api/name=${user.username}?background=1d9af1&color=fff`}
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
