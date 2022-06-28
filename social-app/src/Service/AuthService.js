import axios from "axios";
 
 export const loginServices = async(email,password) =>{
     return  axios.post("/api/auth/login",{
           username: email,
          password: password
     })
 }

 export const signupService = async(email,password,firstName,lastName) => {
     return axios.post('api/auth/signup',{
         username: email,
         password: password,
         firstName: firstName,
         lastName : lastName
     })
 }

 export const updateUserService = (token,userData) => {
     return axios.post("/api/users/edit",{userData},{
        headers : {
            authorization: token
        }
     })
 };