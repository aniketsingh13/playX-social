import React from "react";
import "./ProfileModal.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { hide_profileModal } from "../../Redux/Feature/ProfileModalSlice";
import { useState } from "react";
import { updateUser } from "../../Redux/Feature/ProfileSlice";
import { editUpdateUser } from "../../Redux/Feature/AuthSlice";

const ProfileModal = () => {
  const { profileModal } = useSelector((state) => state.profileEditModal);
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { username, firstName, lastName, userBio, portfolio } = user;

  const [profileDetails, setProfileDetails] = useState({
    firstName: firstName,
    lastName: lastName,
    userBio: userBio,
    portfolio: portfolio,
  });

  const closeModal = () => {
    dispatch(hide_profileModal());
  };

  const editProfileHandler = async (profileDetails) => {
    try {
      const response = await dispatch(
        updateUser({ token, userData: profileDetails })
      );
      dispatch(hide_profileModal());
      dispatch(editUpdateUser(response.payload));
    } catch (error) {
      console.log(error);
    }
  };

  return profileModal ? (
    <div className="profileModal_container">
      <div className="profileEditModal">
        <div className="closeModal p-xs f-m" onClick={closeModal}>
          <AiOutlineArrowLeft />
        </div>
        <div className="ml-s mb-s">
          <img
            className="editprofile_image"
            src={`https://ui-avatars.com/api/name=${username}?background=1d9af1&color=fff`}
            alt="profile"
          />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editProfileHandler(profileDetails);
          }}
        >
          <label htmlFor="firstName" className="p-xs f-ss font-l">
            firstName :
          </label>
          <input
            type="text"
            name="firstName"
            required
            placeholder="update your first name"
            className="profileNames_input"
            value={profileDetails.firstName}
            onChange={(e) =>
              setProfileDetails({
                ...profileDetails,
                firstName: e.target.value,
              })
            }
          />
          <div className="mt-s p-xs">
            <label htmlFor="lastName" className="f-ss font-l">
              lastName :{" "}
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="enter your last name"
              className="profileNames_input ml-s"
              required
              value={profileDetails.lastName}
              onChange={(e) =>
                setProfileDetails({
                  ...profileDetails,
                  lastName: e.target.value,
                })
              }
            />
          </div>
          <div className=" p-xs">
            <label htmlFor="userBio" className="f-ss font-l">
              Bio :{" "}
            </label>
            <textarea
              name="Bio"
              id="userBio"
              cols="43"
              rows="2"
              className="profile_bio ml-s"
              required
              value={profileDetails.userBio}
              onChange={(e) =>
                setProfileDetails({
                  ...profileDetails,
                  userBio: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-s p-xs">
            <label htmlFor="porfolio" className="f-ss font-l">
              portfolio :{" "}
            </label>
            <input
              type="text"
              className="profileNames_input ml-s"
              name="portfolio"
              placeholder="Update protfolio link"
              required
              value={profileDetails.portfolio}
              onChange={(e) =>
                setProfileDetails({
                  ...profileDetails,
                  portfolio: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-s mb-s flex profileButton_container mr-m">
            <button className=" p-xs  font-l profile_EditButton" type="submit">
              Edit Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default ProfileModal;
