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
  },
];
