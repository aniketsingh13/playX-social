import React, { useState } from "react";
import "./AddPostModal.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { addNewPost, editPost } from "../../Redux/Feature/PostSlice";
import { closeModal } from "../../Redux/Feature/PostModalSlice";

const AddPostModal = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const { postModal, postInfo } = useSelector((state) => state.postModal);


  const closeModalHandler = () => {
    dispatch(closeModal())
  }

  return postModal ? (
    <div className="addPostModal_cont">
      <div className="addModal">
        <div
          className="mb-s f-m modalCloseBtn"
          onClick={closeModalHandler}
        >
          <AiOutlineArrowLeft />
        </div>
        <div className="flex flex-center">
          {" "}
          <textarea
            name=""
            cols="35"
            rows="12"
            className="post_input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
        <button className="mt-m post_btn mb-xss">Post</button>
      </div>
    </div>
  ) : null;
};

export default AddPostModal;
