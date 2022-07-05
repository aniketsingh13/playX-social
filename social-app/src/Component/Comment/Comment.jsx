import React from "react";
import "./Comment.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { deleteComment, editComment } from "../../Redux/Feature/PostSlice";
import {TiTickOutline} from "react-icons/ti";
 import {AiOutlineClose} from "react-icons/ai"

const Comment = ({ comment, postId }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.allUsers);
  const [inputComment, setInputComment] = useState(comment.text);
  const [isEdit, setIsEdit] = useState(false);

  const userInfo =
    users &&
    users?.find((commentUser) => comment.username === commentUser.username);

    const commentEditHandler =() => {
      dispatch(editComment({postId: postId,commentId: comment._id, commentData: inputComment}))
      setIsEdit(false);
    }

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
                <span className="mr-s" onClick={() => setIsEdit(!isEdit)}>
                  <BiEdit />
                </span>
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
          {isEdit ? (<form className="flex " onSubmit={() => commentEditHandler()} >
             <input type="text"  className="editComment_input ml-s font-m f-ss"
             value={inputComment}
             onChange={(e) => setInputComment(e.target.value)}
             />
             <AiOutlineClose className="comment_wrightWrong" onClick={() => setIsEdit(false)}/>
            <TiTickOutline className="ml-s comment_wrightWrong"  onClick={() => commentEditHandler()} />
          </form>) : (<div className="ml-s font-m f-ss">{comment.text}</div>)}
        </div>
      </div>
    </div>
  );
};

export default Comment;
