import React from "react";
import "../LoginPage/Login.css";
import logo from "../../Assets/img/logo.png";
import pic from "../../Assets/images/login.jpg";

export default function Login() {
  return (
    <div className="fullbody">
      <h3 className="loginLogo">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Login To <img src={logo} />
      </h3>
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <div class="card">
              <div class="card-body">
                <img src={pic} class="card-img-top" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div class="card p-5">
              <div class="mb-3">
                <label for="formGroupusername" class="form-label">
                  Email/Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupusername"
                  placeholder="Enter your Email/Username"
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
              <button type="button" class="btn btn-success">
                Login
              </button>
              <div className="noAccount mt-5">
                <h6>
                  Don't have your Account <a href="#">Register Here</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
