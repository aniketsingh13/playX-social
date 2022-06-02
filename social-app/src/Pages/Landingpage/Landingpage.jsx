import React from 'react'
import "./Landingpage.css"
import {Link} from "react-router-dom"

const Landingpage = () => {
  return (
    <div className='main_conatiner' >
        <div className=' flex flex-center p-xxl'>
        <div className='mr-s p-l'>
        <h2 className='landing_heading font-xl f-xl mb-l '>Social Games</h2>
        <h4 className='font-l f-m mb-l'>FOLLOW <span className='f-s font-l'> Around The Globe</span></h4>
        <h4 className='font-l f-m mb-l'>CONNECT <span className='f-s font-l'> With Your Friends</span></h4>
        <h4 className='font-l f-m mb-l'>SHARE <span className='f-s font-l'> With Your Friends</span></h4>
        <Link to='' ><div className='landingPage_btn p-s'>Join Now</div></Link>
        <Link to='' ><p className='mt-s p-xss landingPage_loginLink'>Already have an account ?</p></Link>
        </div>
      <div  className='landingImg_cont' >
          <img  className='landing_img' src="https://res.cloudinary.com/aniket-singh/image/upload/v1654174341/Images/undraw_social_media_re_sulg_qtawnl.svg" alt="home-img" />
      </div>
      </div>
    </div>
  )
}

export default Landingpage