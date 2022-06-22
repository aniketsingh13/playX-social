import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SinglePost.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { openModal } from "../../Redux/Feature/PostModalSlice";
import { deletePost } from "../../Redux/Feature/PostSlice";

const SinglePost = ({ post }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const {
    _id,
    likes: { likeCount },
    username,
    content,
    createdAt,
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
            <div className="mr-s" onClick={() =>editHandler()}>
              <FiEdit />
            </div>
            <div onClick={() => dispatch(deletePost(_id))}>
              <RiDeleteBinLine />
            </div>
          </div>
        )}
      </div>
      <div className="body p-xss ml-m">
        <div className="post_content">{content}</div>
      </div>
      <div className="post_footer p-xss ml-m flex flex-row">
        <div className="flex">
          <BiLike /> {likeCount}
        </div>
        <div className="flex">
          <FaRegComment />
        </div>
        <div className="flex">
          <BsBookmark />{" "}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
