import axios from "axios";
 
 export const loginServices = async(email,password) =>{
     return  axios.post("/api/auth/login",{
           username: email,
          password: password
     })
 }