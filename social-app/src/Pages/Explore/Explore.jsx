import React from "react";
import "./Explore.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { getAllPost } from "../../Redux/Feature/PostSlice";
import Navbar from "../../Component/Navbar/Navbar";
import Aside from "../../Component/Aside/Aside";
import RightSidebar from "../../Component/RightSidebar/RightSidebar";
import AddPostModal from "../../Component/AddPostModal/AddPostModal";
import SinglePost from "../../Component/SinglePost/SinglePost";

const Explore = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { posts, postsLoading } = useSelector((state) => state.posts);
  const [explorePost, setExpolorePost] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(getAllPost());
      } catch (error) {
        console.log(error);
      }
    })();
  }, [token, dispatch]);

  useEffect(() => {
    setExpolorePost(
      [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    );
  }, [token, posts]);

  return (
    <div>
      <div className="explore_Navbar">
        <Navbar />
      </div>
      <div className="exploreCenter_container flex mt-m">
        <div className="explore_aside">
          <Aside />
        </div>
        <div className="explore_main">
          <div className="explore_post">
            {postsLoading ? (
              <div className="explore_loading f-l font-l">...Loading</div>
            ) : (
              explorePost.length > 0 &&
              explorePost.map((post) => (
                <SinglePost key={post._id} post={post} />
              ))
            )}
          </div>
          <AddPostModal />
        </div>
        <div className="explore_right">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Explore;
