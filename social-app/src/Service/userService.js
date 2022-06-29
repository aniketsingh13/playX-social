import axios from "axios";


export const getAllUsersService = () => axios.get("/api/users")

export const followUsersService = (token,userId) =>{
    return axios.post(` /api/users/follow/${userId}`,{},
    {
        headers: {authorization: token},
    }
    )
}

export const unfollowUserService = (token,userId) => {
   return axios.post(`/api/users/unfollow/${userId}`,{},{
    headers: {authorization: token}
   }
   )
}