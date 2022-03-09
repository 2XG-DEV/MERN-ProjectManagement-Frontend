import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../../Actions/user.actions";
import { Body3, Heading1 } from "../../Typography";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const dispatch = useDispatch();
  const nav = useNavigate();

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
    dispatch(login(email, password));
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login__form">
        <Heading1 className="color-white">
          DoubleG Media Feedback Board
        </Heading1>
        <div className="login__form__group">
          <label htmlFor="email" className="login__form__email__label">
            Email :
          </label>
          <input
            type="text"
            className="login__form__email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login__form__group">
          <label htmlFor="password" className="login__form__password__label">
            Password :
          </label>
          <input
            type="text"
            className="login__form__password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input className="submit-button" type="submit" value="Log In" />

        <Body3 className="color-white">
          Dont have an account? <Link to="/signup">Sign Up</Link>
        </Body3>
      </form>
    </div>
  );
};

export default Login;
