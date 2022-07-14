import React from "react";
import { Link } from "react-router-dom";
import "./Aside.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Redux/Feature/AuthSlice";
import { openModal } from "../../Redux/Feature/PostModalSlice";

const Aside = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth)

  return (
    <div >
      <div className="aside_container flex  flex-column">
        <Link to="/home" className="link_btn">
          <div className="p-s f-m font-m flex ">
            <span className="aside_content">
              <AiOutlineHome />
            </span>
            <span className="aside_content ml-s">Home</span>
          </div>
        </Link>
        <Link to="/explore" className="link_btn">
          <div className="p-s f-m font-m flex ">
            <span className="aside_content">
              <MdExplore />
            </span>
            <span className="aside_content ml-s">Explore</span>
          </div>
        </Link>
        <Link to="/bookmarks" className="link_btn">
          <div className="p-s f-m font-m flex ">
            <span className="aside_content">
              <IoBookmarkSharp />
            </span>
            <span className="aside_content ml-s">Bookmarks</span>
          </div>
        </Link>
        <Link to={`/profile/${user.username}`} className="link_btn">
          <div className="p-s f-m font-m flex ">
            <span className="aside_content">
              <CgProfile />
            </span>
            <span className="aside_content ml-s">Profile</span>
          </div>
        </Link>
        <button className=" f-m font-m flex logout_btn">
          <span className="aside_content">
            <RiLogoutBoxRLine />
          </span>
          <span
            className="aside_content ml-s"
            onClick={() => dispatch(logoutUser())}
          >
            Logout
          </span>
        </button>
        <button className="p-xss f-m font-m post_btn" onClick={() => dispatch(openModal())}>Post</button>
      </div>
    </div>
  );
};

export default Aside;
