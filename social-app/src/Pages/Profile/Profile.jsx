import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProfileModal } from "../../Component";
import AddPostModal from "../../Component/AddPostModal/AddPostModal";
import Aside from "../../Component/Aside/Aside";
import Navbar from "../../Component/Navbar/Navbar";
import RightSidebar from "../../Component/RightSidebar/RightSidebar";
import SinglePost from "../../Component/SinglePost/SinglePost";
import { useToast } from "../../Hooks/useToast";
import { show_profileModal } from "../../Redux/Feature/ProfileModalSlice";
import {
  fetchUserPost,
  fetchUserProfile,
} from "../../Redux/Feature/ProfileSlice";
import { followUsers, unfollowUser } from "../../Redux/Feature/userSlice";
import "./Profile.css";

const Profile = () => {
  const { token, user } = useSelector((state) => state.auth);
  const { userProfile, userPosts } = useSelector((state) => state.userProfile);
  const { users } = useSelector((state) => state.allUsers);
  const { username } = useParams();
  const dispatch = useDispatch();
  const {showToast} = useToast()


  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(
          fetchUserProfile({ username: username })
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [users, username]);

  const { _id, firstName, lastName, followers, following, userBio, portfolio } =
    userProfile;

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchUserPost({ username: username }));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userPosts]);

  const checkFollowed = () =>
    followers?.some((listUser) => listUser.username === user.username);

  const followUnfollowhandler = async () => {
    try {
      if (checkFollowed()) {
        await dispatch(unfollowUser({ token, userId: _id, dispatch }));
        showToast("success","unfollow user")
      } else {
        await dispatch(followUsers({ token, userId: _id, dispatch }));
        showToast("success","follow user")
      }
    } catch (error) {
      showToast("error","something went wrong")
    }
  };

  const editProfileHandler = () => {
    dispatch(show_profileModal());
  };

  return (
    <div>
      <div className="Profile_navbar">
        <Navbar />
      </div>
      <div className="profile_centerContainer flex mt-m">
        <div className="profile_aside">
          <Aside />
        </div>
        <div className="profile_main">
          <div className="profile_post">
            <div className="user_Profile flex ">
              <img
                src={`https://ui-avatars.com/api/name=${username}?background=1d9af1&color=fff`}
                alt="profile"
                className="profile_img ml-s mt-s"
              />
              <div className="p-s flex profile_information">
                <div>
                  <p className="font-l profile_name">
                    {firstName} {lastName}
                  </p>
                  <p className="mt-m font-l profile_bio">{userBio}</p>
                  <div className="mt-m font-l mb-m ">
                    <span>{userPosts?.length} Posts</span>
                    <span className="ml-s ">{followers?.length} Followers</span>
                    <span className="ml-s ">{following?.length} Following</span>
                  </div>
                  <a href={portfolio} target="_blank" className="profile_link ">
                    {portfolio}
                  </a>
                </div>
                <div>
                  {user.username === username && (
                    <button
                      className="p-xs profile_editbtn"
                      onClick={editProfileHandler}
                    >
                      Edit
                    </button>
                  )}
                  {user.username !== username && (
                    <button
                      className="p-xs profile_followBtn"
                      onClick={followUnfollowhandler}
                    >
                      {checkFollowed() ? "Unfollow" : "Follow"}
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-l">
              {userPosts?.length > 0 &&
                [...userPosts]
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map((post) => <SinglePost key={post._id} post={post} />)}
            </div>
          </div>
          <AddPostModal />
          <ProfileModal />
        </div>
        <div className="profile_right">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Profile;
