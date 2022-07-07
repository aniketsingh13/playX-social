import React, { useEffect } from "react";
import "./Main.css";
import { CgProfile } from "react-icons/cg";
import { MdAddCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../Redux/Feature/PostModalSlice";
import { getAllPost } from "../../Redux/Feature/PostSlice";

import { useState } from "react";
import SinglePost from "../SinglePost/SinglePost";

const Main = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const { posts} = useSelector((state) => state.posts);
  const [followPost, setFollowPost] = useState([]);

  const openModalHandler = () => {
    dispatch(openModal());
  };
  
  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(getAllPost());
      } catch (error) {
        console.log(error);
      }
    })();
    const filterFollowing = posts?.filter(
      (post) =>
        user.username === post.username ||
        user.following.find((account) => account.username === post.username)
     );
    setFollowPost(filterFollowing);
  }, [posts,token]);

 


  return (
    <div className="main_container ">
      <div
        className="post_Container flex flex-row p-xs"
        onClick={openModalHandler}
      >
        <div className="ml-s flex" style={{ color: "blue" }}>
          <CgProfile />
          <span className="f-s font-m ml-m">
            {`Whats on your mind ? ${user.firstName}`}{" "}
          </span>
        </div>
        <div className="mr-s" style={{ color: "blue" }}>
          <MdAddCircle />
        </div>
      </div>
      <div className="mt-l">
        {followPost?.length > 0 ? (
          followPost?.map((post) => <SinglePost key={post._id} post={post} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Main;
