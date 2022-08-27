import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="Nabar-cont flex p-s">
      <Link to="/home">
        <h3 className="f-m font-l profile_heading ml-s mt-m">Social Games</h3>
      </Link>
      <Link to={`/profile/${user.username}`} className="mr-s">
        <img
          className="prof_img"
          src={user.image}
          alt="profile-avatar"
        />
      </Link>
    </div>
  );
};

export default Navbar;
