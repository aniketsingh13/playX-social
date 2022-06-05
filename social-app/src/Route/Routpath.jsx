import React from 'react'
import {Routes,Route} from "react-router-dom";
import {  Landingpage, Login } from '../Pages';
import Mockman from "mockman-js";
import Signup from '../Pages/Auth/Signup/Signup';
import Home from '../Pages/Home/Home';
import RequireAuth from '../Component/PrivateRoute/RequireAuth';


const Routpath = () => {
  return (
    <div>
        <Routes>
         <Route path='/'  element={<Landingpage />} />
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
         <Route path='/home' element={<RequireAuth><Home /></RequireAuth>} />
         <Route path='/mockman' element={<Mockman />} />
        </Routes>
    </div>
  )
}

export default Routpath