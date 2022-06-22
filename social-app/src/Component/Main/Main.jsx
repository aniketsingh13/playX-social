import React, { useEffect } from "react";
import "./Main.css";
import { CgProfile } from "react-icons/cg";
import { MdAddCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../Redux/Feature/PostModalSlice";
import { getAllPost } from "../../Redux/Feature/PostSlice";
import SinglePost from "../../Pages/SinglePost/SinglePost";

const Main = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.post);

  const openModalHandler = () => {
    dispatch(openModal());
  };

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

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
        {posts.length !== 0 ? (
          posts.map((post) => <SinglePost key={post._id} post={post} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Main;
