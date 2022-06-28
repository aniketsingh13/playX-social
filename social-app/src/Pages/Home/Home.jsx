
import React from 'react';
import "./Home.css";
import Navbar from '../../Component/Navbar/Navbar';
import Aside from '../../Component/Aside/Aside';
import Main from '../../Component/Main/Main';
import AddPostModal from '../../Component/AddPostModal/AddPostModal';
import RightSidebar from '../../Component/RightSidebar/RightSidebar';


const Home = () => {
  return (
    <div className='home_cont'>
      <div className='home_navbar'>
      <Navbar />
      </div>
      <div className='home_centerCont mt-m flex'>
        <div className='home_aside'>
        <Aside />
        </div>
        <div className='home_main '>
          <Main />
          <AddPostModal />
        </div>
        <div className='home_right'>
        <RightSidebar />
        </div>
      </div>
    </div>
  )
}

export default Home