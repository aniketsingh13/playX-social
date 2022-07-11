import axios from "axios";

export const fetchUserProfileService = (username) => {
  return axios.get(`/api/users/${username}`);
};

export const fetchUserPostService = (username) => {
  return axios.get(`/api/posts/user/${username}`);
};
