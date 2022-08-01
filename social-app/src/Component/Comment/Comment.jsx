import React from "react";
import "./Comment.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin7Line } from "react-icons/ri";
import { deleteComment, editComment } from "../../Redux/Feature/PostSlice";
import {FaRegEdit} from "react-icons/fa"
import {AiOutlineClose,AiOutlineCheck} from "react-icons/ai"
import { useToast } from "../../Hooks/useToast";

const Comment = ({ comment, postId }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.allUsers);
  const [inputComment, setInputComment] = useState(comment.text);
  const [isEdit,setIsEdit] = useState(false);
  const {showToast} = useToast();

  const userInfo =
    users &&
    users?.find((commentUser) => comment.username === commentUser.username);

  const editHandler = () => {
    setIsEdit(false)
    dispatch(editComment({postId: postId,commentId: comment._id,commentData:inputComment }))
    showToast("success","comment edited successfully")
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
                <span onClick={() => setIsEdit(!isEdit)} className='mr-s'>
                  <FaRegEdit />
                </span>
                <span
                  onClick={() =>{
                    dispatch(
                      deleteComment({ postId: postId, commentId: comment._id })
                    )
                  showToast("success","comment deleted")
                  }
                  }
                >
                  <RiDeleteBin7Line />
                </span>
              </div>
            )}
          </div>
          {isEdit ? (<form onSubmit={() => editHandler()}>
            <input type="text" className="editComment_input ml-s" value={inputComment} onChange={(e) => setInputComment(e.target.value)} />
            <AiOutlineClose className="ml-s commentWrightWrong"  onClick={() => setIsEdit(false)}/>
            <AiOutlineCheck className="ml-s commentWrightWrong" onClick={() => editHandler()}/>
          </form>): (<div className="ml-s font-m f-ss">{comment.text}</div>)}
        </div>
      </div>
    </div>
  );
};

export default Comment;
