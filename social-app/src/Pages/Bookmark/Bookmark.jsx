import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPostModal from "../../Component/AddPostModal/AddPostModal";
import Aside from "../../Component/Aside/Aside";
import Navbar from "../../Component/Navbar/Navbar";
import RightSidebar from "../../Component/RightSidebar/RightSidebar";
import SinglePost from "../../Component/SinglePost/SinglePost";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { fetchBookmark } from "../../Redux/Feature/PostSlice";
import "./Bookmark.css";

const Bookmark = () => {
  const { token } = useSelector((state) => state.auth);
  const { posts, bookmarks } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useDocumentTitle("Bookmark")

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchBookmark(token));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [token]);

  const bookmarkedPost = posts
    .filter((post) => bookmarks.includes(post._id))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <div className="Bookmark_navbar">
        <Navbar />
      </div>
      <div className="BookmarkCenter_container flex mt-m">
        <div className="bookmark_aside">
          <Aside />
        </div>
        <div className="bookmark_main">
          <div className="bookmark_post">
            {" "}
            {bookmarkedPost.length > 0 ? (
              bookmarkedPost.map((post) => (
                <SinglePost key={post._id} post={post} />
              ))
            ) : (
              <div className="f-m font-xl">
                You have no bookmarks. Bookmark posts from home
              </div>
            )}
          </div>
          <AddPostModal />
        </div>
        <div className="bookmark_right">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
