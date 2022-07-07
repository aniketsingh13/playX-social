import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUsers, getAllUsers } from "../../Redux/Feature/userSlice";
import "./RightSidebar.css";

const RightSidebar = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const { users, userLoading } = useSelector((state) => state.allUsers);
  const [followerList, setFollowerList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(getAllUsers());
        if (response.error) {
          throw new Error("Error in loading all users.");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [token]);

  useEffect(() => {
    setFollowerList(
      users.filter(
        (userList) =>
          userList.username !== user.username &&
          !user.following?.find(
            (account) => account.username === userList.username
          )
      )
    );
  }, [user, users]);

  const followHandler = async (followId) => {
    try {
      const response = await dispatch(
        followUsers({ token, userId: followId, dispatch })
      );
      if (response.error) {
        throw new Error(response.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return users.length > 0 ? (
    <div className="followContainer  ">
      <div className=" font-l ">Suggestion for you</div>
      {userLoading ? (
        <div className="mt-l mb-m font-l ">...Loading</div>
      ) : followerList.length === 0 ? (
        <div className="font-l mt-l mb-m">No more user to follow</div>
      ) : (
        followerList.map((followUser) => (
          <div
            className="flex flex-column mb-s mt-s mr-s ml-s"
            key={followUser._id}
          >
            <div className="flex">
              <img
                className="proileImg"
                src={`https://ui-avatars.com/api/name=${followUser.username}?background=1d9af1&color=fff`}
                alt="profile-avatar"
              />
              <p className="p-xss font-l">
                {followUser.firstName} {followUser.lastName}
              </p>
              <button
                className="follow_btn "
                onClick={() => followHandler(followUser._id)}
              >
                follow
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  ) : (
    <></>
  );
};

export default RightSidebar;
