import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../Redux/Feature/AuthSlice";
import { useToast } from "../../../Hooks/useToast";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [users, setUsers] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const {showToast} = useToast()

  useEffect(() => {
    if (user) {
      navigate(location.state?.from?.pathname ?? "/home", { replace: true });
    }
  }, [user, location, navigate]);

  const loginHandler = (e) => {
    e.preventDefault();
    const{email,password} = users;
    if(email && password !== ''){
      (async () => {
        dispatch(loginUser(users));
      })()
    }
    showToast("success","Logged in!")
  };
  const guestHandler = () => {
    setUsers((users) => ({
      ...users,
      email: "Aniket Singh",
      password: "aniketsingh123",
    }));
  };

  return (
    <div className="flex flex-center mt-xl ">
      <form className="login-form  pt-l" onSubmit={loginHandler}>
        <div className="f-m font-xxl mb-s">Login</div>
        <div className=" mt-l ">
          <label className="login-email-label font-s">Email Address</label>
          <input
            type="text"
            className="f-s mt-s "
            name="email"
            id="email"
            placeholder="Enter your email"
            value={users.email}
            onChange={(e) => setUsers({ ...users, email: e.target.value })}
            required
          />
        </div>
        <div className="mt-l">
          <label className="login-email-label font-s">Password</label>
          <input
            type={showPass ? "text" : "password"}
            className="f-s  mt-s "
            name="pass"
            id="pass"
            placeholder="Enter your password"
            value={users.password}
            onChange={(e) => setUsers({ ...users, password: e.target.value })}
            required
          />
        </div>
        <div className="mt-l flex">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="login-checkbox pt-s"
            checked={showPass}
            onChange={(e) => setShowPass(!showPass)}
          />
          <label className="font-m f-s "> Show password</label>
          <h3 className="login-text pl-s">Forgot your password?</h3>
        </div>
        <div className="mt-l">
          <button className="login-btn f-s" type="submit">
            Login
          </button>
        </div>
        <div className="mt-l">
          <button className="loginGuest-btn f-s" onClick={guestHandler}>
            Login as Guest
          </button>
        </div>
        <div className="mt-l mb-l">
          <Link to="/signup" className="f-s font-l">
            Create New Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
