import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { register } from "../../Actions/user.actions";
import { Body3, Heading1 } from "../../Typography";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const dispatch = useDispatch();
  const nav = useNavigate();
  const location = useLocation();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : " ";
  console.log(redirect);

  useEffect(() => {
    if (userInfo) {
      nav(`/${redirect}`);
    }
  }, [nav, userInfo, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(fullname, email, password, username, checkPassword));
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="signup__form">
        <Heading1 className="color-white">
          DoubleG Media Feedback Board
        </Heading1>
        <div className="signup__form__group">
          <label htmlFor="email" className="signup__form__email__label">
            Email :
          </label>
          <input
            type="text"
            className="signup__form__email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="signup__form__group">
          <label htmlFor="email" className="signup__form__username__label">
            Username :
          </label>
          <input
            type="text"
            className="signup__form__username"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="signup__form__group">
          <label htmlFor="email" className="signup__form__fullname__label">
            Full Name :
          </label>
          <input
            type="text"
            className="signup__form__fullname"
            id="fullname"
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>

        <div className="signup__form__group">
          <label htmlFor="password" className="signup__form__password__label">
            Password :
          </label>
          <input
            type="text"
            className="signup__form__password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="signup__form__group">
          <label
            htmlFor="confirmpassword"
            className="signup__form__confirmpassword__label"
          >
            Confirm Password :
          </label>
          <input
            type="text"
            className="signup__form__confirmpassword"
            id="confirmpassword"
            type="password"
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
          />
        </div>

        <input className="submit-button" type="submit" value="Create Account" />

        <Body3 className="color-white">
          Already have an account? <Link to="/login">Log in</Link>
        </Body3>
      </form>
    </div>
  );
};

export default SignUp;
