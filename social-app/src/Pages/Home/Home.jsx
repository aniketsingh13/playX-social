
import React from 'react';
import "./Home.css";
import Navbar from '../../Component/Navbar/Navbar';
import Aside from '../../Component/Aside/Aside';


const Home = () => {
  return (
    <div className='home_cont'>
      <div className='home_navbar'>
      <Navbar />
      </div>
      <div className='mt-m flex'>
        <div className='home_aside'>
        <Aside />
        </div>
        <div className='home_main'>

        </div>
        <div className='home_right'>

        </div>
      </div>
    </div>
  )
}

export default Home