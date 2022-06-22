import axios from "axios";


export const getAllUserService = () => axios.get("/api/users");