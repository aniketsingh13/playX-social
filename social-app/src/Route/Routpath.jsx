import React from 'react'
import {Routes,Route} from "react-router-dom";
import {  Landingpage } from '../Pages';
import Mockman from "mockman-js";


const Routpath = () => {
  return (
    <div>
        <Routes>
         <Route path='/'  element={<Landingpage />} />
         <Route path='/mockman' element={<Mockman />} />
        </Routes>
    </div>
  )
}

export default Routpath