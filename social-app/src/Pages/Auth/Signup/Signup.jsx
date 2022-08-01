import React, { useEffect, useState } from 'react'
import "./Signup.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../../Redux/Feature/AuthSlice';
import { useToast } from '../../../Hooks/useToast';

const Signup = () => {
  const [showPass,setShowPass] = useState(false);
  const [Signup,setSignup] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  });
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const {showToast} = useToast()

  const signupHandler = (e) =>{
     e.preventDefault();
     const {email,password,firstName,lastName} = Signup;
     if(email && password && firstName && lastName  !== ""){
       (async () =>{
     dispatch(signUpUser(Signup))
       })()
     }
     showToast("success","sucessfully signed in!")
  }



  useEffect(() =>{
    if(user){
      navigate('/home',{replace: true})
    }
  },[user,navigate]);

  return (
    <div className='flex flex-center mt-xl'>
       <form className="Signup-form  pt-l mb-s" onSubmit={signupHandler}>
          <div className="f-m font-xxl mb-s">Signup</div>
          <div className=" mt-l ">
            <label className="Signup-email-label font-s">First Name</label>
            <input
              type="text"
              className="f-s mt-s "
              name="firstName"
              id="firstName"
              placeholder="Enter your firstName"
              value={Signup.firstName}
              onChange={(e) => setSignup({...Signup,firstName: e.target.value})}
              required
            />
          </div>
          <div className=" mt-l ">
            <label className="Signup-email-label font-s">Last Name</label>
            <input
              type="text"
              className="f-s mt-s "
              name="lastName"
              id="lastName"
              placeholder="Enter your LastName"
              value={Signup.lastName}
              onChange={(e) => setSignup({...Signup,lastName : e.target.value})}
              required
            />
          </div>
          <div className=" mt-l ">
            <label className="Signup-email-label font-s">Email Address</label>
            <input
              type="text"
              className="f-s mt-s "
              name="email"
              id="email"
              placeholder="Enter your email"
              value={Signup.email}
              onChange={(e) => setSignup({...Signup,email: e.target.value})}
              required
            />
          </div>
          <div className="mt-l">
            <label className="Signup-email-label font-s">Password</label>
            <input
              type={showPass ? "text" : "password"}
              className="f-s  mt-s "
              name="password"
              id="password"
              placeholder="Enter your password"
              value={Signup.password}
              onChange={(e) => setSignup({...Signup,password: e.target.value}) }
              required
            />
          </div>
          <div className="mt-s flex">
            <input
              type="checkbox"
              id="Show"
              name="Show"
              className="Signup-checkbox"
              value={showPass}
              onChange={(e) => setShowPass(!showPass)}
            />
            <label className="Signup-text font-l f-s pl-s">Show Password</label>
          </div>
          <div className="mt-s flex">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="Signup-checkbox"
            />
            <label className="Signup-text font-l f-s pl-s">
              I accept all term & conditions
            </label>
          </div>
          <div className="mt-l">
            <button className="Signup-btn f-s" type="submit">
              Create New Account
            </button>
          </div>
          <div className="mt-s mb-l">
            <Link to="/login" className="f-s font-l">
              Already have an account
            </Link>
          </div>
        </form>
    </div>
  )
}

export default Signup