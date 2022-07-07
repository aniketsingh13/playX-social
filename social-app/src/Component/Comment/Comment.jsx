import React from "react";
import "./Comment.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { deleteComment } from "../../Redux/Feature/PostSlice";

const Comment = ({ comment, postId }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.allUsers);
  const [inputComment, setInputComment] = useState(comment.text);

  const userInfo =
    users &&
    users?.find((commentUser) => comment.username === commentUser.username);

  return (
    <div className="mb-l">
      <div className="flex">
        <img
          className="SinglePost_commentImg"
          src={`https://ui-avatars.com/api/name=${userInfo.username}?background=1d9af1&color=fff`}
          alt="profile-avatar"
        />
        <div className="ml-s comment_content">
          <div className="flex p-xss comment_top">
            <div className="f-ss font-l ">{`${userInfo.firstName} ${userInfo.lastName}`}</div>
            {comment.username === user.username && (
              <div className="comment_editDeleteContainer">
                <span
                  onClick={() =>
                    dispatch(
                      deleteComment({ postId: postId, commentId: comment._id })
                    )
                  }
                >
                  <RiDeleteBin7Line />
                </span>
              </div>
            )}
          </div>
          <div className="ml-s font-m f-ss">{comment.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
