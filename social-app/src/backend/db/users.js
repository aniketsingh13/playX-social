import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    userBio: "Intern at neogCamp",
    portfolio: "https://adarshbalika.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660376493/Images/making-of-a-2d-animation-for-chilledcow-20180706052709_ntnefw.jpg"
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "kumar",
    username: "shubham kumar",
    password: "shubhmakumar123",
    userBio: "SDE 1 at Microsoft",
    portfolio: "https://shubhamkumar-portfolio.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660376952/Images/IMG_0234_twb5ar.jpg"
  },
  {
    _id: uuid(),
    firstName: "Aniket",
    lastName: "Singh",
    username: "Aniket Singh",
    password: "aniketsingh123",
    userBio: "Learning web devlopment at neogCamp",
    portfolio: "https://aniketsingh-portfolio.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660377238/Images/IMG_0204_d6msit.jpg"
  },
  {
    _id: uuid(),
    firstName: "Angel",
    lastName: "priya",
    username: "Angel priya",
    password: "angelpriya123",
    userBio: "Famous person at facebook",
    portfolio: "https://www.facebook.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660377554/Images/0037bf05ccb0bf488fb92c7ceb756352_io4ruc.jpg"
  },
  {
    _id: uuid(),
    firstName: "Jhonny",
    lastName: "Deep",
    username: "Jhonny Deep",
    password: "jhonnydeep123",
    userBio: "You know me",
    portfolio: "https://en.wikipedia.org/wiki/Johnny_Depp",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    image: "https://res.cloudinary.com/aniket-singh/image/upload/v1660377586/Images/download_bed4en.jpg"
  },
];
