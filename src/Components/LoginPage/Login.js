import React, { useState } from "react";
import "../LoginPage/Login.css";
import logo from "../../Assets/images/logo.png";
import pic from "../../Assets/images/login.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  const [headname,setheadname]=useState("")
  const handelLoginClick=()=>{
    setheadname("Welcome Tiny")
  }
  return (
    <div className="fullbody">
      <h3 className="loginLogo">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Login To <img src={logo} className="LoginImage" alt="logo" />
      </h3>
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <div class="card LoginPic">
              <div class="card-body">
                <img src={pic} class="card-img-top" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div class="card p-5">
              <br></br>
              <div class="mb-3">
                <label for="formGroupusername" class="form-label">
                  Email/Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupusername"
                  placeholder="Enter your Email/Username"
                  required="required"
                />
              </div>
              <div class="mb-3">
                <label for="formGrouppassword" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="formGroupExamplepassword"
                  placeholder="Enter your password"
                />
              </div>
              <Link to="/home">
                <button type="button" class="btn btn-success " onClick={handelLoginClick}>
                  Login
                </button>
              </Link>
              <div className="noAccount mt-5">
                <h6>
                  Don't have your Account
                  <Link to="/registrationForm"> Register Here</Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
