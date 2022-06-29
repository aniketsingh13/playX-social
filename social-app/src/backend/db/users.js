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
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "kumar",
    username: "shubham kumar",
    password: "shubhmakumar123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Aniket",
    lastName: "Singh",
    username: "Aniket Singh",
    password: "aniketsingh123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Angel",
    lastName: "priya",
    username: "Angel priya",
    password: "angelpriya123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jhonny",
    lastName: "Deep",
    username: "Jhonny Deep",
    password: "jhonnydeep123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
