import React from "react";
import { Link } from "react-router-dom";
import "../SignUpPage/SignUp.css";
import sigPic from "../../Assets/images/signups.jpg";

export default function SignUp() {
  return (
    <div className="blankDiv">
      <div className="container ">
        <div className="row">
          <div className="col-sm-7 ">
            <div className="card Picdiv">
              <img src={sigPic} alt="signupPic" />
            </div>
          </div>
          <div className="col-sm-5 registerDiv">
            <div class="card p-5">
              <h4 className="h4">Register Here</h4>
              <br></br>
              <div class="mb-3">
                <label for="formGroupName" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleName"
                  placeholder="Enter your Name"
                />
              </div>
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
                <label for="formGroupphone" class="form-label">
                  Mobile No
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="formGroupExamplePhone"
                  placeholder="Enter your Mobile No"
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
                Register
              </button>
              <div className="noAccount mt-5">
                <h6>
                  Already have your Account
                  <Link to="/login"> Login </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
