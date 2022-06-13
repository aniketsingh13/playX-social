
 import React from 'react';
 import "./Main.css";
 import {CgProfile} from "react-icons/cg";
 import {MdAddCircle} from "react-icons/md";
import { useDispatch } from 'react-redux';
import { openModal } from '../../Redux/Feature/PostModalSlice';




 const Main = () => {
    const dispatch = useDispatch();
    
  const openModalHandler = () =>{
   dispatch(openModal())
  }
  
   return (
     <div className='main_container '>
        <div className='post_Container flex flex-row p-xs' onClick={openModalHandler} >
            <div className='ml-s flex' style={{color: 'blue'}} ><CgProfile />
           <span className='f-s font-m ml-m'>Whats on your mind ? </span></div>
           <div className='mr-s' style={{color: 'blue'}} ><MdAddCircle /></div>
        </div> 

     </div>
   )
 }
 
 export default Main