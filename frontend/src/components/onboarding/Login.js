import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-page">
      {/* Preloader */}
      <div className="preload preload-container">
        <div
          className="preload-logo"
          style={{ backgroundImage: "url('images/logo/144.png')" }}
        >
          <div className="spinner"></div>
        </div>
      </div>
      {/* Header */}
      <div className="header fixed-top bg-surface">
        <Link to="#" className="left back-btn">
          <i className="icon-left-btn"></i>
        </Link>
      </div>
      <div className="pt-45 pb-20">
        <div className="tf-container">
          <div className="mt-32">
            <h2 className="text-center">Login Cointex</h2>
            <ul className="mt-40 socials-login">
              <li className="mt-12">
                <Link to="/home" className="tf-btn md social dark">
                  <img src="images/logo/fb.jpg" alt="img" /> Continue with
                  Facebook
                </Link>
              </li>
              <li className="mt-12">
                <Link to="/home" className="tf-btn md social dark">
                  <img src="images/logo/google.jpg" alt="img" /> Continue with
                  Google
                </Link>
              </li>
              <li className="mt-12">
                <Link to="/home" className="tf-btn md social dark">
                  <img src="images/logo/apple.jpg" alt="img" /> Continue with
                  Apple
                </Link>
              </li>
            </ul>
          </div>
          <div className="auth-line mt-12">Or</div>
          <form
            action="https://themesflat.co/html/cointexcrypto/cointex/home.html"
            className="mt-16"
          >
            <fieldset className="mt-16">
              <label className="label-ip">
                <p className="mb-8 text-small">Email</p>
                <input type="text" placeholder="Example@gmail" />
              </label>
            </fieldset>
            <fieldset className="mt-16 mb-12">
              <label className="label-ip">
                <p className="mb-8 text-small">Password</p>
                <div className="box-auth-pass">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    required
                    placeholder="Your password"
                    className="password-field"
                  />
                  <span
                    className="show-pass"
                    onClick={togglePasswordVisibility}
                  >
                    <i
                      className={
                        passwordVisible ? "icon-view-hide" : "icon-view"
                      }
                    ></i>
                  </span>
                </div>
              </label>
            </fieldset>
            <Link to="/reset-pass" className="text-secondary">
              Forgot Password?
            </Link>
            <button className="mt-20">Login</button>
            <p className="mt-20 text-center text-small">
              Already have an Account? &ensp;
              <Link to="/register">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
